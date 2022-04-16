import { Box, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import React from 'react';
import theme from 'themes/theme';

function BerandaPetani() {
  return (
    <>
      <TheProfileHeader name="Ahmad" role="petani" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, felis netus neque,
            sapien lobortis quisque. Mi id amet sed elit, ultrices. Dapibus vestibulum viverra est
            habitasse ultrices pretium nisi, dis. Magna.
          </Typography>
        </Box>
        <BaseButton shape="withicon" link="isi-blanko" size="large" variant="outlined" fullWidth>
          <Typography variant="h5">Isi Blanko</Typography>
        </BaseButton>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          p={2}
          bgcolor={theme.palette.dark.light}
          borderRadius={2}>
          <Typography variant="h4">Harga Cabai Terkini</Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={3}
          p={2}
          bgcolor={theme.palette.dark.light}
          borderRadius={2}>
          <Typography variant="h4">Total Penjualan</Typography>
        </Box>
        <TheBottomNavigation role="petani" />
      </Box>
    </>
  );
}

export default BerandaPetani;
