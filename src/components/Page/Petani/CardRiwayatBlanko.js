import { Box, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';

const CardRiwayatBlanko = (props) => {
  const { item } = props;

  return (
    <BaseCard display="flex" flexDirection="column" gap={1}>
      <Typography variant="h6">{item.date}</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>Jenis Cabai</Typography>
        <Typography variant="h6">{item.jenisCabai}</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>Total Panen</Typography>
        <Typography variant="h6">{item.totalPanen}</Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>Harga Per kg</Typography>
        <Typography variant="h6">{item.hargaPerKg}</Typography>
      </Box>
    </BaseCard>
  );
};

export default CardRiwayatBlanko;
