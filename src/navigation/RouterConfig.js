import Daftar from 'containers/Daftar';
import Masuk from 'containers/Masuk';

import CatatPenjualanPetani from 'containers/Petani/CatatPenjualanPetani';
import BerandaPetani from 'containers/Petani/BerandaPetani';
import IndexPetani from 'containers/Petani/IndexPetani';
import Penjualan from 'containers/Petani/PenjualanPetani';
import RiwayatPetani from 'containers/Petani/RiwayatPetani';
import StokPetani from 'containers/Petani/StokPetani';
import { Routes, Route } from 'react-router-dom';
import IsiBlankoPetani from 'containers/Petani/IsiBlankoPetani';
import DetailBlankoPetani from 'containers/Petani/DetailBlankoPetani';
import DetailPenjualanPetani from 'containers/Petani/DetailPenjualanPetani';
import DataDiriPetani from 'containers/Petani/DataDiriPetani';

import BerandaPedagang from 'containers/Pedagang/BerandaPedagang';
import StokPedagang from 'containers/Pedagang/StokPedagang';
import PenjualanPedagang from 'containers/Pedagang/PenjualanPedagang';
import CatatPenjualanPedagang from 'containers/Pedagang/CatatPenjualanPedagang';
import UsangPedagang from 'containers/Pedagang/UsangPedagang';
import RiwayatPedagang from 'containers/Pedagang/RiwayatPedagang';
import CatatUsangPedagang from 'containers/Pedagang/CatatUsangPedagang';
import DetailPenjualanPedagang from 'containers/Pedagang/DetailPenjualanPedagang';
import DataDiriPedagang from 'containers/Pedagang/DataDiriPedagang';

function RouterConfig() {
  return (
    <Routes>
      <Route path="masuk" element={<Masuk />} />
      <Route path="daftar" element={<Daftar />} />

      {/* Petani */}
      <Route path="petani" element={<IndexPetani />}>
        <Route path="beranda" element={<BerandaPetani />} />
        <Route path="stok" element={<StokPetani />} />
        <Route path="stok/isi-blanko" element={<IsiBlankoPetani />} />
        <Route path="stok/detail-blanko/:id" element={<DetailBlankoPetani />} />
        <Route path="penjualan" element={<Penjualan />} />
        <Route path="penjualan/catat-penjualan" element={<CatatPenjualanPetani />} />
        <Route path="penjualan/detail-penjualan/:id" element={<DetailPenjualanPetani />} />
        <Route path="riwayat" element={<RiwayatPetani />} />
        <Route path="data-diri" element={<DataDiriPetani />} />
      </Route>

      {/* Pedagang */}
      <Route path="pedagang" element={<IndexPetani />}>
        <Route path="beranda" element={<BerandaPedagang />} />
        <Route path="stok" element={<StokPedagang />} />
        <Route path="penjualan" element={<PenjualanPedagang />} />
        <Route path="penjualan/catat-penjualan" element={<CatatPenjualanPedagang />} />
        <Route path="usang" element={<UsangPedagang />} />
        <Route path="usang/catat-usang" element={<CatatUsangPedagang />} />
        <Route path="riwayat" element={<RiwayatPedagang />} />
        <Route path="riwayat/detail-penjualan/:id" element={<DetailPenjualanPedagang />} />
        <Route path="data-diri" element={<DataDiriPedagang />} />
      </Route>
    </Routes>
  );
}

export default RouterConfig;
