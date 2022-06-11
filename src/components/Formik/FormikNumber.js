import { TextField } from '@mui/material';
import { Field } from 'formik';
import NumberFormat from 'react-number-format';

// const BaseTextField = (props) => {
//   const { form, field, ...rest } = props;

//   return (
//     <TextField
//       {...field}
//       {...rest}
//       type="number"
//       inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
//       onInput={(e) => {
//         e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12);
//       }}
//       // focused={!form.isSubmitting && !form.errors[field.name] && form.touched[field.name]}
//       error={!!form.errors[field.name] && form.touched[field.name]}
//       helperText={
//         form.errors[field.name] && form.touched[field.name] ? form.errors[field.name] : null
//       }
//       // Note: temporary solution to fontsize
//       InputProps={{ style: { fontSize: 14 } }}
//       InputLabelProps={{ style: { fontSize: 14 } }}
//       sx={{ backgroundColor: 'white', borderRadius: 1 }}
//     />
//   );
// };

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandSeparator
      prefix="Rp "
    />
  );
};

const FormikNumber = (props) => {
  const { name, label, ...rest } = props;

  return (
    <Field
      component={TextField}
      name={name}
      label={label}
      InputProps={{ inputComponent: NumberFormatCustom }}
      {...rest}
    />
  );
};

export default FormikNumber;
