import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
// import BaseTextField from 'components/Base/BaseTextField';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from 'redux/slices/auth';
import * as yup from 'yup';
import { optionsTipeCabai, optionsPedagang } from 'utils/constants';

const optionsNama = [
  { id: 0, label: 'Abdel' },
  { id: 1, label: 'Temon' }
];

function CatatPenjualanPetani() {
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValues = {
    cabai: '',
    tanggal: null,
    jumlahDijual: '',
    hargaPerKg: '',
    pedagang: '',
    nama: ''
  };
  const validationSchema = yup.object({
    cabai: yup.string('Masukkan tipe cabai').required('Tipe cabai diperlukan'),
    tanggal: yup.date('Masukkan tanggal transaksi').required('Tanggal transaksi diperlukan'),
    jumlahDijual: yup.number('Masukkan jumlah dijual').required('Jumlah dijual diperlukan'),
    hargaPerKg: yup.number('Masukkan harga per kg').required('Harga per kg diperlukan'),
    pedagang: yup.string('Tipe pedagang dijual').required('Tipe pedagang diperlukan'),
    nama: yup.string('Masukkan nama pedagang').required('Nama pedagang diperlukan')
  });
  const onSubmit = (formValue) => {
    alert(JSON.stringify(formValue, null, 2));
    // const { cabai, tanggal, jumlahDijual, hargaPerKg, pedagang, nama } = formValue;
    // setLoading(true);
    // dispatch(login({ email, password }))
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
      <BaseHeader label="Catat Penjualan Cabai" to="/petani/penjualan" />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          console.log(formikProps);
          return (
            <Form>
              <Stack gap={2} p={2}>
                <Typography variant="h5">Pilih Tipe Cabai</Typography>
                <FormikController
                  control="select"
                  label="Tipe Cabai"
                  name="cabai"
                  options={optionsTipeCabai}
                  formikProps={formikProps}
                />
                <Typography variant="h5">Transaksi</Typography>
                <FormikController
                  control="datepicker"
                  label="Tanggal Transaksi"
                  name="tanggal"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  label="Jumlah Dijual (kg)"
                  name="jumlahDijual"
                  type="number"
                  formikProps={formikProps}
                />
                <FormikController
                  control="textfield"
                  label="Harga Per kg (Rp)"
                  name="hargaPerKg"
                  type="number"
                  formikProps={formikProps}
                />
                <Typography variant="h5">Dijual Kepada</Typography>
                <FormikController
                  control="select"
                  label="Tipe Pedagang"
                  name="pedagang"
                  options={optionsPedagang}
                  formikProps={formikProps}
                />
                <FormikController
                  control="autocomplete"
                  label="Nama Pedagang"
                  name="nama"
                  options={optionsNama}
                  formikProps={formikProps}
                />
                <Box mt={5}>
                  <BaseButton fullWidth type="submit">
                    {/* {loading ? <span>Memuat...</span> : 'Kirim'} */}
                    Kirim
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

export default CatatPenjualanPetani;
