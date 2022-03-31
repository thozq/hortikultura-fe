import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';

const CardKonfirmasi = (props) => {
  const { item, type = 'waiting' } = props;

  return (
    <BaseCard>
      <Stack spacing={2}>
        <Typography variant="h5">{item.date}</Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Jumlah</Typography>
          <Typography variant="h6">{item.jumlah}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Jenis Cabai</Typography>
          <Typography variant="h6">{item.jenisCabai}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Harga Jual Per kg</Typography>
          <Typography variant="h6">{item.hargaJual}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography>Penjual</Typography>
          <Typography variant="h6">
            {item.penjual.name} ({item.penjual.type})
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          {type === 'waiting' ? (
            <>
              <BaseButton type="error" variant="outlined" fullWidth>
                Batal
              </BaseButton>
              <BaseButton fullWidth>Terima</BaseButton>
            </>
          ) : (
            <>
              <BaseButton type="error" variant="outlined" fullWidth>
                Batal
              </BaseButton>
            </>
          )}
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default CardKonfirmasi;
