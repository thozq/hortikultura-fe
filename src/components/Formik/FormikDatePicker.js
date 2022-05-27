import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { TextField } from '@mui/material';
import { Field } from 'formik';
import { getDateFormat } from 'utils/MomentFormat';

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
      sx={{ backgroundColor: 'white', borderRadius: 1 }}
    />
  );
};

const FormikDatePicker = (props) => {
  const { formikProps, name, ...rest } = props;

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MobileDatePicker
        name={name}
        value={formikProps.values[name]}
        onChange={(value) => {
          formikProps.setFieldValue(name, getDateFormat(value));
        }}
        renderInput={(params) => (
          <Field component={BaseTextField} formikProps={formikProps} {...params} />
        )}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default FormikDatePicker;
