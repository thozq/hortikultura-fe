import { TuneRounded } from '@mui/icons-material';
import {
  Box,
  Stack,
  Typography,
  Grid,
  Drawer,
  useMediaQuery
  // ToggleButton,
  // ToggleButtonGroup
} from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCardBlanko from 'components/Base/BaseCardBlanko';
import React from 'react';
import FormikController from 'components/Formik/FormikController';
import UserService from 'services/user.service';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { jenisStatistik } from 'utils/constants';
// import { CabaiEnum } from 'utils/constants';
// import TheProfileHeader from 'components/Base/TheProfileHeader';

function BerandaDinas() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const [alignment, setAlignment] = useState('Harga Rata-Rata');
  const [isOnApplyClick, setIsOnApplyClick] = useState(false);

  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };
  const [provinsiList, setProvinsi] = useState('');
  const [kabupatenList, setKabupaten] = useState('');
  const [kecamatanList, setKecamatan] = useState('');
  // const [jenisStat, setJenisStat] = useState('');
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [showProvinsi, setShowProvinsi] = useState('');
  const [showKabupaten, setShowKabupaten] = useState('');
  const [showKecamatan, setShowKecamatan] = useState('');

  useEffect(() => {
    getAllProvinsi();
    getAllKabupaten(selectedProvinsi);
    getAllKecamatan(selectedKabupaten);
  }, [selectedProvinsi, selectedKabupaten]);

  const getAllProvinsi = () => {
    UserService.getAllProvinsi().then((response) => {
      const data = response.data.provinsi.map(({ id, nama }) => ({ id, label: nama }));
      console.log(data);
      setProvinsi(data);
    });
  };
  const getAllKabupaten = (id_provinsi) => {
    UserService.getAllKabupaten(id_provinsi).then((response) => {
      const data = response.data.kota_kabupaten.map(({ id, nama }) => ({ id, label: nama }));
      console.log(data);
      setKabupaten(data);
    });
  };
  const getAllKecamatan = (id_kabupaten) => {
    UserService.getAllKecamatan(id_kabupaten).then((response) => {
      const data = response.data.kecamatan.map(({ id, nama }) => ({ id, label: nama }));
      console.log(data);
      setKecamatan(data);
    });
  };
  const initialValues = {
    jenisStatistik: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: ''
  };
  const validationSchema = yup.object({
    jenisStatistik: yup.string('Pilih Jenis Statistik').required('Jenis Statistik wajib diisi'),
    provinsi: yup.number('Pilih provinsi'),
    kabupaten: yup.number('Pilih kabupaten'),
    kecamatan: yup.number('Pilih kecamatan')
  });
  const OnApplyClick = () => {
    setIsOnApplyClick(true);
  };

  const onSubmit = (formValue) => {
    const { jenisStatistik, provinsi, kabupaten, kecamatan } = formValue;
    let provinsiName = provinsiList.filter((item) => item.id == provinsi);
    let kabupatenName = kabupatenList.filter((item) => item.id == kabupaten);
    let kecamatanName = kecamatanList.filter((item) => item.id == kecamatan);

    setShowProvinsi(provinsiName[0].label);
    setShowKabupaten(kabupatenName[0].label);
    setShowKecamatan(kecamatanName[0].label);
    console.log(formValue);
    console.log(provinsiName);
    console.log(kabupatenName);
    console.log(kecamatanName);
    console.log(jenisStatistik);
    OnApplyClick();
    console.log(isOnApplyClick);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: '444px', mx: 'auto', left: open && isDesktop ? '-17px' : 0 }
        }}
        anchor="bottom"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formikProps) => {
            setSelectedProvinsi(formikProps.values.provinsi);
            setSelectedKabupaten(formikProps.values.kabupaten);
            return (
              <Form>
                <Stack gap={2} p={2} mb="56px">
                  <Box>
                    <Typography variant="h4">Filter Statistik Deskriptif</Typography>
                  </Box>
                  {/* <ToggleButtonGroup
                    color="success"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="Jenis">
                    <ToggleButton value="Harga Rata-Rata">Harga Rata-Rata</ToggleButton>
                    <ToggleButton value="Total Produksi">Total Produksi</ToggleButton>
                  </ToggleButtonGroup> */}
                  <FormikController
                    control="autocomplete"
                    fullWidth
                    id="jenisStatistik"
                    name="jenisStatistik"
                    label="Jenis Statistik"
                    formikProps={formikProps}
                    options={jenisStatistik}
                  />
                  <FormikController
                    control="autocomplete"
                    fullWidth
                    id="provinsi"
                    name="provinsi"
                    label="Provinsi"
                    formikProps={formikProps}
                    options={provinsiList}
                  />
                  <FormikController
                    control="autocomplete"
                    fullWidth
                    id="kabupaten"
                    name="kabupaten"
                    label="Kabupaten"
                    options={kabupatenList}
                    formikProps={formikProps}
                    // disabled={!formikProps.values.provinsi || formikProps.values.kabupaten}
                    disabled={!formikProps.values.provinsi}
                  />
                  <FormikController
                    control="autocomplete"
                    fullWidth
                    id="kecamatan"
                    name="kecamatan"
                    label="Kecamatan"
                    formikProps={formikProps}
                    options={kecamatanList}
                    // disabled={!formikProps.values.kabupaten || formikProps.values.kecamatan}
                    disabled={!formikProps.values.kabupaten}
                  />
                  <Box mt={2}>
                    <BaseButton fullWidth type="submit">
                      Terapkan
                    </BaseButton>
                  </Box>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Drawer>
      <Stack gap={2} p={2} mb="56px">
        <Stack direction="row" spacing={7} mb={3}>
          <Typography variant="h4"> Statistik Deskriptif Tanaman </Typography>
          <BaseButton
            shape="filter"
            link=""
            size="small"
            variant="outlined"
            onClick={handleDrawerOpen}>
            <TuneRounded />
            <Typography variant="subtitle1">Filter</Typography>
          </BaseButton>
        </Stack>
        <Box>
          <Typography variant="h5" align="center">
            Tes
          </Typography>
          <Typography variant="h5" mb={1} align="center">
            {`Kec. ${showKecamatan}, ${showKabupaten}, ${showProvinsi}`}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <BaseCardBlanko item="Bawang Putih" harga="Rp43000" persen="5%" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Bawang Merah" harga="Rp43000" persen="5%" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Merah Besar" harga="Rp43000" persen="5%" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Merah Keriting" harga="Rp43000" persen="5%" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Rawit Merah" harga="Rp43000" persen="5%" />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default BerandaDinas;
