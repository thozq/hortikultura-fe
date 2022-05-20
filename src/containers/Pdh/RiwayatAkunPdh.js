import { Box, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import CardRiwayatAkun from 'components/Page/Pedagang/CardRiwayatAkun';
import React from 'react';
import { useSelector } from 'react-redux';

function RiwayatAkunPdh() {
  const { petani } = useSelector((state) => state.pdh);
  console.log(petani);
  return (
    <>
      <BaseHeader label="Riwayat Akun" to={-1} />
      <Box px={2} py={1}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Riwayat Akun
        </Typography>
        <Stack gap={2}>
          {petani?.map((item, index) => (
            <CardRiwayatAkun key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default RiwayatAkunPdh;
