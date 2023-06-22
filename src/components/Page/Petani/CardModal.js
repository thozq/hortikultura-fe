import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import { momentFormat } from 'utils/MomentFormat';
import { formatRupiah } from 'utils/Formats';
// import { PupukEnum } from 'utils/constants';

const CardModal = (props) => {
  const { item } = props;
  const getLabelAlias = {
    urea: 'Urea',
    tsp: 'TSP/SP36',
    za: 'ZA',
    npk: 'NPK',
    npkKhusus: 'NPK Formula Khusus',
    organik: 'Organik',
    organikCair: 'Organik Cair'
  };
  const data = [
    {
      label: 'Tanggal Penambahan',
      value: momentFormat(item.createdAt)
    },
    {
      label: 'Modal Benih',
      value: item.modalBenih === 0 ? 'Rp 0' : formatRupiah(item.modalBenih)
    },
    {
      label: 'Jenis Pupuk',
      value: getLabelAlias[item.jenisPupuk] ?? '-'
    },
    {
      label: 'Modal Pupuk',
      value: item.modalPupuk === 0 ? 'Rp 0' : formatRupiah(item.modalPupuk)
    },
    {
      label: 'Modal Pestisida',
      value: item.modalPestisida === 0 ? 'Rp 0' : formatRupiah(item.modalPestisida)
    },
    {
      label: 'Modal Pekerja',
      value: item.modalPekerja === 0 ? 'Rp 0' : formatRupiah(item.modalPekerja)
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

CardModal.propTypes = {
  item: PropTypes.object
};

export default CardModal;
