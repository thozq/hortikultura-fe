import Daftar from 'containers/Daftar';
import Masuk from 'containers/Masuk';

import CatatPenjualan from 'containers/Petani/CatatPenjualan';
import Beranda from 'containers/Petani/Beranda';
import IndexPetani from 'containers/Petani/IndexPetani';
import Penjualan from 'containers/Petani/Penjualan';
import Riwayat from 'containers/Petani/Riwayat';
import Stok from 'containers/Petani/Stok';
import { Routes, Route } from 'react-router-dom';
import IsiBlanko from 'containers/Petani/IsiBlanko';
import DetailBlanko from 'containers/Petani/DetailBlanko';
import DetailPenjualan from 'containers/Petani/DetailPenjualan';

function RouterConfig() {
  return (
    <Routes>
      <Route path="masuk" element={<Masuk />} />
      <Route path="daftar" element={<Daftar />} />

      {/* Petani */}
      <Route path="petani" element={<IndexPetani />}>
        <Route path="beranda" element={<Beranda />} />

        <Route path="stok" element={<Stok />} />
        <Route path="stok/isi-blanko" element={<IsiBlanko />} />
        <Route path="stok/detail-blanko/:id" element={<DetailBlanko />} />

        <Route path="penjualan" element={<Penjualan />} />
        <Route path="penjualan/catat-penjualan" element={<CatatPenjualan />} />
        <Route path="penjualan/detail-penjualan/:id" element={<DetailPenjualan />} />

        <Route path="riwayat" element={<Riwayat />} />
      </Route>
    </Routes>
  );
}

export default RouterConfig;
