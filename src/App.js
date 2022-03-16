import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import Layout from 'layouts/Layout';

function App() {
  return (
    <div>
      <Layout>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
