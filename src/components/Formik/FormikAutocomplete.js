import { Autocomplete, TextField } from '@mui/material';
import { Field } from 'formik';
import React from 'react';

const BaseTextField = (props) => {
  const { formikProps, form, field, ...rest } = props;
  return (
    <TextField
      {...field}
      {...rest}
      disabled={formikProps.isSubmitting}
      error={!!form.errors[field.name] && form.touched[field.name]}
      helperText={
        form.errors[field.name] && form.touched[field.name] ? form.errors[field.name] : null
      }
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
  );
};

const FormikAutocomplete = (props) => {
  const { options, name, formikProps, ...rest } = props;

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
        console.log('ini onchange', formikProps);
        console.log('ini value', value);
        console.log('ini event', event);
        formikProps.setFieldValue(name, value.id);
      }}
      options={options}
      renderInput={(params) => (
        <Field component={BaseTextField} formikProps={formikProps} {...params} {...rest} />
      )}
    />
  );
};

export default FormikAutocomplete;
