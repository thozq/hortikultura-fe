import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, WarehouseRounded } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import IconPenjualan from 'public/images/icons/IconPenjualan';

const TheBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const location = useLocation();
  console.log('ini test', location.pathname);

  const actions = [
    { label: 'Beranda', icon: <HomeRounded />, link: () => navigate('/') },
    { label: 'Stok', icon: <WarehouseRounded />, link: () => navigate('/stok') },
    {
      label: 'Penjualan',
      icon: <IconPenjualan />,
      link: () => navigate('/')
    },
    { label: 'Riwayat', icon: <RestoreIcon />, link: () => navigate('/') }
  ];

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        {actions.map((action, index) => (
          <BottomNavigationAction
            key={index}
            label={action.label}
            icon={action.icon}
            onClick={action.link}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default TheBottomNavigation;
