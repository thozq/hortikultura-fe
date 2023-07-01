import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import { CabaiEnum } from 'utils/constants';
import { momentFormat } from 'utils/MomentFormat';
import { formatNumber, formatRupiah } from 'utils/Formats';
import BaseAccordion from 'components/Base/BaseAccordion';
import theme from 'themes/theme';
const CardLahanPetani = (props) => {
  const { item } = props;

  const data = [
    {
      label: 'Tanggal Penanaman',
      value: momentFormat(item.createdAt)
    },
    {
      label: 'Jumlah Batang yang Ditanam',
      value: formatNumber(item.jumlahBatang)
    },
    {
      label: 'Total Hasil Panen (kuintal)',
      value: item.jumlahPanen ? `${formatNumber(item.jumlahPanen)} kuintal` : '0 kuintal'
    },
    {
      label: 'Total Hasil Penjualan',
      value: formatRupiah(item.jumlahPenjualan) ?? 'Rp 0'
    }
  ];

  return (
    <>
      <BaseAccordion
        title={`${item.namaLahan} - ${CabaiEnum[item.komoditas]}`}
        link={`/petani/lahan/detail-lahan/${item._id}`}
        detail={
          <BaseCard
            sx={{
              bgcolor: theme.palette.secondary.main
            }}>
            <Stack gap={1}>
              {data?.map(({ label, value }, index) => (
                <Stack key={index} direction="row" justifyContent="space-between">
                  <Typography variant="body1">{label}</Typography>
                  <Typography variant="h6">{value}</Typography>
                </Stack>
              ))}
            </Stack>
          </BaseCard>
        }></BaseAccordion>
    </>
  );
};

CardLahanPetani.propTypes = {
  item: PropTypes.object
};

export default CardLahanPetani;
