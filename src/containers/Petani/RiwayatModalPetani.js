import { Box } from '@mui/material';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getLahanById } from 'redux/slices/lahan';
import { getAllModal } from 'redux/slices/modal';
import CardModal from 'components/Page/Petani/CardModal';
// import { useSelector } from 'react-redux';

function RiwayatModalPetani() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllModal(id));
  }, [dispatch]);

  const { riwayat } = useSelector((state) => state.modal);

  return (
    <>
      <BaseHeader label="Riwayat Modal Penanaman" />
      <Box display="flex" flexDirection="column" gap={3} p={2} mb="56px">
        {riwayat?.map((item, index) => (
          <CardModal key={index} item={item} />
        ))}
      </Box>
    </>
  );
}

export default RiwayatModalPetani;
