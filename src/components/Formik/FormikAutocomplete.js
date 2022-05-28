import { Autocomplete, TextField } from '@mui/material';
import { Field } from 'formik';
import React from 'react';

const BaseTextField = (props) => {
  const { form, field, ...rest } = props;
  return (
    <TextField
      {...field}
      {...rest}
      // disabled={formikProps.isSubmitting}
      error={!!form.errors[field.name] && form.touched[field.name]}
      helperText={
        form.errors[field.name] && form.touched[field.name] ? form.errors[field.name] : null
      }
      // Note: temporary solution to fontsize
      InputProps={{ style: { fontSize: 14 } }}
      InputLabelProps={{ style: { fontSize: 14 } }}
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
  );
};

const FormikAutocomplete = (props) => {
  const { options, name, disabled, formikProps, ...rest } = props;

  return (
    <Autocomplete
      disablePortal
      selectOnFocus
      id={name}
      name={name}
      onChange={(event, value) => {
        if (value === null) {
          //Just give a value to a value to avoid null
          value = '';
        }
        formikProps.setFieldValue(name, value.id);
      }}
      options={options}
      disabled={disabled}
      sx={{
        '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
          fontSize: 14
        }
      }}
      renderInput={(params) => (
        <Field component={BaseTextField} formikProps={formikProps} {...params} {...rest} />
      )}
    />
  );
};

export default FormikAutocomplete;
