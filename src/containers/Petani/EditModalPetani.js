import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { optionsJenisPupuk } from 'utils/constants';
import { useDispatch } from 'react-redux';
import { editModal } from 'redux/slices/modal';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllModal } from 'redux/slices/modal';
import urlFormData from 'utils/urlFormData';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

function EditModalPetani() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { riwayat } = useSelector((state) => state.modal);
  const selectedModal = riwayat.find((item) => item._id === id);
  console.log(selectedModal);

  useEffect(() => {
    dispatch(getAllModal(id));
  }, [dispatch]);

  const initialValues = {
    modalBenih: selectedModal.modalBenih,
    modalPupuk: selectedModal.modalPupuk,
    modalPestisida: selectedModal.modalPestisida,
    modalPekerja: selectedModal.modalPekerja,
    jenisPupuk: selectedModal.jenisPupuk
  };
  console.log(initialValues);
  const validationSchema = yup.object({});
  const onSubmit = (formValue) => {
    const { modalBenih, modalPupuk, jenisPupuk, modalPestisida, modalPekerja } = formValue;

    const formData = urlFormData({
      modalBenih,
      modalPupuk,
      jenisPupuk,
      modalPestisida,
      modalPekerja
    });

    setLoading(true);
    dispatch(editModal({ id, data: formData }))
      .unwrap()
      .then(() => {
        navigate(-1);
        setLoading(false);
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <>
      <BaseHeader label="Ubah Modal Penanaman" />
      <Box p={2}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formikProps) => {
            console.log(formikProps);
            return (
              <Form>
                <Stack gap={2}>
                  <FormikController
                    control="numbercurrency"
                    id="modalBenih"
                    name="modalBenih"
                    label="Benih (Rp)"
                    formikProps={formikProps}
                    shrink
                    defaultValue={formikProps.values.modalBenih}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPupuk"
                    name="modalPupuk"
                    label="Pupuk (Rp)"
                    formikProps={formikProps}
                    shrink
                    defaultValue={formikProps.values.modalPupuk}
                  />
                  <FormikController
                    control="select"
                    id="jenisPupuk"
                    name="jenisPupuk"
                    label="Jenis Pupuk"
                    options={optionsJenisPupuk}
                    formikProps={formikProps}
                    shrink
                    defaultValue={formikProps.values.jenisPupuk}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPestisida"
                    name="modalPestisida"
                    label="Pestisida (Rp)"
                    shrink
                    formikProps={formikProps}
                    defaultValue={formikProps.values.modalPestisida}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPekerja"
                    name="modalPekerja"
                    label="Tenaga Kerja (Rp)"
                    shrink
                    formikProps={formikProps}
                    defaultValue={formikProps.values.modalPekerja}
                  />
                </Stack>
                <Box mt={2}>
                  <BaseButton
                    fullWidth
                    type="submit"
                    disabled={!(formikProps.isValid && formikProps.dirty) || loading}>
                    {loading ? 'Memuat..' : 'Edit'}
                  </BaseButton>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
}

export default EditModalPetani;
