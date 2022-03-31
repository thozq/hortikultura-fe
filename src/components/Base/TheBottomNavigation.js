import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, WarehouseRounded } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import IconPenjualan from 'public/images/icons/IconPenjualan';
import theme from 'themes/theme';
import IconUsang from 'public/images/icons/IconUsang';

const TheBottomNavigation = (props) => {
  const { role } = props;
  const navigate = useNavigate();
  const location = useLocation();

  function getPageIndex(route) {
    if (role === 'petani') {
      switch (route) {
        case '/petani/beranda':
          return 0;
        case '/petani/stok':
          return 1;
        case '/petani/penjualan':
          return 2;
        case '/petani/riwayat':
          return 3;
        default:
          return 0;
      }
    } else if (role === 'pedagang') {
      switch (route) {
        case '/pedagang/beranda':
          return 0;
        case '/pedagang/stok':
          return 1;
        case '/pedagang/penjualan':
          return 2;
        case '/pedagang/usang':
          return 3;
        case '/pedagang/riwayat':
          return 4;
        default:
          return 0;
      }
    }
  }

  const value = getPageIndex(location.pathname);

  const actionsPetani = [
    { label: 'Beranda', icon: <HomeRounded />, link: () => navigate('/petani/beranda') },
    { label: 'Stok', icon: <WarehouseRounded />, link: () => navigate('/petani/stok') },
    {
      label: 'Penjualan',
      icon: <IconPenjualan />,
      link: () => navigate('/petani/penjualan')
    },
    { label: 'Riwayat', icon: <RestoreIcon />, link: () => navigate('/petani/riwayat') }
  ];

  const actionsPedagang = [
    {
      label: 'Beranda',
      icon: <HomeRounded />,
      link: () => navigate('/pedagang/beranda')
    },
    {
      label: 'Stok',
      icon: <WarehouseRounded />,
      link: () => navigate('/pedagang/stok')
    },
    {
      label: 'Penjualan',
      icon: <IconPenjualan />,
      link: () => navigate('/pedagang/penjualan')
    },
    {
      label: 'Usang',
      icon: <IconUsang />,
      link: () => navigate('/pedagang/usang')
    },
    {
      label: 'Riwayat',
      icon: <RestoreIcon />,
      link: () => navigate('/pedagang/riwayat')
    }
  ];

  let actions = [];
  if (role === 'petani') {
    actions = [];
    actions.push(...actionsPetani);
  } else if (role === 'pedagang') {
    actions = [];
    actions.push(...actionsPedagang);
  }

  return (
    <Paper
      square
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: theme.palette.dark.main
      }}>
      <BottomNavigation sx={{ backgroundColor: 'inherit' }} showLabels value={value}>
        {actions.map((action, index) => (
          <BottomNavigationAction
            key={index}
            label={action.label}
            icon={action.icon}
            onClick={action.link}
            sx={{
              color: 'white',
              opacity: 0.7,
              minWidth: 0,
              '&.Mui-selected': {
                color: theme.palette.optional.contrastText,
                opacity: 1,
                backgroundColor: theme.palette.green.main
              }
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default TheBottomNavigation;
