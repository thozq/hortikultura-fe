import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsang } from 'redux/slices/usang';
import { optionsTipeCabai, optionsUsang } from 'utils/constants';
import * as yup from 'yup';

function CatatUsangPedagang() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    komoditas: '',
    jumlahUsang: '',
    tanggalPencatatan: new Date(),
    pemanfaatan: ''
  };
  const validationSchema = yup.object({
    komoditas: yup.string('Masukkan komoditas tanaman').required('Komoditas tanaman diperlukan'),
    jumlahUsang: yup.number('Masukkan jumlah dijual').required('Jumlah dijual diperlukan'),
    tanggalPencatatan: yup
      .date('Masukkan tanggal transaksi')
      .required('Tanggal transaksi diperlukan'),
    pemanfaatan: yup.string('Masukkan pemanfaatan').required('Pemanfaatan diperlukan')
  });
  const onSubmit = (formValue) => {
    const { komoditas, jumlahUsang, tanggalPencatatan, pemanfaatan } = formValue;
    const formData = new URLSearchParams();
    formData.append('komoditas', komoditas);
    formData.append('jumlahUsang', jumlahUsang);
    formData.append('tanggalPencatatan', tanggalPencatatan);
    formData.append('pemanfaatan', pemanfaatan);
    setLoading(true);
    dispatch(addUsang(formData))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <BaseHeader label="Catat Komoditas Usang" to="/pedagang/usang" />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Stack gap={2} p={2}>
              <Typography variant="h5">Pilih Komoditas Tanaman</Typography>
              <FormikController
                control="select"
                label="Komoditas"
                name="komoditas"
                options={optionsTipeCabai}
                formikProps={formikProps}
              />
              <FormikController
                control="numberweight"
                label="Jumlah Cabai Usang (kg)"
                name="jumlahUsang"
                formikProps={formikProps}
              />
              <FormikController
                control="datepicker"
                label="Tanggal"
                name="tanggalPencatatan"
                formikProps={formikProps}
              />
              <FormikController
                control="select"
                options={optionsUsang}
                label="Pemanfaatan Cabai Usang"
                name="pemanfaatan"
                formikProps={formikProps}
              />
              <Box mt={5}>
                <BaseButton
                  fullWidth
                  type="submit"
                  disabled={!(formikProps.isValid && formikProps.dirty) || loading}>
                  {loading ? 'Memuat...' : 'Kirim'}
                </BaseButton>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CatatUsangPedagang;
