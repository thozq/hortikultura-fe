import { TuneRounded } from '@mui/icons-material';
import { Box, Stack, Typography, Grid, Drawer } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseCardBlanko from 'components/Base/BaseCardBlanko';
import React from 'react';
// import { CabaiEnum } from 'utils/constants';
// import TheProfileHeader from 'components/Base/TheProfileHeader';

function BerandaDinas() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: '444px', mx: 'auto' }
        }}
        anchor="bottom"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}>
        <Box>
          <Typography variant="h5" align="center">
            Harga Rata-Rata
          </Typography>
          <Typography variant="h5" mb={1} align="center">
            Kec.Dramaga, Kab. Bogor, Jawa Barat
          </Typography>
        </Box>
      </Drawer>
      <Stack gap={2} p={2} mb="56px">
        <Stack direction="row" spacing={7} mb={3}>
          <Typography variant="h4"> Statistik Deskriptif Tanaman </Typography>
          <BaseButton
            shape="filter"
            link=""
            size="small"
            variant="outlined"
            onClick={handleDrawerOpen}>
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
