import PropTypes from 'prop-types';
import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BaseLoader from './BaseLoader';

const BaseHeader = (props) => {
  const { label, to } = props;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <Link to={to ? to : -1}>
          <IconButton>
            <ArrowBackIosNewRounded />
          </IconButton>
        </Link>
        <Typography variant="h4">{label}</Typography>
      </Box>
      <BaseLoader />
    </>
  );
};

BaseHeader.prototype = {
  label: PropTypes.string.isRequired,
  to: PropTypes.any.isRequired
};

export default BaseHeader;
