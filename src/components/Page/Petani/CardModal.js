import PropTypes from 'prop-types';
import { Stack, Typography, Box } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import { momentFormat } from 'utils/MomentFormat';
import { formatRupiah } from 'utils/Formats';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteModal } from 'redux/slices/modal';
import BaseButton from 'components/Base/BaseButton';
import { useNavigate } from 'react-router-dom';
// import { PupukEnum } from 'utils/constants';

const CardModal = (props) => {
  const { item } = props;
  console.log(props);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    setLoading(true);
    dispatch(deleteModal({ id: item._id, idLahan: item.lahan }))
      .unwrap()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
    console.log(item._id);
  };
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
        <Box display="flex" flexDirection="row" alignItems="center" gap={5} mt={1} ml={5} mr={5}>
          <BaseButton
            shape="withicon"
            removeIcon
            onClick={() => navigate(`/petani/lahan/edit-modal/${item?._id}`)}
            size="small"
            variant="outlined">
            <Typography variant="body1">Edit Modal</Typography>
          </BaseButton>
          <BaseButton
            shape="error"
            variant="outlined"
            onClick={handleDelete}
            loading={loading}
            disabled={loading}>
            <Typography variant="body1">Hapus Modal</Typography>
          </BaseButton>
        </Box>
      </BaseCard>
    </>
  );
};

CardModal.propTypes = {
  item: PropTypes.object
};

export default CardModal;
