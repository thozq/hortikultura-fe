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
// import FormikDatePicker from 'components/Formik/FormikDatePicker';
import FormikController from 'components/Formik/FormikController';
import { Formik, Form } from 'formik';
import { today } from 'utils/MomentFormat';
import blankoService from 'services/blanko.service';
import fileDownload from 'js-file-download';

const monthAlias = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

function BerandaPdh() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { petani } = useSelector((state) => state.supervisi);
  const initialValues = {
    bulanTahun: today
  };
  const onSubmit = async (values) => {
    const { bulanTahun } = values;
    const date = new Date(bulanTahun);
    const month = date?.getMonth();
    const year = date?.getFullYear();

    const monthFile = monthAlias[(date.getMonth() + 1).toString().padStart(2, '0')]; // Get month (add 1 because getMonth() returns a zero-based index) and add leading zero if necessary
    const yearFile = date.getFullYear(); // Get full year
    const formattedDate = `${monthFile}-${yearFile}`; // Concatenate day, month, and year with hyphens as separators

    console.log(month, year);
    try {
      const params = {
        bulan: month,
        tahun: year
      };
      const data = await blankoService.exportBlanko(params);
      return fileDownload(data, `Blanko ${formattedDate}.xlsx`);
    } catch (error) {
      console.log('ada error');
    }
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
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(formikProps) => (
                    <Form>
                      <Stack>
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
                            pl: 11,
                            pr: 8,
                            pb: 1
                          }}>
                          <FormikController
                            control="datepicker"
                            name="bulanTahun"
                            label="Pilih Bulan"
                            month
                            formikProps={formikProps}
                          />
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
                          <BaseButton type="submit" shape="download">
                            EXPORT
                          </BaseButton>
                        </Box>
                      </Stack>
                    </Form>
                  )}
                </Formik>
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
