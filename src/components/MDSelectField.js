import React, { useMemo } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Tooltip } from '@material-ui/core';
import validators from '../validators';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function MDSelectField({
  value,
  onChange,
  field: { id, title, disabled, size, validation, options },
  validator,
  ...props
}) {
  const { valid, errorMessage } = useMemo(() => validator(value, validation), [value]);

  return (
    <FormControl fullWidth disabled={!!disabled}>
      <InputLabel htmlFor={id}>{title}</InputLabel>
      <Select
        value={value || ''}
        onChange={event => onChange(event.target.value)}
        inputProps={{
          name: id,
          id: id,
        }}
        error={!valid}
        {...props}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errorMessage && <FormHelperText error={!valid}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

MDSelectField.defaultProps = {
  validator: validators.select,
};
