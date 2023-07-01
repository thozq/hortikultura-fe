import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const CustomTextField = styled(TextField)({});

const BaseTextField = (props) => {
  const { ...params } = props;
  return (
    <CustomTextField
      {...params}
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
      inputProps={{
        style: {
          height: props.height,
          backgroundColor: props.backgroundColor
        }
      }}
    />
  );
};

export default BaseTextField;
