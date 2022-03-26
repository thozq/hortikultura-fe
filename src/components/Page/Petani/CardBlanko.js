import { MoreVertRounded } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import theme from 'themes/theme';

const CardBlanko = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    { item: 'Luas tanaman akhir bulan lalu (Ha)', value: 140 },
    { item: 'Luas tanaman akhir bulan lalu (Ha)', value: 140 },
    { item: 'Luas tanaman akhir bulan lalu (Ha)', value: 140 },
    { item: 'Luas tanaman akhir bulan lalu (Ha)', value: 140 },
    { item: 'Luas tanaman akhir bulan lalu (Ha)', value: 140 }
  ];

  return (
    <>
      <Box>
        <Box
          px={2}
          borderRadius={2}
          color="white"
          bgcolor={theme.palette.red.main}
          display="flex"
          alignItems="center"
          justifyContent="space-between">
          <Typography>Cabai Rawit Merah - 28 Februari 2022</Typography>
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertRounded sx={{ color: theme.palette.optional.contrastText }} />
          </IconButton>
        </Box>

        <Box mt={1.5} px={2} display="flex" flexDirection="column" gap={1}>
          {data.map(({ item, value }, index) => (
            <Box
              key={index}
              py={0.5}
              px={2}
              bgcolor={theme.palette.dark.light}
              borderRadius={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between">
              <Typography>{item}</Typography>
              <Typography>{value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem onClick={handleClose}>Hapus</MenuItem>
      </Menu>
    </>
  );
};

export default CardBlanko;
