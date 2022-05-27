import { Divider, Stack, Typography } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTransaksiById } from 'redux/slices/transaksi';
import { CabaiEnum, StatusEnum } from 'utils/constants';
import { momentFormat } from 'utils/MomentFormat';
import theme from 'themes/theme';
import BaseButton from 'components/Base/BaseButton';

function DetailTransaksiPetani() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, id } = useParams();

  const { detail } = useSelector((state) => state.transaksi);

  useEffect(() => {
    dispatch(getTransaksiById(id));
  }, [dispatch]);

  return (
    <>
      <BaseHeader
        label={`${CabaiEnum[detail[0]?.tipeCabai]} - ${momentFormat(detail[0]?.tanggal)}`}
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
        {type === 'diajukan' && (
          <>
            <Stack gap={1}>
              <Typography variant="h5">Nama Pembeli</Typography>
              <Typography variant="body2">{detail[0]?.pembeli.name}</Typography>
              <Divider />
            </Stack>
            <Stack gap={1}>
              <Typography variant="h5">Peran</Typography>
              <Typography variant="body2">{detail[0]?.pembeli.role}</Typography>
              <Divider />
            </Stack>
          </>
        )}
        {type === 'konfirmasi' && (
          <>
            <Stack gap={1}>
              <Typography variant="h5">Nama Penjual</Typography>
              <Typography variant="body2">{detail[0]?.penjual.name}</Typography>
              <Divider />
            </Stack>
            <Stack gap={1}>
              <Typography variant="h5">Peran</Typography>
              <Typography variant="body2">{detail[0]?.penjual.role}</Typography>
              <Divider />
            </Stack>
          </>
        )}
        <Stack gap={1}>
          <Typography variant="h5">Jumlah yang terjual (kg)</Typography>
          <Typography variant="body2">{detail[0]?.jumlahDijual}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Harga jual per kg (Rp/kg)</Typography>
          <Typography variant="body2">{detail[0]?.hargaJual}</Typography>
          <Divider />
        </Stack>
        <Stack gap={1}>
          <Typography variant="h5">Total Pendapatan (Rp)</Typography>
          <Typography variant="body2">{detail[0]?.totalPendapatan}</Typography>
          <Divider />
        </Stack>
        {detail[0]?.statusTransaksi === 1 && (
          <BaseButton
            shape="outlined"
            onClick={() => navigate('/petani/transaksi/ulang-transaksi/' + detail[0]?._id)}>
            Ajukan Kembali
          </BaseButton>
        )}
      </Stack>
    </>
  );
}

export default DetailTransaksiPetani;
