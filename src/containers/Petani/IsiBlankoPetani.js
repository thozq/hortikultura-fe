import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlanko } from 'redux/slices/blanko';
import { optionsTipeCabai } from 'utils/constants';
import * as yup from 'yup';

function IsiBlankoPetani() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    tipeCabai: '',
    tanggalPencatatan: new Date(),
    luasTanamanAkhirBulanLalu: '',
    luasPanenHabis: '',
    luasPanenBelumHabis: '',
    luasRusak: '',
    luasPenanamanBaru: '',
    luasTanamanAkhirBulanLaporan: '',
    prodPanenHabis: '',
    prodBelumHabis: '',
    rataHargaJual: ''
  };
  const validationSchema = yup.object({
    tipeCabai: yup.string('Masukkan tipe cabai').required('Tipe cabai diperlukan'),
    tanggalPencatatan: yup
      .date('Masukkan tanggal pencatatan')
      .required('Tanggal pencatatan diperlukan'),
    luasTanamanAkhirBulanLalu: yup
      .number('Masukkan luas tanaman akhir bulan lalu (Ha)')
      .required('Luas tanaman akhir bulan lalu (Ha) diperlukan'),
    luasPanenHabis: yup
      .number('Masukkan luas panen habis / dibongkar (Ha)')
      .required('Luas panen habis / dibongkar (Ha) diperlukan'),
    luasPanenBelumHabis: yup
      .number('Masukkan luas panen belum habis (Ha)')
      .required('Luas panen belum habis (Ha) diperlukan'),
    luasRusak: yup
      .number('Masukkan luas rusak/tidak berhasil/puso (Ha)')
      .required('Luas rusak/tidak berhasil/puso (Ha) diperlukan'),
    luasPenanamanBaru: yup
      .number('Masukkan luas penanaman baru/tambah tanam (Ha)')
      .required('Luas penanaman baru/tambah tanam (Ha) diperlukan'),
    luasTanamanAkhirBulanLaporan: yup
      .number('Masukkan luas tanaman akhir bulan laporan (Ha)')
      .required('Luas tanaman akhir bulan laporan (Ha) diperlukan'),
    prodPanenHabis: yup
      .number('Masukkan produksi dipanen habis/dibongkar (Kwintal)')
      .required('Produksi dipanen habis/dibongkar (Kwintal) diperlukan'),
    prodBelumHabis: yup
      .number('Masukkan produksi belum habis (Kwintal)')
      .required('Produksi belum habis (Kwintal) diperlukan'),
    rataHargaJual: yup
      .number('Masukkan rata-rata harga jual petani per kilogram (Rupiah)')
      .required('Rata-rata harga jual petani per kilogram (Rupiah) diperlukan')
  });
  const onSubmit = (formValue) => {
    // alert(JSON.stringify(formValue, null, 2));
    const {
      tipeCabai,
      tanggalPencatatan,
      luasTanamanAkhirBulanLalu,
      luasPanenHabis,
      luasPanenBelumHabis,
      luasRusak,
      luasPenanamanBaru,
      luasTanamanAkhirBulanLaporan,
      prodPanenHabis,
      prodBelumHabis,
      rataHargaJual
    } = formValue;
    const formData = new URLSearchParams();
    formData.append('tipeCabai', tipeCabai);
    formData.append('tanggalPencatatan', tanggalPencatatan);
    formData.append('luasTanamanAkhirBulanLalu', luasTanamanAkhirBulanLalu);
    formData.append('luasPanenHabis', luasPanenHabis);
    formData.append('luasPanenBelumHabis', luasPanenBelumHabis);
    formData.append('luasRusak', luasRusak);
    formData.append('luasPenanamanBaru', luasPenanamanBaru);
    formData.append('luasTanamanAkhirBulanLaporan', luasTanamanAkhirBulanLaporan);
    formData.append('prodPanenHabis', prodPanenHabis);
    formData.append('prodBelumHabis', prodBelumHabis);
    formData.append('rataHargaJual', rataHargaJual);
    setLoading(true);
    dispatch(addBlanko(formData))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  return (
    <>
      <BaseHeader label="Blanko" to={-1} />
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
                control="datepicker"
                label="Tanggal Pencatatan"
                name="tanggalPencatatan"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasTanamanAkhirBulanLalu"
                name="luasTanamanAkhirBulanLalu"
                label="Luas tanaman akhir bulan lalu (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasPanenHabis"
                name="luasPanenHabis"
                label="Luas panen habis / dibongkar (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasPanenBelumHabis"
                name="luasPanenBelumHabis"
                label="Luas panen belum habis (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasRusak"
                name="luasRusak"
                label="Luas rusak/tidak berhasil/puso (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasPenanamanBaru"
                name="luasPenanamanBaru"
                label="Luas penanaman baru/tambah tanam (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="luasTanamanAkhirBulanLaporan"
                name="luasTanamanAkhirBulanLaporan"
                label="Luas tanaman akhir bulan laporan (Ha)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="prodPanenHabis"
                name="prodPanenHabis"
                label="Produksi dipanen habis/dibongkar (Kwintal)"
                formikProps={formikProps}
              />
              <FormikController
                control="number"
                id="prodBelumHabis"
                name="prodBelumHabis"
                label="Produksi belum habis (Kwintal)"
                formikProps={formikProps}
              />
              <FormikController
                control="numbercurrency"
                id="rataHargaJual"
                name="rataHargaJual"
                label="Rata-rata harga jual petani per kilogram (Rupiah)"
                formikProps={formikProps}
              />
              <Box mt={5}>
                <BaseButton
                  fullWidth
                  type="submit"
                  disabled={
                    !(formikProps.isValid && formikProps.dirty) || formikProps.isSubmitting
                  }>
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

export default IsiBlankoPetani;
