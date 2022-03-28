import { ChevronRightRounded } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'themes/theme';

const BaseCardList = (props) => {
  const { title, date, link, children } = props;
  const navigate = useNavigate();

  const handleDetail = useCallback(() => navigate(link, { replace: true }), [navigate]);

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
          <Typography variant="h6">
            {title} - {date}
          </Typography>
          <IconButton aria-label="settings" onClick={handleDetail}>
            <ChevronRightRounded sx={{ color: theme.palette.optional.contrastText }} />
          </IconButton>
        </Box>
        {children}
      </Box>
    </>
  );
};

export default BaseCardList;
