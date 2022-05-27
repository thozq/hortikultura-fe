import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useState } from 'react';
import BaseTextField from './BaseTextField';

const BaseDatePicker = (props) => {
  const { ...params } = props;

  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <MobileDatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <BaseTextField {...params} />}
        {...params}
      />
    </LocalizationProvider>
  );
};

export default BaseDatePicker;
