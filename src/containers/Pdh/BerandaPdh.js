import { SupervisedUserCircleRounded, DownloadDoneRounded } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  Popover,
  InputLabel,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import TheProfileHeader from 'components/Base/TheProfileHeader';
import AccordionRiwayatAkun from 'components/Page/Pdh/AccordionRiwayatAkun';
import React from 'react';
// import FormikController from 'components/Formik/FormikController';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllSupervisi } from 'redux/slices/supervisi';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function BerandaPdh() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petani } = useSelector((state) => state.supervisi);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const [month, setBulan] = useState('');
  const handleChange = (event) => {
    setBulan(event.target.value);
  };
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
                  <Typography variant="h4" sx={{ p: 1.5 }}>
                    Export Blanko
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ p: 1.5 }}>
                    Rekapitulasi Blanko tersedia dalam format excel.
                  </Typography>
                </Box>
                <FormControl sx={{ m: 1.5, minWidth: 200, alignContent: 'center' }}>
                  <InputLabel id="demo-simple-select-helper-label">Bulan</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={month}
                    label="Pilih Bulan"
                    onChange={handleChange}>
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    p: 1,
                    m: 1
                  }}>
                  <BaseButton
                    type="submit"
                    shape="outlined"
                    color="error"
                    sx={{ mr: '55px', ml: '20px' }}>
                    BATALKAN
                  </BaseButton>
                  <BaseButton type="submit" shape="outlined">
                    DOWNLOAD
                  </BaseButton>
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
