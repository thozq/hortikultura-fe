import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { optionsTipeCabai } from 'utils/constants';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signin } from 'redux/slices/auth';
import * as yup from 'yup';

function CatatStokPetani() {
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

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
    alert(JSON.stringify(formValue, null, 2));
    // const { email, password } = formValue;
    // setLoading(true);
    // dispatch(signin({ email, password }))
    //   .unwrap()
    //   .then(() => {
    //     // Notes: perlu diroute berdasarkan role
    //     navigate('/petani');
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <>
      <BaseHeader label="Catat Stok" to="/petani/stok" />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Stack gap={2} p={2}>
              <FormikController
                control="select"
                id="tipe"
                name="tipe"
                label="Tipe Cabai"
                options={optionsTipeCabai}
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="totalPanen"
                name="totalPanen"
                label="Total Hasil Panen (kg)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                fullWidth
                id="panenSukses"
                name="panenSukses"
                label="Hasil Panen Sukses (kg)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                fullWidth
                id="panenGagal"
                name="panenGagal"
                label="Hasil Panen Gagal (kg)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                fullWidth
                id="hargaJual"
                name="hargaJual"
                label="Hasil jual per kg (Rp)"
                type="number"
                formikProps={formikProps}
              />
              <Box mt={2}>
                <BaseButton fullWidth type="submit">
                  {/* {loading ? <span>Memuat...</span> : 'Masuk'} */}
                  Masuk
                </BaseButton>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CatatStokPetani;
