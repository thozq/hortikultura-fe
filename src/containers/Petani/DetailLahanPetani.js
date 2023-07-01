import BaseHeader from 'components/Base/BaseHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { formatNumber, formatRupiah } from 'utils/Formats';
import BaseButton from 'components/Base/BaseButton';
import FormikController from 'components/Formik/FormikController';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelFinishLahan,
  deleteLahan,
  editLuasRusakLahan,
  finishLahan,
  getLahanById
} from 'redux/slices/lahan';
import { momentFormat, today } from 'utils/MomentFormat';
import { CabaiEnum, StatusEnumSmall, PupukEnum } from 'utils/constants';
import urlFormData from 'utils/urlFormData';
import { getAllModal } from 'redux/slices/modal';

function DetailLahanPetani() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.lahan);
  const [changeLuasRusak, setChangeLuasRusak] = useState(detail.luasRusak);

  useEffect(() => {
    dispatch(getLahanById(id));
  }, [dispatch, changeLuasRusak]);

  useEffect(() => {
    dispatch(getAllModal(id));
  }, [dispatch]);

  const { riwayat } = useSelector((state) => state.modal);
  console.log(riwayat);

  const dataBlanko = [
    {
      label: 'Batang Ditanam',
      value: `${detail.jumlahBatang} Batang`
    },
    {
      label: 'Luas Lahan (ha)',
      value: detail.luasLahan
    },
    {
      label: 'Jenis pupuk',
      value: PupukEnum[detail.jenisPupuk]
    },
    {
      label: 'Tanggal Mulai Panen',
      value: detail.tanggalMulaiPanen ? momentFormat(detail.tanggalMulaiPanen) : '-'
    }
  ];

  const dataPanen = detail.transaksi?.map(
    ({ _id, hargaJual, jumlahDijual, totalProduksi, statusTransaksi }) => ({
      id: _id,
      hasil: `${formatNumber(jumlahDijual)} kuintal x ${formatRupiah(hargaJual)}`,
      total: formatRupiah(totalProduksi).luasRusak,
      statusTransaksi
    })
  );

  const dataModal = [
    { label: 'Benih', value: detail.modalBenih },
    { label: 'Pupuk', value: detail.modalPupuk },
    { label: 'Pestisida', value: detail.modalPestisida },
    { label: 'Tenaga Kerja', value: detail.modalPekerja }
  ];

  const handleFinish = () => {
    const tanggalSelesai = today;

    const formData = urlFormData({ tanggalSelesai });

    dispatch(finishLahan({ id, data: formData }))
      .unwrap()
      .then(() => {
        dispatch(getLahanById(id));
      })
      .catch(() => {})
      .finally(() => {});
  };

  const handleCancelFinish = () => {
    dispatch(cancelFinishLahan(id))
      .unwrap()
      .then(() => {
        dispatch(getLahanById(id));
      })
      .catch(() => {})
      .finally(() => {});
  };

  const handleDelete = () => {
    dispatch(deleteLahan(id))
      .unwrap()
      .then(() => {
        navigate(-1);
      })
      .catch(() => {})
      .finally(() => {});
  };

  const initialValues = {
    luasRusak: detail?.luasRusak
  };
  const validationSchema = yup.object({
    luasRusak: yup.number('Masukkan Total Hasil Panen')
  });
  const onSubmit = (formValue) => {
    const { luasRusak } = formValue;
    setChangeLuasRusak(luasRusak);
    const formData = urlFormData({ luasRusak });
    dispatch(editLuasRusakLahan({ id, data: formData }))
      .unwrap()
      .then(() => {
        dispatch(getLahanById(id));
      })
      .catch(() => {})
      .finally(() => {});
  };

  if (!detail) return <Fragment />;
  return (
    <>
      <BaseHeader label={`${detail.namaLahan} - ${CabaiEnum[detail.komoditas]}`} to={-1} />
      <Stack direction="row" alignItems="center" justifyContent="space-between" p={2}>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography variant="body2">Tanggal Penanaman</Typography>
          <Typography variant="h5">{momentFormat(detail.tanggalTanam) ?? '-'}</Typography>
        </Stack>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography variant="body2">Tanggal Selesai</Typography>
          <Typography variant="h5">
            {detail.tanggalSelesai ? momentFormat(detail.tanggalSelesai) : 'Belum Selesai'}
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="column" p={2} gap={2}>
        {dataBlanko?.map(({ label, value }, index) => (
          <Stack key={index}>
            <Typography>{label}</Typography>
            <Typography variant="h6">{value}</Typography>
          </Stack>
        ))}
        <Typography variant="body1">Luas Rusak (ha)</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {(formikProps) => {
            return (
              <Form>
                <Stack direction="row" gap={1}>
                  <FormikController
                    control="number"
                    id="luasRusak"
                    name="luasRusak"
                    label="Luas lahan rusak"
                    shrink
                    defaultValue={formikProps.values['luasRusak']}
                    formikProps={formikProps}
                  />
                  <BaseButton type="submit" disabled={!(formikProps.isValid && formikProps.dirty)}>
                    Ubah
                  </BaseButton>
                </Stack>
              </Form>
            );
          }}
        </Formik>
        <Stack>
          <Typography>Presentase Kerusakan</Typography>
          <Typography variant="h6">{detail.persenRusak}%</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack p={2} gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Total Modal</Typography>
          <BaseButton
            shape="withicon"
            removeIcon
            onClick={() => navigate('/petani/lahan/ubah-modal/' + id)}
            size="small"
            variant="outlined">
            <Typography variant="body1">Tambah Modal</Typography>
          </BaseButton>
        </Stack>
        {dataModal?.map(({ label, value }, index) => (
          <Stack key={index} direction="row" justifyContent="space-between">
            <Typography>{label}</Typography>
            <Typography variant="h6">{formatRupiah(value)}</Typography>
          </Stack>
        ))}
        <Stack direction="row" justifyContent="space-between">
          <Typography>Total</Typography>
          <Typography variant="h6" color="primary.main">
            {formatRupiah(detail.totalModal)}
          </Typography>
        </Stack>
        {riwayat?.length > 0 && (
          <BaseButton
            shape="outlined"
            removeIcon
            onClick={() => navigate('/petani/lahan/riwayat-modal/' + id)}
            size="large"
            variant="outlined">
            <Typography variant="body1">Riwayat Modal</Typography>
          </BaseButton>
        )}
      </Stack>
      <Divider />
      <Stack direction="column" p={2} gap={2}>
        <Typography variant="h5">Hasil Panen</Typography>
        <Stack direction="column" gap={2}>
          {dataPanen?.map(({ id, hasil, total, statusTransaksi }, index) => (
            <Stack key={index} direction="row" justifyContent="space-between" alignItems="end">
              <Stack direction="column">
                <Typography variant="body2">Hasil Panen {index + 1}</Typography>
                <Typography>{hasil}</Typography>
              </Stack>
              <Stack direction="column" alignItems="flex-end">
                <Button
                  sx={{ px: 0 }}
                  onClick={() => {
                    navigate(
                      '/petani/transaksi/detail-transaksi/' +
                        StatusEnumSmall[statusTransaksi] +
                        '/' +
                        id
                    );
                  }}>
                  <Typography textTransform="none">Cek Transaksi</Typography>
                </Button>
                <Typography variant="h5">{total}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Total Hasil Panen</Typography>
          <Typography variant="h5">{formatNumber(detail.jumlahPanen) ?? 0} kuintal</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Total Hasil Penjualan</Typography>
          <Typography variant="h5">{formatRupiah(detail.jumlahPenjualan) ?? 0}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Keuntungan Bersih</Typography>
          <Typography variant="h5" color={detail.keuntungan >= 0 ? 'primary.main' : 'error.main'}>
            {formatRupiah(detail.keuntungan) ?? 0}
          </Typography>
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Rata-rata Jumlah Panen</Typography>
          <Typography variant="h5">
            {formatNumber(detail.rataanJumlahPanen) ?? 0} kuintal
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Rata-rata Harga per kg</Typography>
          <Typography variant="h5">{formatRupiah(detail.rataanHargaJual) ?? 0}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">Jumlah Transaksi</Typography>
          <Typography variant="h5">{detail.countTransaksi} kuintal</Typography>
        </Stack>
      </Stack>
      <Stack p={2} gap={2}>
        <BaseButton type="submit" onClick={handleFinish}>
          Lahan Selesai
        </BaseButton>
        <BaseButton type="submit" shape="error" onClick={handleCancelFinish}>
          Batal Selesai
        </BaseButton>
        <BaseButton type="submit" shape="error" onClick={handleDelete}>
          Hapus Lahan
        </BaseButton>
      </Stack>
    </>
  );
}

export default DetailLahanPetani;
