import { TextField } from '@mui/material';
import { Field } from 'formik';

const BaseTextField = (props) => {
  const { form, field, ...rest } = props;

  return (
    <TextField
      {...field}
      {...rest}
      type="number"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      onInput={(e) => {
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12);
      }}
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

const FormikNumber = (props) => {
  const { ...rest } = props;
  return <Field component={BaseTextField} {...rest} />;
};

export default FormikNumber;
