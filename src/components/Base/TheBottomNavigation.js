import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import { HomeRounded, WarehouseRounded } from '@mui/icons-material';

const TheBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  const actions = [
    { label: 'Beranda', icon: <HomeRounded /> },
    { label: 'Stok', icon: <WarehouseRounded /> },
    { label: 'Penjualan', icon: <RestoreIcon /> },
    { label: 'Riwayat', icon: <RestoreIcon /> }
  ];

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        {actions.map((action, index) => (
          <BottomNavigationAction key={index} label={action.label} icon={action.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default TheBottomNavigation;
