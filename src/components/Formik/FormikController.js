import FormikAutocomplete from './FormikAutocomplete';
import FormikDatePicker from './FormikDatePicker';
import FormikSelect from './FormikSelect';
import FormikTextField from './FormikTextField';

const FormikController = (props) => {
  const { control, options, disabled, defaultValue, ...rest } = props;

  switch (control) {
    case 'textfield':
      return <FormikTextField {...rest} />;
    case 'multiline':
      return <FormikTextField multiline rows={5} {...rest} />;
    case 'select':
      return <FormikSelect options={options} defaultValue={defaultValue} {...rest} />;
    case 'datepicker':
      return <FormikDatePicker {...rest} />;
    case 'autocomplete':
      return <FormikAutocomplete options={options} disabled={disabled} {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
