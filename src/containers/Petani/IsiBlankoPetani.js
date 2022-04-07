import { Box, MenuItem } from '@mui/material';
import BaseButton from 'components/Base/BaseButton';
import BaseDatePicker from 'components/Base/BaseDatePicker';
import BaseHeader from 'components/Base/BaseHeader';
import BaseTextField from 'components/Base/BaseTextField';
import { useState } from 'react';

const optionsJenisCabai = [
  {
    value: 'CMB',
    label: 'Cabai Merah Besar'
  },
  {
    value: 'CMK',
    label: 'Cabai Merah Keriting'
  },
  {
    value: 'CRM',
    label: 'Cabai Rawit Merah'
  }
];

function IsiBlankoPetani() {
  const [jenisCabai, setJenisCabai] = useState('');

  const handleChange = (event) => {
    setJenisCabai(event.target.value);
  };

  return (
    <>
      <BaseHeader label="Blanko" to={-1} />
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <BaseTextField select label="Jenis Cabai" value={jenisCabai} onChange={handleChange}>
          {optionsJenisCabai.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </BaseTextField>
        <BaseDatePicker fullWidth id="tanggal" name="tanggal" label="Tanggal Pencatatan" />
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

export default IsiBlankoPetani;
