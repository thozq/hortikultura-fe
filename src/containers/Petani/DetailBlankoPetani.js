import { Divider, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlankoById } from 'redux/slices/blanko';
import { momentFormat } from 'utils/MomentFormat';

function DetailBlankoPetani() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.blanko);

  useEffect(() => {
    dispatch(getBlankoById(id));
  }, [dispatch]);

  if (!detail) return <Fragment />;
  return (
    <>
      <BaseHeader label={`Blanko - ${momentFormat(detail[0]?.tanggalPencatatan)}`} to={-1} />
      <Stack gap={3} pt={2} px={2}>
        <Stack gap={1}>
          <Typography variant="h5">Tipe Cabai</Typography>
          <Typography variant="body2">{detail[0]?.tipeCabai}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas tanaman akhir bulan lalu (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasTanamanAkhirBulanLalu}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas panen habis / dibongkar (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasPanenHabis}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas panen belum habis (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasPanenBelumHabis}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas rusak/tidak berhasil/puso (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasRusak}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas penanaman baru/tambah tanam (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasPenanamanBaru}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Luas tanaman akhir bulan laporan (Ha)</Typography>
          <Typography variant="body2">{detail[0]?.luasTanamanAkhirBulanLaporan}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Produksi dipanen habis/dibongkar (Kwintal)</Typography>
          <Typography variant="body2">{detail[0]?.prodPanenHabis}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Produksi belum habis (Kwintal)</Typography>
          <Typography variant="body2">{detail[0]?.prodBelumHabis}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Rata-rata harga jual petani per kilogram (Rupiah)</Typography>
          <Typography variant="body2">{detail[0]?.rataHargaJual}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </>
  );
}

export default DetailBlankoPetani;
