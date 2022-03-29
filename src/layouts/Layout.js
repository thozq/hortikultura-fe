/* eslint-disable react/prop-types */
import { Container } from '@mui/material';
// import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import React from 'react';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Container maxWidth="xs" sx={{ p: 0 }}>
        {children}
      </Container>
      {/* <TheBottomNavigation /> */}
    </>
  );
};

export default Layout;
