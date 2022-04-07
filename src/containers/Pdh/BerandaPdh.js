import { SupervisedUserCircleRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCardList from 'components/Base/BaseCardList';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import React from 'react';

function BerandaPdh() {
  return (
    <>
      <TheProfileHeader name="Ahmad" role="pdh" />
      <Stack gap={2} p={2} mb="56px">
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, felis netus neque,
            sapien lobortis quisque. Mi id amet sed elit, ultrices. Dapibus vestibulum viverra est
            habitasse ultrices pretium nisi, dis. Magna.
          </Typography>
        </Box>
        <BaseButton shape="withicon" href="" size="large" variant="outlined" fullWidth>
          <Typography variant="h5">Akuisisi Akun</Typography>
          <SupervisedUserCircleRounded />
        </BaseButton>
        <Box>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h5" mb={1}>
              Riwayat Akun
            </Typography>
            <Typography variant="h6" mb={1}>
              Lihat Semua
            </Typography>
          </Box>
          <Stack gap={1}>
            <BaseCardList title="Misih Narwan" />
            <BaseCardList title="Misih Narwan" />
            <BaseCardList title="Misih Narwan" />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default BerandaPdh;
