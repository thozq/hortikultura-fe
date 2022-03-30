import { Box } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';

function IsiBlanko() {
  return (
    <>
      <BaseHeader label="Blanko" to="/petani/stok" />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <BaseTextField
          fullWidth
          id="luasLalu"
          name="luasLalu"
          label="Luas tanaman akhir bulan lalu (Ha)"
        />
        <BaseTextField
          fullWidth
          id="luasHabis"
          name="luasHabis"
          label="Luas panen habis / dibongkar (Ha)"
        />
        <BaseTextField
          fullWidth
          id="luasBelumHabis"
          name="luasBelumHabis"
          label="Luas panen belum habis (Ha)"
        />
        <BaseTextField
          fullWidth
          id="luasRusak"
          name="luasRusak"
          label="Luas rusak/tidak berhasil/puso (Ha)"
        />
        <BaseTextField
          fullWidth
          id="luasBaru"
          name="luasBaru"
          label="Luas penanaman baru/tambah tanam (Ha)"
        />
        <BaseTextField
          fullWidth
          id="luasAkhir"
          name="luasAkhir"
          label="Luas tanaman akhir bulan laporan (Ha)"
        />
        <BaseTextField
          fullWidth
          id="produksiHabis"
          name="produksiHabis"
          label="Produksi dipanen habis/dibongkar (Kwintal)"
        />
        <BaseTextField
          fullWidth
          id="produksiBelumHabis"
          name="produksiBelumHabis"
          label="Produksi belum habis (Kwintal)"
        />
        <BaseTextField
          fullWidth
          id="rataHarga"
          name="rataHarga"
          label="Rata-rata harga jual petani per kilogram (Rupiah)"
        />
        <BaseButton>Kirim</BaseButton>
      </Box>
    </>
  );
}

export default IsiBlanko;
