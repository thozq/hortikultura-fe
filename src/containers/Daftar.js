import { Box, Link, MenuItem, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTextField from 'components/Base/BaseTextField';
import React, { useState } from 'react';

const optionsPeran = [
  {
    value: 'distributor',
    label: 'Distributor'
  },
  {
    value: 'agen',
    label: 'Agen'
  }
];

function Daftar() {
  const [peran, setPeran] = useState('distributor');

  const handleChange = (event) => {
    setPeran(event.target.value);
  };

  return (
    <>
      <Box p={2} variant="h4">
        Sistem Cabai
      </Box>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Typography variant="h4">Daftar</Typography>
        <Typography>
          Menjadi bagian dalam proses distribusi didaerahmu dan tawarkan cabai terbaikmu !{' '}
        </Typography>
        <BaseTextField fullWidth id="email" name="email" label="Email" />
        <BaseTextField fullWidth id="password" name="password" label="Password" />
        <BaseTextField fullWidth id="repassword" name="repassword" label="Ketik Ulang Password" />
        <BaseTextField fullWidth id="kecamatan" name="kecamatan" label="Kecamatan" />
        <BaseTextField fullWidth id="kabupaten" name="kabupaten" label="Kabupaten" />
        <BaseTextField fullWidth id="privonsi" name="privonsi" label="Provinsi" />
        {/* alamat pake text area nih */}
        <BaseTextField fullWidth id="alamat" name="alamat" label="Alamat" />
        <BaseTextField select label="peran" value={peran} onChange={handleChange}>
          {optionsPeran.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </BaseTextField>

        <BaseButton>Daftar</BaseButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1} p={2}>
        <Typography display="inline-block" variant="body2">
          Belum punya akun?
          <Link> Daftar!</Link>
        </Typography>
        <Link color="black">
          <Typography variant="body2">Lupa password?</Typography>
        </Link>
        <Link underline="none">
          <Typography variant="body2">Masuk sebagai Guest</Typography>
        </Link>
      </Box>
    </>
  );
}

export default Daftar;
