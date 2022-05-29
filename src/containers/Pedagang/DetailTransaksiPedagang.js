import { Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTransaksiById } from 'redux/slices/transaksi';
import { CabaiEnum, StatusEnum } from 'utils/constants';
import { momentFormat } from 'utils/MomentFormat';
import theme from 'themes/theme';
import BaseButton from 'components/Base/BaseButton';
import BaseListDetail from 'components/Base/BaseListDetail';

function DetailTransaksiPedagang() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, id } = useParams();

  const { detail } = useSelector((state) => state.transaksi);

  useEffect(() => {
    dispatch(getTransaksiById(id));
  }, [dispatch]);

  const data = {
    diajukan: [
      { label: 'Nama Pembeli', value: detail[0]?.pembeli?.name },
      { label: 'Peran', value: detail[0]?.pembeli?.role }
    ],
    konfirmasi: [
      { label: 'Nama Penjual', value: detail[0]?.penjual?.name },
      { label: 'Peran', value: detail[0]?.penjual?.role }
    ],
    other: [
      { label: 'Jumlah yang terjual (kg)', value: detail[0]?.jumlahDijual },
      { label: 'Harga jual per kg (Rp/kg)', value: detail[0]?.hargaJual },
      { label: 'Total Pendapatan (Rp)', value: detail[0]?.totalPendapatan }
    ]
  };

  return (
    <>
      <BaseHeader
        label={`${CabaiEnum[detail[0]?.tipeCabai]} - ${momentFormat(detail[0]?.createdAt)}`}
        to={-1}
      />
      <Stack gap={3} pt={2} px={2}>
        <Typography
          variant="h4"
          color={
            detail[0]?.statusTransaksi === 2
              ? 'primary'
              : detail[0]?.statusTransaksi === 1
              ? theme.palette.red.main
              : ''
          }>
          Status: {StatusEnum[detail[0]?.statusTransaksi]}
        </Typography>
        {type === 'diajukan' && <BaseListDetail data={data.diajukan} />}
        {type === 'konfirmasi' && <BaseListDetail data={data.konfirmasi} />}
        <BaseListDetail data={data.other} />
        {detail[0]?.statusTransaksi === 1 && (
          <BaseButton
            shape="outlined"
            onClick={() => navigate('/pedagang/transaksi/ulang-transaksi/' + detail[0]?._id)}>
            Ajukan Kembali
          </BaseButton>
        )}
      </Stack>
    </>
  );
}

export default DetailTransaksiPedagang;
