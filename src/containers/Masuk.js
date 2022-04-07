import { Box, Link, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseTextField from 'components/Base/BaseTextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { clearMessage } from 'redux/slices/message';
import { login } from 'redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
});

function Masuk() {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/petani/beranda');
    }
  }, [isLoggedIn]);

  const formik = useFormik({
    initialValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    },
    validationSchema: validationSchema,
    onSubmit: (formValue) => {
      alert(JSON.stringify(formValue, null, 2));
      const { email, password } = formValue;
      setLoading(true);
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate('/petani');
        })
        .catch(() => {
          setLoading(false);
        });
    }
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Stack gap={3}>
            <BaseTextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <BaseTextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <BaseButton type="submit">{loading && <span>Loading...</span>}Masuk</BaseButton>
          </Stack>
        </form>
      </Box>
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

export default Masuk;
