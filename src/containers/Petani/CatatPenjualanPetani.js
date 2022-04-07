import { Autocomplete, Box, MenuItem, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseDatePicker from 'components/Base/BaseDatePicker';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';
import React, { useState } from 'react';

const optionsNama = [
  { id: 0, label: 'Abdel' },
  { id: 1, label: 'Temon' }
];

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

const optionsPedagang = [
  {
    value: 'pengumpul',
    label: 'Pengumpul'
  },
  {
    value: 'pengecer',
    label: 'Pengecer'
  },
  {
    value: 'distributor',
    label: 'Distributor'
  },
  {
    value: 'agen',
    label: 'Agen'
  },
  {
    value: 'grosir',
    label: 'Grosir'
  }
];

function CatatPenjualanPetani() {
  const [jenisCabai, setJenisCabai] = useState('');
  const [tipePedagang, setTipePedagang] = useState('');

  return (
    <>
      <BaseHeader label="Jual Tipe Cabai" to="/petani/penjualan" />
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
        <BaseDatePicker fullWidth id="" name="tanggal" label="Tanggal Transaksi" />
        <BaseTextField fullWidth id="" name="jumlahDijual" label="Jumlah Dijual (kg)" />
        <BaseTextField fullWidth id="" name="hargaPerKg" label="Harga Per kg (Rp)" />
        <Typography variant="h5">Dijual Kepada</Typography>
        <BaseTextField
          select
          label="Tipe Pedagang"
          value={tipePedagang}
          onChange={(event) => setTipePedagang(event.target.value)}>
          {optionsPedagang.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </BaseTextField>
        <Autocomplete
          disablePortal
          id="nama"
          options={optionsNama}
          renderInput={(params) => <BaseTextField {...params} label="Nama Pembeli" />}
        />
        <Box mt={5}>
          <BaseButton fullWidth>Kirim</BaseButton>
        </Box>
      </Stack>
    </>
  );
}

export default CatatPenjualanPetani;
