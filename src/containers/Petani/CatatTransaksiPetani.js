import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
// import BaseTextField from 'components/Base/BaseTextField';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signin } from 'redux/slices/auth';
import * as yup from 'yup';
import { optionsTipeCabai, optionsPedagang } from 'utils/constants';
import { useEffect } from 'react';
import userService from 'services/user.service';
import { useState } from 'react';

const optionsNama = [
  { id: 0, label: 'Abdel' },
  { id: 1, label: 'Temon' }
];

function CatatTransaksiPetani() {
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [tipePedagang, setTipePedagang] = useState('');
  console.log('tipepedagang', tipePedagang);
  useEffect(() => {
    userService
      .getPedagangByRole(tipePedagang)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => error);
  }, [tipePedagang]);

  const initialValues = {
    tipeCabai: '',
    tanggal: null,
    jumlahDijual: '',
    hargaJual: '',
    pedagang: '',
    nama: ''
  };
  const validationSchema = yup.object({
    tipeCabai: yup.string('Masukkan tipe cabai').required('Tipe cabai diperlukan'),
    tanggal: yup.date('Masukkan tanggal transaksi').required('Tanggal transaksi diperlukan'),
    jumlahDijual: yup.number('Masukkan jumlah dijual').required('Jumlah dijual diperlukan'),
    hargaJual: yup.number('Masukkan harga per kg').required('Harga per kg diperlukan'),
    tipePedagang: yup.string('Tipe pedagang dijual').required('Tipe pedagang diperlukan'),
    pembeli: yup.string('Masukkan nama pedagang').required('Nama pedagang diperlukan')
  });
  const onSubmit = () => {
    // const { tipePedagang } = formValue;
    // alert(JSON.stringify(formValue, null, 2));
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
      <BaseHeader label="Catat Penjualan Cabai" to="/petani/penjualan" />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => {
          setTipePedagang(formikProps.values.tipePedagang);
          console.log('ini formikprops', formikProps);
          return (
            <Form>
              <Stack gap={2} p={2}>
                <Typography variant="h5">Pilih Tipe Cabai</Typography>
                <FormikController
                  control="select"
                  label="Tipe Cabai"
                  name="tipeCabai"
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
                  name="hargaJual"
                  type="number"
                  formikProps={formikProps}
                />
                <Typography variant="h5">Dijual Kepada</Typography>
                <FormikController
                  control="select"
                  label="Tipe Pedagang"
                  name="tipePedagang"
                  options={optionsPedagang}
                  formikProps={formikProps}
                />
                <FormikController
                  control="autocomplete"
                  label="Nama Pedagang"
                  name="pembeli"
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

export default CatatTransaksiPetani;
