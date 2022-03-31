import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseDatePicker from 'components/Base/BaseDatePicker';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';
import React from 'react';

function CatatUsangPedagang() {
  return (
    <>
      <BaseHeader label="Jual Jenis Cabai" to="/pedagang/usang" />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label-jenis-cabai">
            <Typography variant="h5">Catat Cabai Usang</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label-jenis-cabai"
            name="radio-buttons-group">
            <FormControlLabel value="cmb" control={<Radio />} label="Cabai Merah Besar" />
            <FormControlLabel value="cmk" control={<Radio />} label="Cabai Merah Keriting" />
            <FormControlLabel value="crm" control={<Radio />} label="Cabai Rawit Merah" />
          </RadioGroup>
        </FormControl>
        <BaseTextField fullWidth id="" name="jumlahDijual" label="Jumlah Dijual (kg)" />
        <BaseTextField fullWidth id="" name="hargaPerKg" label="Harga Per kg (Rp)" />
        <BaseDatePicker fullWidth id="" name="tanggal" label="Tanggal" />
        <BaseButton>Kirim</BaseButton>
      </Box>
    </>
  );
}

export default CatatUsangPedagang;
