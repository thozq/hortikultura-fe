import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import React from 'react';

function FormikRadioButton(props) {
  const { label, name, options = [], formikProps, ...rest } = props;
  return (
    <FormControl>
      <FormLabel id={name}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={name}
        name={name}
        onChange={(event) => {
          formikProps.setFieldValue(name, event.target.value);
        }}
        {...rest}>
        {options?.map(({ value, label }, index) => (
          <FormControlLabel
            key={index}
            value={value}
            control={<Radio />}
            label={
              <Typography fontSize="14px" fontWeight="bold">
                {label}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default FormikRadioButton;
