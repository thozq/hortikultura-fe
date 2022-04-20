import { Divider, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStokById } from 'redux/slices/stok';
import { formatNumber, formatRupiah } from 'utils/Formats';
import { momentFormat } from 'utils/MomentFormat';

function DetailStokPetani() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.stok);

  const data = detail[0];

  useEffect(() => {
    dispatch(getStokById(id));
  }, [dispatch]);

  return (
    <>
      <BaseHeader label={`Stok - ${momentFormat(detail.createdAt)}`} to={-1} />
      <Stack gap={3} pt={2} px={2}>
        <Stack gap={1}>
          <Typography variant="h5">Total Hasil Panen</Typography>
          <Typography variant="body2">{formatNumber(data.totalHasilPanen)}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Hasil Panen Sukses</Typography>
          <Typography variant="body2">{formatNumber(data.hasilPanenSukses)}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Hasil Panen Gagal</Typography>
          <Typography variant="body2">{formatNumber(data.hasilPanenGagal)}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Harga jual per Kg (Rp/Kg)</Typography>
          <Typography variant="body2">{formatRupiah(data.hargaJual)}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </>
  );
}

export default DetailStokPetani;
