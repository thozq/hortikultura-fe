/* eslint-disable no-fallthrough */

import FormikSelect from './FormikSelect';
import FormikTextField from './FormikTextField';

const FormikController = (props) => {
  const { control, options, ...rest } = props;

  switch (control) {
    case 'textfield':
      return <FormikTextField {...rest} />;
    case 'multiline':
      return <FormikTextField multiline rows={5} {...rest} />;
    case 'select':
      return <FormikSelect options={options} {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
