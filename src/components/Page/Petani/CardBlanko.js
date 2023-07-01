import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import { momentFormat } from 'utils/MomentFormat';
import { CabaiEnum } from 'utils/constants';
import BaseAccordion from 'components/Base/BaseAccordion';
import theme from 'themes/theme';

const CardBlanko = (props) => {
  const { item } = props;

  return (
    <>
      <BaseAccordion
        title={`${CabaiEnum[item.komoditas]} - ${momentFormat(item.tanggalPencatatan)}`}
        link={`/petani/beranda/detail-blanko/${item._id}`}
        detail={
          <BaseCard
            sx={{
              bgcolor: theme.palette.secondary.main
            }}>
            <Stack gap={1}>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas tanaman akhir bulan lalu (ha)</Typography>
                <Typography variant="h6">{item.luasTanamanAkhirBulanLalu ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas panen habis / dibongkar (ha)</Typography>
                <Typography variant="h6">{item.luasPanenHabis ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas panen belum habis (ha)</Typography>
                <Typography variant="h6">{item.luasPanenBelumHabis ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas rusak/tidak berhasil/puso (ha)</Typography>
                <Typography variant="h6">{item.luasRusak ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas penanaman baru/tambah tanam (ha)</Typography>
                <Typography variant="h6">{item.luasPenanamanBaru ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Luas tanaman akhir bulan laporan (ha)</Typography>
                <Typography variant="h6">{item.luasTanamanAkhirBulanLaporan ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Produksi dipanen habis/dibongkar (kuintal)</Typography>
                <Typography variant="h6">{item.prodPanenHabis ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Produksi belum habis (kuintal)</Typography>
                <Typography variant="h6">{item.prodBelumHabis ?? '-'}</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Rata-rata harga jual petani per kilogram (Rupiah)</Typography>
                <Typography variant="h6">{item.rataHargaJual ?? '-'}</Typography>
              </Stack>
            </Stack>
          </BaseCard>
        }></BaseAccordion>
    </>
  );
};

CardBlanko.propTypes = {
  item: PropTypes.object
};

export default CardBlanko;
