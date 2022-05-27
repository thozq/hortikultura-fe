/* eslint-disable react/prop-types */
import { Container } from '@mui/material';
import BaseAlert from 'components/Base/BaseAlert';
// import TheBottomNavigation from 'components/Base/TheBottomNavigation';
import React from 'react';

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Container maxWidth="xs" sx={{ p: 0, bgcolor: 'white', minHeight: '100vh' }}>
        <BaseAlert />
        {children}
      </Container>
      {/* <TheBottomNavigation /> */}
    </>
  );
};

export default Layout;
