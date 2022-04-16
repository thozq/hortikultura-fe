import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import { optionsTipeCabai } from 'utils/constants';
import * as yup from 'yup';

function CatatUsangPedagang() {
  // const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const initialValues = {
    cabai: '',
    tanggal: new Date(),
    jumlahDijual: '',
    hargaPerKg: ''
  };
  const validationSchema = yup.object({
    cabai: yup.string('Masukkan tipe cabai').required('Tipe cabai diperlukan'),
    tanggal: yup.date('Masukkan tanggal transaksi').required('Tanggal transaksi diperlukan'),
    jumlahDijual: yup.number('Masukkan jumlah dijual').required('Jumlah dijual diperlukan'),
    hargaPerKg: yup.number('Masukkan harga per kg').required('Harga per kg diperlukan')
  });
  const onSubmit = (formValue) => {
    alert(JSON.stringify(formValue, null, 2));
    // const { cabai, tanggal, jumlahDijual, hargaPerKg } = formValue;
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
      <BaseHeader label="Catat Cabai Usang" to="/pedagang/usang" />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formikProps) => (
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

export default CatatUsangPedagang;
