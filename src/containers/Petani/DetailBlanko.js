import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BaseHeader from 'components/Base/BaseHeader';
import React from 'react';

const data = {
  luasAkhir: 80,
  luasHabis: 120,
  luasBelumHabis: 70,
  luasRusak: 20,
  luasPenanaman: 150,
  luasAkhirBulan: 140,
  produksiHabis: 10,
  produksiBelumHabis: 5,
  hargaPerKilo: 48000
};

function DetailBlanko() {
  return (
    <>
      <BaseHeader label="Blanko - 28 Februari 2022" to="/petani/stok" />
      <Box display="flex" flexDirection="column" gap={3} px={2}>
        <Box>
          <Typography variant="h5">Luas tanaman akhir bulan lalu (Ha)</Typography>
          <Typography variant="body2">{data.luasAkhir}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Luas panen habis / dibongkar (Ha)</Typography>
          <Typography variant="body2">{data.luasHabis}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Luas panen belum habis (Ha)</Typography>
          <Typography variant="body2">{data.luasBelumHabis}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Luas rusak/tidak berhasil/puso (Ha)</Typography>
          <Typography variant="body2">{data.luasRusak}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Luas penanaman baru/tambah tanam (Ha)</Typography>
          <Typography variant="body2">{data.luasPenanaman}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Luas tanaman akhir bulan laporan (Ha)</Typography>
          <Typography variant="body2">{data.luasAkhirBulan}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Produksi dipanen habis/dibongkar (Kwintal)</Typography>
          <Typography variant="body2">{data.produksiHabis}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Produksi belum habis (Kwintal)</Typography>
          <Typography variant="body2">{data.produksiBelumHabis}</Typography>
          <Divider />
        </Box>
        <Box>
          <Typography variant="h5">Rata-rata harga jual petani per kilogram (Rupiah)</Typography>
          <Typography variant="body2">{data.hargaPerKilo}</Typography>
          <Divider />
        </Box>
      </Box>
    </>
  );
}

export default DetailBlanko;
