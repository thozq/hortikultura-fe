import { Box } from '@mui/material';
import theme from 'themes/theme';

const BaseCard = (props) => {
  const { children, ...rest } = props;
  return (
    <Box px={2} py={1.5} bgcolor={theme.palette.dark.light} borderRadius={2} {...rest}>
      {children}
    </Box>
  );
};

export default BaseCard;
