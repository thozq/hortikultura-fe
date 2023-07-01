import { Box, Typography } from '@mui/material';
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
  console.log(riwayat);
  return (
    <>
      <BaseHeader label="Riwayat Modal Penanaman" />
      <Box display="flex" flexDirection="column" gap={3} p={2}>
        {riwayat?.length === 0 ? (
          <Box
            px={2}
            py={0.5}
            borderRadius={2}
            display="flex"
            alignItems="center"
            sx={{
              bgcolor: '#F4F5F9',
              position: 'absolute',
              left: '35px',
              top: '300px'
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: 14,
                fontWeight: 'semibold',
                textAlign: 'center'
              }}>
              Belum ada modal yang ditambahkan.
            </Typography>
          </Box>
        ) : (
          riwayat?.map((item, index) => <CardModal key={index} item={item} id={id} />)
        )}
      </Box>
    </>
  );
}

export default RiwayatModalPetani;
