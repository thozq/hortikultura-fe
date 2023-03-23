import { TuneRounded } from '@mui/icons-material';
import { Box, Stack, Typography, Grid } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCardBlanko from 'components/Base/BaseCardBlanko';
// import { CabaiEnum } from 'utils/constants';
import TheProfileHeader from 'components/Base/TheProfileHeader';
function BerandaDinas() {
  return (
    <>
      <TheProfileHeader />
      <Stack gap={2} p={2} mb="56px">
        <Stack direction="row" spacing={7} mb={3}>
          <Typography variant="h4">Statistik Deskriptif Tanaman</Typography>
          <BaseButton shape="filter" link="" size="small" variant="outlined">
            <TuneRounded />
            <Typography variant="subtitle1">Filter</Typography>
          </BaseButton>
        </Stack>
        <Box>
          <Typography variant="h5" align="center">
            Harga Rata-Rata
          </Typography>
          <Typography variant="h5" mb={1} align="center">
            Kec.Dramaga, Kab. Bogor, Jawa Barat
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <BaseCardBlanko item="Bawang Putih" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Bawang Merah" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Merah Besar" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Merah Keriting" />
          </Grid>
          <Grid item>
            <BaseCardBlanko item="Cabai Rawit Merah" />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default BerandaDinas;
