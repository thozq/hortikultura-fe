import { Stack, Typography } from '@mui/material';
import BaseCard from 'components/Base/BaseCard';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CabaiEnum } from 'utils/constants';
import { momentFormat } from 'utils/MomentFormat';

const CardRiwayatUsang = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`detail-usang/${item._id}`);
  };

  return (
    <BaseCard onClick={handleDetail}>
      <Stack gap={1}>
        <Typography variant="h6">{momentFormat(item.tanggalPencatatan)}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Komoditas Tanaman</Typography>
          <Typography variant="h6">{CabaiEnum[item.komoditas]}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Jumlah Cabai Usang</Typography>
          <Typography variant="h6">{item.jumlahUsang} kuintal</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Pemanfaatan Cabai</Typography>
          <Typography variant="h6" textTransform="capitalize">
            {item.pemanfaatan}
          </Typography>
        </Stack>
      </Stack>
    </BaseCard>
  );
};

export default CardRiwayatUsang;
