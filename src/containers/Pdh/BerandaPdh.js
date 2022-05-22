import { SupervisedUserCircleRounded } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import AccordionRiwayatAkun from 'components/Page/Pdh/AccordionRiwayatAkun';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllSupervisi } from 'redux/slices/pdh';

function BerandaPdh() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petani } = useSelector((state) => state.pdh);

  useEffect(() => {
    dispatch(getAllSupervisi());
  }, []);

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
        <BaseButton
          shape="withicon"
          removeIcon
          link=""
          size="large"
          variant="outlined"
          fullWidth
          onClick={() => navigate('/pdh/akuisisi-akun')}>
          <Typography variant="h5">Akuisisi Akun</Typography>
          <SupervisedUserCircleRounded />
        </BaseButton>
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h5">Riwayat Akun</Typography>
            <Button
              sx={{ textTransform: 'none' }}
              color="secondary"
              onClick={() => navigate('/pdh/riwayat-akun')}>
              <Typography variant="h6">Lihat Semua</Typography>
            </Button>
          </Stack>
          <Stack gap={1}>
            {petani?.map((item, index) => (
              <AccordionRiwayatAkun key={index} item={item} index={index} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default BerandaPdh;
