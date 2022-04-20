import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { optionsTipeCabai } from 'utils/constants';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { addStok } from 'redux/slices/user';

function CatatStokPetani() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    tipeCabai: '',
    totalHasilPanen: '',
    hasilPanenSukses: '',
    hasilPanenGagal: '',
    hargaJual: ''
  };
  const validationSchema = yup.object({
    tipeCabai: yup.string('Masukkan Tipe Cabai').required('Tipe Cabai Wajib diisi'),
    totalHasilPanen: yup
      .number('Masukkan Total Hasil Panen')
      .required('Total Hasil Panen Wajib diisi'),
    hasilPanenSukses: yup
      .number('Masukkan Hasil Panen Sukses')
      .required('Hasil Panen Sukses Wajib diisi'),
    hasilPanenGagal: yup
      .number('Masukkan Hasil Panen Gagal')
      .required('Hasil Panen Gagal Wajib diisi'),
    hargaJual: yup.number('Masukkan Harga Jual').required('Harga Jual Wajib diisi')
  });
  const onSubmit = (formValue) => {
    const { tipeCabai, totalHasilPanen, hasilPanenSukses, hasilPanenGagal, hargaJual } = formValue;
    setLoading(true);
    dispatch(addStok({ tipeCabai, totalHasilPanen, hasilPanenSukses, hasilPanenGagal, hargaJual }))
      .unwrap()
      .then(() => {
        navigate('/petani/stok');
        setLoading(false);
      })
      .catch(() => {});
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
                id="tipeCabai"
                name="tipeCabai"
                label="Tipe Cabai"
                options={optionsTipeCabai}
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="totalHasilPanen"
                name="totalHasilPanen"
                label="Total Hasil Panen (kg)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                fullWidth
                id="hasilPanenSukses"
                name="hasilPanenSukses"
                label="Hasil Panen Sukses (kg)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                fullWidth
                id="hasilPanenGagal"
                name="hasilPanenGagal"
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
                <BaseButton fullWidth type="submit" disabled={loading}>
                  {loading ? <span>Memuat...</span> : 'Kirim'}
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
