import { SupervisedUserCircleRounded, DownloadDoneRounded } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  Popover
  // InputLabel,
  // FormControl,
  // Select,
  // MenuItem
} from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import AccordionRiwayatAkun from 'components/Page/Pdh/AccordionRiwayatAkun';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllSupervisi } from 'redux/slices/supervisi';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MonthlyPicker from 'components/Base/MonthlyPicker';

function BerandaPdh() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petani } = useSelector((state) => state.supervisi);

  useEffect(() => {
    dispatch(getAllSupervisi());
  }, []);

  return (
    <>
      <TheProfileHeader />
      <Stack gap={2} p={2} mb="56px">
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <BaseButton
                shape="withicon"
                removeIcon
                link=""
                size="large"
                variant="outlined"
                fullWidth
                {...bindTrigger(popupState)}>
                <Typography variant="h5">Export Blanko</Typography>
                <DownloadDoneRounded />
              </BaseButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}>
                <Box>
                  <Typography variant="h4" sx={{ pl: 1.5, pb: 1, pt: 1 }}>
                    Export Blanko
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ pl: 1.5, pr: 1.5, pb: 1, pt: 1 }}>
                    Rekapitulasi Blanko tersedia dalam format excel.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pl: 12,
                    pr: 8,
                    pb: 1
                  }}>
                  <MonthlyPicker />
                </Box>
                <Box
                  sx={{
                    pl: 4,
                    m: 1,
                    pr: 4
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between">
                  <BaseButton shape="batal" onClick={popupState.close}>
                    BATAL
                  </BaseButton>
                  <BaseButton shape="download">EXPORT</BaseButton>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
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
