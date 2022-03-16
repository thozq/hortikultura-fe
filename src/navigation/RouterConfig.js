import Dashboard from 'containers/Petani/Dashboard';
import { Routes, Route } from 'react-router-dom';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default RouterConfig;
