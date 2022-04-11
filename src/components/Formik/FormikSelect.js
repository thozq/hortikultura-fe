import { MenuItem } from '@mui/material';

import FormikTextField from './FormikTextField';

const FormikSelect = (props) => {
  const { options, name, formikProps, ...rest } = props;

  // Notes warning from MUI Controlled and Uncontrolled Input

  return (
    <FormikTextField
      as="select"
      select
      name={name}
      {...rest}
      onChange={(event, values) => {
        formikProps.setFieldValue(name, values.props.value);
      }}
      formikProps={formikProps}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </FormikTextField>
  );
};

export default FormikSelect;
