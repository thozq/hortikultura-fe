import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BaseHeader = (props) => {
  const { label, to } = props;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Link to={to}>
        <IconButton>
          <ArrowBackIosNewRounded />
        </IconButton>
      </Link>
      <Typography variant="h4">{label}</Typography>
    </Box>
  );
};

export default BaseHeader;
