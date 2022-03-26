import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomTextField = styled(TextField)({
  // edit disini
});

const BaseTextField = (props) => {
  const { ...rest } = props;
  return <CustomTextField {...rest} sx={{ backgroundColor: 'white', borderRadius: 1 }} />;
};

export default BaseTextField;
