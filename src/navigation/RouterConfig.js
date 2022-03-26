import IsiBlanko from 'components/Page/Petani/IsiBlanko';
import Dashboard from 'containers/Petani/Dashboard';
import Stok from 'containers/Petani/Stok';
import { Routes, Route } from 'react-router-dom';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stok" element={<Stok />} />
      <Route path="/stok/isi-blanko" element={<IsiBlanko />} />
    </Routes>
  );
}

export default RouterConfig;
