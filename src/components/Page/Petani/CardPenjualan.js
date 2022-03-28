import { Box, Typography } from '@mui/material';
import BaseCardList from 'components/Base/BaseCardList';
import theme from 'themes/theme';

const CardPenjualan = (props) => {
  const { item } = props;

  return (
    <>
      <BaseCardList
        title={item.jenisCabai}
        date={item.tanggal}
        link={`/penjualan/detail-penjualan/${item.id}`}>
        <Box mt={1.5} px={2} display="flex" flexDirection="column" gap={1}>
          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Jumlah Dijual</Typography>
            <Typography>{item.jumlahDijual}</Typography>
          </Box>

          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Harga jual / kg</Typography>
            <Typography>{item.hargaJual}</Typography>
          </Box>

          <Box
            py={0.5}
            px={2}
            bgcolor={theme.palette.dark.light}
            borderRadius={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between">
            <Typography>Dijual Kepada</Typography>
            <Typography>
              {item.dijualKepada.name} - {item.dijualKepada.type}
            </Typography>
          </Box>
        </Box>
      </BaseCardList>
    </>
  );
};

export default CardPenjualan;
