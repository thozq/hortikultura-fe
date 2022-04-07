import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';

const CardPenjualan = (props) => {
  const { item, confirm, wait, link } = props;

  return (
    <BaseCard title={`Status: ${item.status} - ${item.date}`} status={item.status} link={link}>
      <Stack gap={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Dijual Kepada</Typography>
          <Typography variant="h6">
            {item.penjual.name} ({item.penjual.type})
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Tipe Cabai</Typography>
          <Typography variant="h6">{item.jenisCabai}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Jumlah Dijual</Typography>
          <Typography variant="h6">{item.jumlah} kg</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Harga Jual Per kg</Typography>
          <Typography variant="h6">Rp {item.hargaJual}</Typography>
        </Stack>
        <Box display="flex" flexDirection="row" alignItems="center" gap={2} mt={1}>
          {confirm && (
            <>
              <BaseButton shape="error" variant="outlined" fullWidth>
                Batal
              </BaseButton>
              <BaseButton fullWidth>Terima</BaseButton>
            </>
          )}
          {wait && (
            <>
              <BaseButton shape="error" variant="outlined" fullWidth>
                Batal
              </BaseButton>
            </>
          )}
        </Box>
      </Stack>
    </BaseCard>
  );
};

export default CardPenjualan;
