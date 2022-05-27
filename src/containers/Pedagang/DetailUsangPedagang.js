import { Divider, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsangById } from 'redux/slices/usang';
import { formatRupiah } from 'utils/Formats';
import { momentFormat } from 'utils/MomentFormat';

function DetailUsangPedagang() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { detail } = useSelector((state) => state.usang);

  useEffect(() => {
    dispatch(getUsangById(id));
  }, [dispatch]);

  return (
    <>
      <BaseHeader label={`${momentFormat(detail[0]?.tanggalPencatatan)}`} to={-1} />
      <Stack gap={3} pt={2} px={2}>
        <Stack gap={1}>
          <Typography variant="h5">Jumlah Cabai Usang</Typography>
          <Typography variant="body2">{detail[0]?.jumlahUsang}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Total Cabai Sebelumnya</Typography>
          <Typography variant="body2">{detail[0]?.totalSebelum}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Total Cabai Setelahnya</Typography>
          <Typography variant="body2">{detail[0]?.totalSetelah}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Harga per kg</Typography>
          <Typography variant="body2">{formatRupiah(detail[0]?.hargaJual)}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Pemanfaatan Cabai</Typography>
          <Typography variant="body2">{detail[0]?.pemanfaatan}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </>
  );
}

export default DetailUsangPedagang;
