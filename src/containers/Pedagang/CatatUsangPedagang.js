import { Box, MenuItem, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseDatePicker from 'components/Base/BaseDatePicker';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';
import React, { useState } from 'react';

const optionsJenisCabai = [
  {
    value: 'CMB',
    label: 'Cabai Merah Besar'
  },
  {
    value: 'CMK',
    label: 'Cabai Merah Keriting'
  },
  {
    value: 'CRM',
    label: 'Cabai Rawit Merah'
  }
];

function CatatUsangPedagang() {
  const [jenisCabai, setJenisCabai] = useState('');
  return (
    <>
      <BaseHeader label="Jual Tipe Cabai" to="/pedagang/usang" />
      <Stack gap={2} p={2}>
        <Typography variant="h5">Pilih Tipe Cabai</Typography>
        <BaseTextField
          select
          label="Tipe Cabai"
          value={jenisCabai}
          onChange={(event) => setJenisCabai(event.target.value)}>
          {optionsJenisCabai.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </BaseTextField>
        <Typography variant="h5">Transaksi</Typography>
        <BaseDatePicker fullWidth id="" name="tanggal" label="Tanggal" />
        <BaseTextField fullWidth id="" name="jumlahDijual" label="Jumlah Dijual (kg)" />
        <BaseTextField fullWidth id="" name="hargaPerKg" label="Harga Per kg (Rp)" />
        <Box mt={5}>
          <BaseButton fullWidth>Kirim</BaseButton>
        </Box>
      </Stack>
    </>
  );
}

export default CatatUsangPedagang;
