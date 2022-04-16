import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function IndexDinas() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn && currentUser.access === 'dinas') return <Outlet />;
  else if (isLoggedIn && currentUser.access !== 'dinas')
    return <Navigate to={`${currentUser.access}/beranda`} replace />;
  else return <Navigate to="masuk" replace />;
}

export default IndexDinas;
