import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import Layout from 'layouts/Layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'themes/theme';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <RouterConfig />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
