import { FileDownloadRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCard from 'components/Base/BaseCard';
import TheProfileHeader from 'components/Base/TheProfileHeader';

function BerandaDinas() {
  return (
    <>
      <TheProfileHeader />
      <Stack gap={2} p={2} mb="56px">
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, felis netus neque,
            sapien lobortis quisque. Mi id amet sed elit, ultrices. Dapibus vestibulum viverra est
            habitasse ultrices pretium nisi, dis. Magna.
          </Typography>
        </Box>
        <BaseButton shape="withicon" link="" size="large" variant="outlined" fullWidth>
          <Typography variant="h5">Export Data Cabai</Typography>
          <FileDownloadRounded />
        </BaseButton>
        <Box>
          <Typography variant="h4" mb={1}>
            Persebaran Cabai
          </Typography>
          <BaseCard>
            <Typography>Total Stok Cabai</Typography>
          </BaseCard>
        </Box>
        <Box>
          <Typography variant="h4" mb={1}>
            Tingkat Harga Cabai
          </Typography>
          <BaseCard>
            <Typography>Tingkat Harga Cabai</Typography>
          </BaseCard>
        </Box>
      </Stack>
    </>
  );
}

export default BerandaDinas;
