import DetailBlanko from 'components/Page/Petani/DetailBlanko';
import IsiBlanko from 'components/Page/Petani/IsiBlanko';
import Dashboard from 'containers/Petani/Dashboard';
import Penjualan from 'containers/Petani/Penjualan';
import Stok from 'containers/Petani/Stok';
import { Routes, Route } from 'react-router-dom';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="stok" element={<Stok />} />
      <Route path="stok/isi-blanko" element={<IsiBlanko />} />
      <Route path="stok/detail-blanko/:id" element={<DetailBlanko />} />

      <Route path="penjualan" element={<Penjualan />} />
    </Routes>
  );
}

export default RouterConfig;
