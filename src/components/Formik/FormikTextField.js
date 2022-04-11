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
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
  );
};

const FormikTextField = (props) => {
  const { formikProps, ...rest } = props;
  return <Field disabled={formikProps.isSubmitting} component={BaseTextField} {...rest} />;
};

export default FormikTextField;
