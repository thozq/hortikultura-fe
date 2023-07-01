import React from 'react';
import { TextField } from '@mui/material';

const SearchInput = ({ value, onChange }) => {
  return (
    <TextField label="Search" variant="outlined" value={value} onChange={onChange} fullWidth />
  );
};

export default SearchInput;
