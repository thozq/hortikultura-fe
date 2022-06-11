import FormikAutocomplete from './FormikAutocomplete';
import FormikDatePicker from './FormikDatePicker';
import FormikNumber from './FormikNumber';
import FormikNumberCurrency from './FormikNumberCurrency';
import FormikNumberWeight from './FormikNumberWeight';
import FormikSelect from './FormikSelect';
import FormikTextField from './FormikTextField';

const FormikController = (props) => {
  const { control, label, options, disabled, defaultValue, ...rest } = props;

  switch (control) {
    case 'textfield':
      return <FormikTextField label={label} {...rest} />;
    case 'multiline':
      return <FormikTextField label={label} multiline rows={5} {...rest} />;
    case 'select':
      return <FormikSelect label={label} options={options} defaultValue={defaultValue} {...rest} />;
    case 'datepicker':
      return <FormikDatePicker label={label} {...rest} />;
    case 'autocomplete':
      return <FormikAutocomplete label={label} options={options} disabled={disabled} {...rest} />;
    case 'number':
      return <FormikNumber label={label} {...rest} />;
    case 'numbercurrency':
      return <FormikNumberCurrency label={label} {...rest} />;
    case 'numberweight':
      return <FormikNumberWeight label={label} {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
