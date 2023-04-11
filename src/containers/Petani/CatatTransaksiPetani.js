import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { optionsGradeCabai, optionsPedagang } from 'utils/constants';
import { useEffect } from 'react';
import userService from 'services/user.service';
import { useState } from 'react';
import { addTransaksiPetani } from 'redux/slices/transaksi';
import { today } from 'utils/MomentFormat';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import urlFormData from 'utils/urlFormData';
import lahanService from 'services/lahan.service';
import moment from 'moment';

function CatatTransaksiPetani() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [namaLahan, setNamaLahan] = useState([]);
  const [lahanId, setLahanId] = useState('');
  const [tanggalTanam, setTanggalTanam] = useState('');
  const [tipePembeli, setTipePembeli] = useState('');
  const [namaPembeli, setNamaPembeli] = useState([]);
  const [haveAccount, setHaveAccount] = useState('yes');

  useEffect(() => {
    lahanService.getLahanName().then((response) => {
      const data = response.data.data.map(({ _id, namaLahan, tanggalTanam }) => ({
        value: _id,
        label: namaLahan,
        tanggalTanam
      }));
      setNamaLahan(data);
    });
  }, []);

  useEffect(() => {
    let tanggalTanam = '';
    const filterLahan = namaLahan.find((x) => x.value === lahanId);
    tanggalTanam = filterLahan?.tanggalTanam;
    setTanggalTanam(tanggalTanam);
  }, [lahanId]);

  useEffect(() => {
    if (haveAccount === 'yes' && tipePembeli) {
      setLoading(true);
      userService
        .getPedagangByRole(tipePembeli)
        .then((response) => {
          const data = response.data.data.map(({ _id, name }) => ({
            id: _id,
            label: name
          }));
          setNamaPembeli(data);
          setLoading(false);
        })
        .catch((error) => error);
    }
  }, [tipePembeli]);

  const initialValues = {
    lahan: '',
    tanggalPencatatan: today,
    jumlahDijual: '',
    hargaJual: '',
    grade: '',
    pembeli: '',
    namaPembeli: '',
    tipePembeli: ''
  };
  const validationSchema = yup.object({
    lahan: yup.string('Masukkan lahan').required('Lahan diperlukan'),
    tanggalPencatatan: yup
      .date('Masukkan tanggal transaksi')
      .required('Tanggal transaksi diperlukan'),
    jumlahDijual: yup.number('Masukkan jumlah dijual').required('Jumlah dijual diperlukan'),
    hargaJual: yup.number('Masukkan harga per kg').required('Harga per kg diperlukan'),
    grade: yup.string('Masukkan grade cabai').required('Grade tanaman diperlukan')
    // tipePembeli: yup.string('Tipe pedagang dijual').required('Tipe pedagang diperlukan'),
    // pembeli: yup.string('Masukkan nama pedagang').required('Nama pedagang diperlukan')
  });
  const onSubmit = (formValue) => {
    const {
      lahan,
      tanggalPencatatan,
      jumlahDijual,
      hargaJual,
      grade,
      pembeli,
      namaPembeli,
      tipePembeli
    } = formValue;

    const accountForm = { lahan, tanggalPencatatan, jumlahDijual, hargaJual, grade, pembeli };
    const noAccountForm = {
      lahan,
      tanggalPencatatan,
      jumlahDijual,
      hargaJual,
      grade,
      namaPembeli,
      tipePembeli
    };

    let formData = {};

    if (haveAccount === 'yes') {
      formData = urlFormData(accountForm);
    } else {
      formData = urlFormData(noAccountForm);
    }

    setLoading(true);
    dispatch(addTransaksiPetani(formData))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <>
      <BaseHeader label="Catat Transaksi Cabai" to={-1} />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          setTipePembeli(formikProps.values.tipePembeli);
          setLahanId(formikProps.values.lahan);
          return (
            <Form>
              <Stack gap={2} p={2}>
                <Typography variant="h5">Pilih Lahan</Typography>
                <FormikController
                  control="select"
                  label="Pilih Lahan"
                  name="lahan"
                  options={namaLahan}
                  formikProps={formikProps}
                />
                <FormikController
                  control="datepicker"
                  label="Tanggal Penjualan Cabai"
                  name="tanggalPencatatan"
                  formikProps={formikProps}
                  minDate={moment(tanggalTanam)}
                />
                <FormikController
                  control="numberweight"
                  label="Hasil Panen (kg)"
                  name="jumlahDijual"
                  formikProps={formikProps}
                />
                <FormikController
                  control="numbercurrency"
                  label="Harga Jual Per kg (Rp)"
                  name="hargaJual"
                  formikProps={formikProps}
                />
                <FormikController
                  control="radio"
                  options={optionsGradeCabai}
                  label="Grade"
                  name="grade"
                  formikProps={formikProps}
                />
                <FormControl>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    Pembeli
                  </Typography>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={haveAccount}
                    onChange={(event) => setHaveAccount(event.target.value)}>
                    <Stack direction="column" gap={2}>
                      <Stack
                        direction="column"
                        gap={1}
                        borderRadius={2}
                        border="4px solid"
                        p={1}
                        sx={
                          haveAccount === 'yes'
                            ? {
                                borderColor: 'primary.main'
                              }
                            : {
                                border: '4px solid white'
                              }
                        }>
                        <FormControlLabel
                          value="yes"
                          control={
                            <Radio
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<RadioButtonChecked />}
                            />
                          }
                          label={<Typography variant="h6">Pedagang punya akun</Typography>}
                          labelPlacement="end"
                        />

                        <FormikController
                          control="select"
                          label="Tipe Pedagang"
                          name="tipePembeli"
                          options={optionsPedagang}
                          defaultValue={'distributor'}
                          disabled={haveAccount == 'no'}
                          formikProps={formikProps}
                        />
                        <FormikController
                          control="autocomplete"
                          label="Nama Pedagang"
                          name="pembeli"
                          options={namaPembeli}
                          disabled={loading || haveAccount == 'no'}
                          formikProps={formikProps}
                        />
                      </Stack>

                      <Stack
                        direction="column"
                        gap={1}
                        borderRadius={2}
                        border="4px solid"
                        p={1}
                        sx={
                          haveAccount === 'no'
                            ? {
                                borderColor: 'primary.main'
                              }
                            : {
                                border: '4px solid white'
                              }
                        }>
                        <FormControlLabel
                          value="no"
                          control={
                            <Radio
                              icon={<RadioButtonUnchecked />}
                              checkedIcon={<RadioButtonChecked />}
                            />
                          }
                          label={<Typography variant="h6">Pedagang belum punya akun</Typography>}
                          labelPlacement="end"
                        />

                        <FormikController
                          control="select"
                          label="Tipe Pedagang"
                          name="tipePembeli"
                          options={optionsPedagang}
                          defaultValue={'distributor'}
                          disabled={haveAccount == 'yes'}
                          formikProps={formikProps}
                        />
                        <FormikController
                          control="textfield"
                          label="Nama Pedagang"
                          name="namaPembeli"
                          disabled={haveAccount == 'yes'}
                          formikProps={formikProps}
                        />
                      </Stack>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <Box mt={5}>
                  <BaseButton
                    fullWidth
                    type="submit"
                    disabled={!(formikProps.isValid && formikProps.dirty) || loading}>
                    {loading ? <span>Memuat...</span> : 'Kirim'}
                  </BaseButton>
                </Box>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default CatatTransaksiPetani;
