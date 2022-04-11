import { Box, Link, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { register } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import FormikController from 'components/Formik/FormikController';

const optionsPeran = [
  {
    value: 'distributor',
    label: 'Distributor'
  },
  {
    value: 'agen',
    label: 'Agen'
  }
];

function Daftar() {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Notes: perlu diroute berdasarkan role
  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/petani/beranda');
    }
  }, [isLoggedIn]);

  const initialValues = {};
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
  });
  const onSubmit = (formValue) => {
    alert(JSON.stringify(formValue, null, 2));
    const { nama, email, password, repassword, provinsi, kecamatan, kabupaten, alamat, peran } =
      formValue;
    setLoading(true);
    dispatch(
      register({
        nama,
        email,
        password,
        repassword,
        provinsi,
        kecamatan,
        kabupaten,
        alamat,
        peran
      })
    )
      .unwrap()
      .then(() => {
        // Notes: perlu diroute berdasarkan role
        navigate('/petani');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Box p={2} variant="h4">
        Sistem Cabai
      </Box>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          return (
            <Form>
              <Stack gap={2} p={2}>
                <Typography variant="h4">Daftar</Typography>
                <Typography>
                  Menjadi bagian dalam proses distribusi didaerahmu dan tawarkan cabai terbaikmu !{' '}
                </Typography>
                {message && (
                  <div>
                    <div role="alert">{message}</div>
                  </div>
                )}
                <FormikController
                  control="textfield"
                  fullWidth
                  id="nama"
                  name="nama"
                  label="Nama"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="repassword"
                  name="repassword"
                  label="Ketik Ulang Password"
                  type="password"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="privonsi"
                  name="provinsi"
                  label="Provinsi"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="kecamatan"
                  name="kecamatan"
                  label="Kecamatan"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  fullWidth
                  id="kabupaten"
                  name="kabupaten"
                  label="Kabupaten"
                  formikProps={formikProps}
                />
                {/* alamat pake text area nih */}
                <FormikController
                  control="multiline"
                  fullWidth
                  id="alamat"
                  name="alamat"
                  label="Alamat"
                  formikProps={formikProps}
                />
                <FormikController
                  control="select"
                  fullWidth
                  id="peran"
                  name="peran"
                  label="Peran"
                  options={optionsPeran}
                  formikProps={formikProps}
                />
                <Box mt={2}>
                  <BaseButton fullWidth type="submit">
                    {loading && <span>Loading...</span>}Daftar
                  </BaseButton>
                </Box>
              </Stack>
            </Form>
          );
        }}
      </Formik>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1} p={2}>
        <Typography display="inline-block" variant="body2">
          Belum punya akun?
          <Link> Daftar!</Link>
        </Typography>
        <Link color="black">
          <Typography variant="body2">Lupa password?</Typography>
        </Link>
        <Link underline="none">
          <Typography variant="body2">Masuk sebagai Guest</Typography>
        </Link>
      </Box>
    </>
  );
}

export default Daftar;
