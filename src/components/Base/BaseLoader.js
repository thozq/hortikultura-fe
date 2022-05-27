import { Box, LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const BaseLoader = () => {
  const { status: user } = useSelector((state) => state.user);
  const { status: blanko } = useSelector((state) => state.blanko);
  const { status: stok } = useSelector((state) => state.stok);
  const { status: transaksi } = useSelector((state) => state.transaksi);
  const { status: usang } = useSelector((state) => state.usang);

  return (
    <Box
      display={
        user === 'loading' ||
        blanko === 'loading' ||
        stok === 'loading' ||
        transaksi === 'loading' ||
        usang === 'loading'
          ? ''
          : 'hidden'
      }>
      <LinearProgress />
    </Box>
  );
};

export default BaseLoader;
