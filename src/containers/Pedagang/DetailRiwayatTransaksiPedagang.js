import { Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTransaksiById } from 'redux/slices/transaksi';
import { CabaiEnum, GradeEnum, RoleEnum, StatusEnum } from 'utils/constants';
import { momentFormat } from 'utils/MomentFormat';
import theme from 'themes/theme';
import BaseButton from 'components/Base/BaseButton';
import BaseListDetail from 'components/Base/BaseListDetail';
import { Fragment } from 'react';
import { formatNumber, formatRupiah } from 'utils/Formats';

function DetailRiwayatTransaksiPedagang() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, id } = useParams();
  const { detail } = useSelector((state) => state.transaksi);

  useEffect(() => {
    dispatch(getTransaksiById(id));
  }, [dispatch]);

  const penjualan = [
    {
      label: 'Nama Pembeli',
      value: detail.pembeli ? detail?.pembeli?.name : detail.namaPembeli
    },
    {
      label: 'Peran',
      value: detail.pembeli ? RoleEnum[detail?.pembeli?.role] : RoleEnum[detail.tipePembeli]
    }
  ];

  const pembelian = [
    {
      label: 'Nama Penjual',
      value: detail.penjual ? detail?.penjual?.name : detail.namaPenjual
    },
    {
      label: 'Peran',
      value: detail.penjual ? RoleEnum[detail?.penjual?.role] : RoleEnum[detail.tipePenjual]
    }
  ];

  const other = [
    {
      label: 'Grade',
      value: GradeEnum[detail?.grade] ?? '-'
    },
    {
      label: 'Jumlah yang terjual (kuintal)',
      value: `${formatNumber(detail?.jumlahDijual)} kuintal`
    },
    { label: 'Harga Jual Per kg (Rp/kg)', value: formatRupiah(detail?.hargaJual) }
  ];

  if (!detail) return <Fragment />;

  return (
    <>
      <BaseHeader
        label={`${CabaiEnum[detail?.komoditas]} - ${momentFormat(detail?.tanggalPencatatan)}`}
        to={-1}
      />
      <Stack gap={3} pt={2} px={2}>
        <Typography
          variant="h4"
          color={
            detail?.statusTransaksi === 2
              ? 'primary'
              : detail?.statusTransaksi === 1
              ? theme.palette.red.main
              : ''
          }>
          Status: {StatusEnum[detail?.statusTransaksi]}
        </Typography>
        {type === 'penjualan' && <BaseListDetail data={penjualan} />}
        {type === 'pembelian' && <BaseListDetail data={pembelian} />}
        {<BaseListDetail data={other} />}
        {detail?.statusTransaksi === 1 && (
          <BaseButton
            shape="outlined"
            onClick={() => navigate('/pedagang/transaksi/ulang-transaksi/' + detail?._id)}>
            Ajukan Kembali
          </BaseButton>
        )}
      </Stack>
    </>
  );
}

export default DetailRiwayatTransaksiPedagang;
