import { Box, Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';

const CardUsang = (props) => {
  const { item } = props;

  return (
    <BaseCard>
      <Stack spacing={2}>
        <Typography variant="h5">{item.date}</Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Jumlah Cabai Usang</Typography>
          <Typography variant="h6">{item.jumlah}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Total Cabai Sebelumnya</Typography>
          <Typography variant="h6">{item.totalSebelum}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Total Cabai Setelahnya</Typography>
          <Typography variant="h6">{item.totalSetelah}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Harga per kg</Typography>
          <Typography variant="h6">{item.hargaPerKg}</Typography>
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default CardUsang;
