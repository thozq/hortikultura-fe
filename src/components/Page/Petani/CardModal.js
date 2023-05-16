import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import { momentFormat } from 'utils/MomentFormat';
import { formatRupiah } from 'utils/Formats';

const CardModal = (props) => {
  const { item } = props;
  const data = [
    {
      label: 'Tanggal Penambahan',
      value: momentFormat(item.createdAt)
    },
    {
      label: 'Jenis Pupuk',
      value: item.jenisPupuk
    },
    {
      label: 'Modal Pupuk',
      value: formatRupiah(item.modalPupuk)
    },
    {
      label: 'Modal Pestisida',
      value: formatRupiah(item.modalPestisida)
    },
    {
      label: 'Modal Pekerja',
      value: formatRupiah(item.modalPekerja)
    }
  ];
  return (
    <>
      <BaseCard>
        <Stack gap={1}>
          {data?.map(({ label, value }, index) => (
            <Stack key={index} direction="row" justifyContent="space-between">
              <Typography variant="body1">{label}</Typography>
              <Typography variant="h6">{value}</Typography>
            </Stack>
          ))}
        </Stack>
      </BaseCard>
    </>
  );
};

CardModal.PropTypes = {
  item: PropTypes.object
};

export default CardModal;
