import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import BaseCardList from 'components/Base/BaseCardList';
import theme from 'themes/theme';

const CardBlanko = (props) => {
  const { item } = props;

  return (
    <>
      <BaseCardList title={item.type} date={item.date} link={`/stok/detail-blanko/${item.id}`}>
        <Box mt={1.5} px={2} display="flex" flexDirection="column" gap={1}>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas tanaman akhir bulan lalu (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasAkhir}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas panen habis / dibongkar (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasHabis}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas panen belum habis (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasBelumHabis}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas rusak/tidak berhasil/puso (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasRusak}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas penanaman baru/tambah tanam (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasPenanaman}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Luas tanaman akhir bulan laporan (Ha)</Typography>
            <Typography variant="body2">{item.blanko.luasAkhirBulan}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Produksi dipanen habis/dibongkar (Kwintal)</Typography>
            <Typography variant="body2">{item.blanko.produksiHabis}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Produksi belum habis (Kwintal)</Typography>
            <Typography variant="body2">{item.blanko.produksiBelumHabis}</Typography>
          </Box>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Rata-rata harga jual petani per kilogram (Rupiah)</Typography>
            <Typography variant="body2">{item.blanko.hargaPerKilo}</Typography>
          </Box>
        </Box>
      </BaseCardList>
    </>
  );
};

CardBlanko.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  item: PropTypes.object
};

export default CardBlanko;
