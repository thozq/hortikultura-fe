import { Avatar, Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';

function DataDiriPdh() {
  return (
    <>
      <BaseHeader label="Data Diri" to={-1} />
      <Box p={2}>
        <Stack spacing={2}>
          <Avatar>P</Avatar>
          <Box>
            <Typography variant="h5">Nama</Typography>
            <Typography>Aditya Marwan</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Peran</Typography>
            <Typography>Pdh</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Alamat</Typography>
            <Typography>Jl Menuju cintamu duhay cintaku Blok A6</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Kecamatan</Typography>
            <Typography>Tumenggu</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Provinsi</Typography>
            <Typography>Jawa Timur</Typography>
          </Box>
          <BaseButton type="exit">Keluar</BaseButton>
        </Stack>
      </Box>
    </>
  );
}

export default DataDiriPdh;
