import PropTypes from 'prop-types';
import { Divider, Stack, Typography } from '@mui/material';

const BaseListDetail = (props) => {
  const { data } = props;
  return (
    <Stack gap={3} pt={2} px={2}>
      {data?.map(({ label, value }, index) => (
        <Stack gap={1} key={index}>
          <Typography variant="body2">{label}</Typography>
          <Typography variant="h5">{value}</Typography>
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
};

BaseListDetail.prototype = {
  data: PropTypes.array.isRequired
};

export default BaseListDetail;
