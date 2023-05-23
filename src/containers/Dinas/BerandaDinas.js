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
// import BaseCardBlanko from 'components/Base/BaseCardBlanko';
import CardStatistik from 'components/Page/Dinas/CardStatistik';
import React from 'react';
import FormikController from 'components/Formik/FormikController';
import UserService from 'services/user.service';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { jenisStatistik } from 'utils/constants';
import dinasService from 'services/dinas.service';
// import { CabaiEnum } from 'utils/constants';
import TheProfileHeader from 'components/Base/TheProfileHeader';

function BerandaDinas() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [provinsiList, setProvinsi] = useState('');
  const [kabupatenList, setKabupaten] = useState('');
  const [kecamatanList, setKecamatan] = useState('');
  const [jenisStat, setJenisStat] = useState('');
  const [selectedProvinsi, setSelectedProvinsi] = useState('');
  const [selectedKabupaten, setSelectedKabupaten] = useState('');
  const [showProvinsi, setShowProvinsi] = useState('');
  const [showKabupaten, setShowKabupaten] = useState('');
  const [showKecamatan, setShowKecamatan] = useState('');

  const [statistic, setStatistic] = useState([]);

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

  const onSubmit = async (formValue) => {
    const { jenisStatistik, provinsi, kabupaten, kecamatan } = formValue;
    console.log(formValue);
    let provinsiName = provinsiList.filter((item) => item.id == provinsi);
    let kabupatenName = kabupatenList.filter((item) => item.id == kabupaten);
    let kecamatanName = kecamatanList.filter((item) => item.id == kecamatan);
    if (jenisStatistik == 'harga') {
      setJenisStat('Harga Rata-Rata');
    } else if (jenisStatistik == 'produksi') {
      setJenisStat('Total Produksi');
    }
    console.log(provinsiName);
    if (provinsiName) setShowProvinsi(provinsiName?.[0]?.label);
    if (kabupatenName) setShowKabupaten(kabupatenName?.[0]?.label);
    if (kecamatanName) setShowKecamatan(kecamatanName?.[0]?.label);
    try {
      const response = await dinasService.filterStatisik(formValue);
      // const comodity = response?.data?.data?.komoditas;

      // if (!comodity) return;

      // // format data
      // const result = [];

      // for (const key in comodity) {
      //   const data = comodity[key];
      //   const month = Object.keys(data);
      //   const value = Object.values(data).map((item) => item.data);

      //   result.push({
      //     komoditas: key,
      //     month: month,
      //     data: value
      //   });
      // }

      // setStatistic(result);
      const comodity = response?.data?.data?.komoditas;
      console.log(comodity);
      const persentase = response?.data?.data?.persentase;
      console.log(persentase);
      if (!comodity) return;

      // format data
      const result = [];

      for (const key in comodity) {
        const data = comodity[key];
        const month = data.map((item) => item[0]);
        const value = data.map((item) => item[1]);

        result.push({
          komoditas: key,
          month: month,
          data: value,
          persentase: persentase[key]
        });
      }

      setStatistic(result);
    } catch (error) {
      console.log('ada error');
    }
  };

  const getLabelAlias = {
    bawangPutih: 'Bawang Putih',
    cabaiRawitMerah: 'Cabai Rawit Merah',
    bawangMerah: 'Bawang Merah',
    cabaiMerahBesar: 'Cabai Merah Besar',
    cabaiMerahKeriting: 'Cabai Merah Keriting'
  };

  return (
    <>
      <TheProfileHeader />
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
                  <FormikController
                    control="select"
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
                    <BaseButton fullWidth type="submit" onClick={handleDrawerClose}>
                      Terapkan
                    </BaseButton>
                  </Box>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Drawer>
      <Box
        sx={{
          background: `linear-gradient(to bottom, #86AC8C,  #FFF)`,
          borderRadius: '20px'
        }}>
        <Stack gap={1} p={2}>
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
            <Typography variant="h6" align="center">
              {`Statistik ${jenisStat}`}
            </Typography>
            <Typography variant="body1" mb={1} align="center">
              {`Kec. ${showKecamatan ? showKecamatan : ' '}, ${
                showKabupaten ? showKabupaten : 'Kab.'
              }, ${showProvinsi ? showProvinsi : 'Semua Provinsi'}`}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {statistic?.map((item, idx) => (
              <Grid item key={idx}>
                <CardStatistik
                  item={getLabelAlias[item?.komoditas]}
                  harga={item?.data?.slice(-1)?.[1]} // Access the last price value
                  persen={item?.persentase} // Access the percentage value
                  desc={jenisStat === 'Harga Rata-Rata' ? 'PER KG' : 'KUINTAL'}
                />
              </Grid>
            ))}
            {/* <Grid item>
              <CardStatistik item="Bawang Merah" harga="23000" persen="5%" />
            </Grid>
            <Grid item>
              <CardStatistik item="Bawang Putih" harga="20000" persen="2%" />
            </Grid>
            <Grid item>
              <CardStatistik item="Cabai Merah Besar" harga="45000" persen="3%" />
            </Grid>
            <Grid item>
              <CardStatistik item="Cabai Rawit Merah" harga="43000" persen="4%" />
            </Grid>
            <Grid item>
              <CardStatistik item="Cabai Merah Keriting" harga="42000" persen="1%" />
            </Grid> */}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

export default BerandaDinas;
