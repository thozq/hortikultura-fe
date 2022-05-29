import { Stack } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import BaseListDetail from 'components/Base/BaseListDetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsangById } from 'redux/slices/usang';
import { formatNumber, formatRupiah } from 'utils/Formats';
import { momentFormat } from 'utils/MomentFormat';

function DetailUsangPedagang() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { detail } = useSelector((state) => state.usang);

  useEffect(() => {
    dispatch(getUsangById(id));
  }, [dispatch]);

  const data = [
    { label: 'Jumlah Cabai Usang', value: formatNumber(detail[0]?.jumlahUsang) },
    { label: 'Total Cabai Sebelumnya', value: detail[0]?.totalSebelum },
    { label: 'Total Cabai Setelahnya', value: detail[0]?.totalSetelah },
    { label: 'Harga per kg', value: formatRupiah(detail[0]?.hargaJual) },
    { label: 'Pemanfaatan Cabai', value: detail[0]?.pemanfaatan }
  ];

  return (
    <>
      <BaseHeader label={`${momentFormat(detail[0]?.tanggalPencatatan)}`} to={-1} />
      <Stack gap={3} pt={2} px={2}>
        <BaseListDetail data={data} />
      </Stack>
    </>
  );
}

export default DetailUsangPedagang;
