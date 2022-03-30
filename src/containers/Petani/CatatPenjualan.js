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

function CatatPenjualan() {
  return (
    <>
      <BaseHeader label="Jual Jenis Cabai" to="/petani/penjualan" />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <FormControl>
          <FormLabel id="radio-buttons-group-label-jenis-cabai">
            <Typography variant="h5">Pilih Jenis Cabai</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label-jenis-cabai"
            name="radio-buttons-group">
            <FormControlLabel value="cmb" control={<Radio />} label="Cabai Merah Besar" />
            <FormControlLabel value="cmk" control={<Radio />} label="Cabai Merah Keriting" />
            <FormControlLabel value="crm" control={<Radio />} label="Cabai Rawit Merah" />
          </RadioGroup>
        </FormControl>
        <BaseDatePicker fullWidth id="" name="tanggal" label="Tanggal Transaksi" />
        <BaseTextField fullWidth id="" name="jumlahDijual" label="Jumlah Dijual (kg)" />
        <BaseTextField fullWidth id="" name="hargaPerKg" label="Harga Per kg (Rp)" />
        <FormControl>
          <FormLabel id="radio-buttons-group-label-dijual-kepada">
            <Typography variant="h5">Dijual Kepada</Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label-dijual-kepada"
            name="radio-buttons-group">
            <FormControlLabel value="pengumpul" control={<Radio />} label="Pengumpul" />
            <FormControlLabel value="pengecer" control={<Radio />} label="Pengecer" />
            <FormControlLabel value="distributor" control={<Radio />} label="Distributor" />
            <FormControlLabel value="agen" control={<Radio />} label="Agen" />
            <FormControlLabel value="grosir" control={<Radio />} label="Grosir" />
          </RadioGroup>
        </FormControl>
        <BaseTextField fullWidth id="" name="nama" label="Nama" />
        <BaseButton>Kirim</BaseButton>
      </Box>
    </>
  );
}

export default CatatPenjualan;
