import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { optionsTipeCabai } from 'utils/constants';
import * as yup from 'yup';

function IsiBlankoPetani() {
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValues = {
    cabai: yup
      .number('Masukkan luas tanaman akhir bulan lalu (Ha)')
      .required('Luas tanaman akhir bulan lalu (Ha) diperlukan'),
    tanggal: new Date(),
    luasLalu: '',
    luasHabis: '',
    luasBelumHabis: '',
    luasRusak: '',
    luasBaru: '',
    luasAkhir: '',
    produksiHabis: '',
    produksiBelumHabis: '',
    rataHarga: ''
  };
  const validationSchema = yup.object({
    cabai: yup
      .number('Masukkan tipe cabai')
      .typeError('Tipe cabai diperlukan')
      .required('Tipe cabai diperlukan'),
    tanggal: yup.date('Masukkan tanggal transaksi').required('Tanggal transaksi diperlukan'),
    luasLalu: yup
      .number('Masukkan luas tanaman akhir bulan lalu (Ha)')
      .required('Luas tanaman akhir bulan lalu (Ha) diperlukan'),
    luasHabis: yup
      .number('Masukkan luas panen habis / dibongkar (Ha)')
      .required('Luas panen habis / dibongkar (Ha) diperlukan'),
    luasBelumHabis: yup
      .number('Masukkan luas panen belum habis (Ha)')
      .required('Luas panen belum habis (Ha) diperlukan'),
    luasRusak: yup
      .number('Masukkan luas rusak/tidak berhasil/puso (Ha)')
      .required('Luas rusak/tidak berhasil/puso (Ha) diperlukan'),
    luasBaru: yup
      .number('Masukkan luas penanaman baru/tambah tanam (Ha)')
      .required('Luas penanaman baru/tambah tanam (Ha) diperlukan'),
    luasAkhir: yup
      .number('Masukkan luas tanaman akhir bulan laporan (Ha)')
      .required('Luas tanaman akhir bulan laporan (Ha) diperlukan'),
    produksiHabis: yup
      .number('Masukkan produksi dipanen habis/dibongkar (Kwintal)')
      .required('Produksi dipanen habis/dibongkar (Kwintal) diperlukan'),
    produksiBelumHabis: yup
      .number('Masukkan produksi belum habis (Kwintal)')
      .required('Produksi belum habis (Kwintal) diperlukan'),
    rataHarga: yup
      .number('Masukkan rata-rata harga jual petani per kilogram (Rupiah)')
      .required('Rata-rata harga jual petani per kilogram (Rupiah) diperlukan')
  });
  const onSubmit = (formValue) => {
    alert(JSON.stringify(formValue, null, 2));
    // const { cabai, tanggal, jumlahDijual, hargaPerKg } = formValue;
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
      <BaseHeader label="Blanko" to={-1} />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Stack gap={2} p={2}>
              <FormikController
                control="select"
                id="cabai"
                name="cabai"
                label="Tipe Cabai"
                options={optionsTipeCabai}
                formikProps={formikProps}
              />
              <FormikController
                control="datepicker"
                label="Tanggal Pencatatan"
                name="tanggal"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasLalu"
                name="luasLalu"
                label="Luas tanaman akhir bulan lalu (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasHabis"
                name="luasHabis"
                label="Luas panen habis / dibongkar (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasBelumHabis"
                name="luasBelumHabis"
                label="Luas panen belum habis (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasRusak"
                name="luasRusak"
                label="Luas rusak/tidak berhasil/puso (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasBaru"
                name="luasBaru"
                label="Luas penanaman baru/tambah tanam (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="luasAkhir"
                name="luasAkhir"
                label="Luas tanaman akhir bulan laporan (Ha)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="produksiHabis"
                name="produksiHabis"
                label="Produksi dipanen habis/dibongkar (Kwintal)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="produksiBelumHabis"
                name="produksiBelumHabis"
                label="Produksi belum habis (Kwintal)"
                type="number"
                formikProps={formikProps}
              />
              <FormikController
                control="textfield"
                id="rataHarga"
                name="rataHarga"
                label="Rata-rata harga jual petani per kilogram (Rupiah)"
                type="number"
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
        )}
      </Formik>
    </>
  );
}

export default IsiBlankoPetani;
