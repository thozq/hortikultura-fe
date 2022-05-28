import { TextField } from '@mui/material';
import { Field } from 'formik';

const BaseTextField = (props) => {
  const { form, field, ...rest } = props;
  return (
    <TextField
      {...field}
      {...rest}
      // focused={!form.isSubmitting && !form.errors[field.name] && form.touched[field.name]}
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

const FormikTextField = (props) => {
  const { ...rest } = props;
  return <Field component={BaseTextField} {...rest} />;
};

export default FormikTextField;
