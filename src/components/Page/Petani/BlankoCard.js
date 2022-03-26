import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import { MoreVertRounded } from '@mui/icons-material';

const BlankoCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card>
        <CardHeader
          title="Cabai Rawit Merah"
          titleTypographyProps={{ variant: 'body2' }}
          subheader="28 Februari 2022"
          subheaderTypographyProps={{ variant: 'body2' }}
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertRounded />
            </IconButton>
          }
        />
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>Luas Tanah</Typography>
            <Typography>540 kg</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>Luas Tanah</Typography>
            <Typography>540 kg</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography>Luas Tanah</Typography>
            <Typography>540 kg</Typography>
          </Box>
        </CardContent>
      </Card>
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

export default BlankoCard;
