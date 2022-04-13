import { Box, Link, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { clearMessage } from 'redux/slices/message';
import { login } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import FormikController from 'components/Formik/FormikController';

function Masuk() {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // Notes: perlu diroute berdasarkan role
  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/petani/beranda');
    }
  }, [isLoggedIn]);

  const initialValues = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };
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
    // alert(JSON.stringify(formValue, null, 2));
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
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
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Typography variant="h4">Masuk</Typography>
        <Typography>
          Masuk kedalam akunmu untuk akses stok cabai cabai kamu dan jualkan ke orang sekitarmu !
        </Typography>
        {message && (
          <div>
            <div role="alert">{message}</div>
          </div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formikProps) => (
            <Form>
              <Stack gap={3}>
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
                <BaseButton type="submit">{loading ? <span>Memuat...</span> : 'Masuk'}</BaseButton>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1} p={2}>
        <Typography display="inline-block" variant="body2">
          Belum punya akun?
          <Link href="/daftar"> Daftar!</Link>
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

export default Masuk;
