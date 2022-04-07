import { Box, MenuItem } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';
import { useState } from 'react';

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

function CatatStokPetani() {
  const [jenisCabai, setJenisCabai] = useState('');

  const handleChange = (event) => {
    setJenisCabai(event.target.value);
  };

  return (
    <>
      <BaseHeader label="Catat Stok" to="/petani/stok" />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <BaseTextField select label="Jenis Cabai" value={jenisCabai} onChange={handleChange}>
          {optionsJenisCabai.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </BaseTextField>
        <BaseTextField fullWidth id="" name="totalPanen" label="Total Hasil Panen (kg)" />
        <BaseTextField fullWidth id="" name="panenSukses" label="Hasil Panen Sukses (kg)" />
        <BaseTextField fullWidth id="" name="panenGagal" label="Hasil Panen Gagal (kg)" />
        <BaseTextField fullWidth id="" name="hargaJual" label="Hasil jual per kg (Rp)" />
        <BaseButton>Kirim</BaseButton>
      </Box>
    </>
  );
}

export default CatatStokPetani;
