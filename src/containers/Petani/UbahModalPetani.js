import { Box, Stack } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { optionsJenisPupuk } from 'utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addModal } from 'redux/slices/modal';
import { useNavigate, useParams } from 'react-router-dom';
import { getLahanById } from 'redux/slices/lahan';
import urlFormData from 'utils/urlFormData';
import * as yup from 'yup';

function UbahModalPetani() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { detail } = useSelector((state) => state.lahan);

  useEffect(() => {
    dispatch(getLahanById(id));
  }, [dispatch]);

  const initialValues = {
    modalBenih: detail.modalBenih,
    modalPupuk: detail.modalPupuk,
    modalPestisida: detail.modalPestisida,
    jenisPupuk: detail.jenisPupuk,
    modalPekerja: detail.modalPekerja
  };
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
    dispatch(addModal({ id, data: formData }))
      .unwrap()
      .then(() => {
        navigate(-1);
        setLoading(false);
      })
      .catch(() => {});
  };

  return (
    <>
      <BaseHeader label="Tambah Modal Penanaman" />
      <Box p={2}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formikProps) => {
            return (
              <Form>
                <Stack gap={2}>
                  <FormikController
                    control="numbercurrency"
                    id="modalBenih"
                    name="modalBenih"
                    label="Benih (Rp)"
                    formikProps={formikProps}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPupuk"
                    name="modalPupuk"
                    label="Pupuk (Rp)"
                    formikProps={formikProps}
                  />
                  <FormikController
                    control="select"
                    id="jenisPupuk"
                    name="jenisPupuk"
                    label="Jenis Pupuk"
                    options={optionsJenisPupuk}
                    formikProps={formikProps}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPestisida"
                    name="modalPestisida"
                    label="Pestisida (Rp)"
                    formikProps={formikProps}
                  />
                  <FormikController
                    control="numbercurrency"
                    id="modalPekerja"
                    name="modalPekerja"
                    label="Tenaga Kerja (Rp)"
                    formikProps={formikProps}
                  />
                </Stack>
                <Box mt={2}>
                  <BaseButton
                    fullWidth
                    type="submit"
                    disabled={!(formikProps.isValid && formikProps.dirty) || loading}>
                    {loading ? 'Memuat..' : 'Ubah'}
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

export default UbahModalPetani;
