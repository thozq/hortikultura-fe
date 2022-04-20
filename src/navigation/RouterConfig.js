import { Routes, Route, Navigate } from 'react-router-dom';

import Daftar from 'containers/Daftar';
import Masuk from 'containers/Masuk';

import IndexPetani from 'containers/Petani/IndexPetani';
import CatatTransaksiPetani from 'containers/Petani/CatatTransaksiPetani';
import BerandaPetani from 'containers/Petani/BerandaPetani';
import TransaksiPetani from 'containers/Petani/TransaksiPetani';
import RiwayatPetani from 'containers/Petani/RiwayatPetani';
import StokPetani from 'containers/Petani/StokPetani';
import IsiBlankoPetani from 'containers/Petani/IsiBlankoPetani';
import DetailBlankoPetani from 'containers/Petani/DetailBlankoPetani';
import DetailTransaksiPetani from 'containers/Petani/DetailTransaksiPetani';
import DataDiriPetani from 'containers/Petani/DataDiriPetani';
import CatatStokPetani from 'containers/Petani/CatatStokPetani';
import DetailStokPetani from 'containers/Petani/DetailStokPetani';

import IndexPedagang from 'containers/Pedagang/IndexPedagang';
import BerandaPedagang from 'containers/Pedagang/BerandaPedagang';
import StokPedagang from 'containers/Pedagang/StokPedagang';
import TransaksiPedagang from 'containers/Pedagang/TransaksiPedagang';
import CatatTransaksiPedagang from 'containers/Pedagang/CatatTransaksiPedagang';
import UsangPedagang from 'containers/Pedagang/UsangPedagang';
import RiwayatPedagang from 'containers/Pedagang/RiwayatPedagang';
import CatatUsangPedagang from 'containers/Pedagang/CatatUsangPedagang';
import DataDiriPedagang from 'containers/Pedagang/DataDiriPedagang';
import DetailJualBeliPedagang from 'containers/Pedagang/DetailTransaksiPedagang';

import IndexDinas from 'containers/Dinas/IndexDinas';
import BerandaDinas from 'containers/Dinas/BerandaDinas';
import DataDiriDinas from 'containers/Dinas/DataDiriDinas';

import IndexPdh from 'containers/Pdh/IndexPdh';
import BerandaPdh from 'containers/Pdh/BerandaPdh';
import DataDiriPdh from 'containers/Pdh/DataDiriPdh';

function RouterConfig() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Navigate to={'masuk'} replace />} />
      <Route path="masuk" element={<Masuk />} />
      <Route path="daftar" element={<Daftar />} />

      {/* Petani */}
      <Route path="petani" element={<IndexPetani />}>
        <Route path="/petani" element={<Navigate to={'beranda'} replace />} />
        <Route path="beranda" element={<BerandaPetani />} />
        <Route path="beranda/isi-blanko" element={<IsiBlankoPetani />} />
        <Route path="beranda/detail-blanko/:id" element={<DetailBlankoPetani />} />
        <Route path="stok" element={<StokPetani />} />
        <Route path="stok/catat-stok" element={<CatatStokPetani />} />
        <Route path="stok/detail-stok/:id" element={<DetailStokPetani />} />
        <Route path="transaksi" element={<TransaksiPetani />} />
        <Route path="transaksi/catat-transaksi" element={<CatatTransaksiPetani />} />
        <Route path="transaksi/detail-transaksi/:id" element={<DetailTransaksiPetani />} />
        <Route path="riwayat" element={<RiwayatPetani />} />
        <Route path="data-diri" element={<DataDiriPetani />} />
      </Route>

      {/* Pedagang */}
      <Route path="pedagang" element={<IndexPedagang />}>
        <Route path="/pedagang" element={<Navigate to={'beranda'} replace />} />
        <Route path="beranda" element={<BerandaPedagang />} />
        <Route path="stok" element={<StokPedagang />} />
        <Route path="stok/detail-pembelian/:id" element={<DetailJualBeliPedagang />} />
        <Route path="transaksi" element={<TransaksiPedagang />} />
        <Route path="transaksi/catat-transaksi" element={<CatatTransaksiPedagang />} />
        <Route path="transaksi/detail-transaksi/:id" element={<DetailJualBeliPedagang />} />
        <Route path="usang" element={<UsangPedagang />} />
        <Route path="usang/catat-usang" element={<CatatUsangPedagang />} />
        <Route path="riwayat" element={<RiwayatPedagang />} />
        <Route path="riwayat/detail-transaksi/:id" element={<DetailJualBeliPedagang />} />
        <Route path="data-diri" element={<DataDiriPedagang />} />
      </Route>

      {/* Dinas */}
      <Route path="dinas" element={<IndexDinas />}>
        <Route path="/dinas" element={<Navigate to={'beranda'} replace />} />
        <Route path="beranda" element={<BerandaDinas />} />
        <Route path="data-diri" element={<DataDiriDinas />} />
      </Route>

      {/* PDH */}
      <Route path="pdh" element={<IndexPdh />}>
        <Route path="/pdh" element={<Navigate to={'beranda'} replace />} />
        <Route path="beranda" element={<BerandaPdh />} />
        <Route path="data-diri" element={<DataDiriPdh />} />
      </Route>
    </Routes>
  );
}

export default RouterConfig;
