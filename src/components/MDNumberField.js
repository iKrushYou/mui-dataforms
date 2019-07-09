import React, { useMemo } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import validators from '../validators';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

export default function MDNumberField({
  value,
  onChange,
  field: { id, title, disabled, size, validation },
  validator,
  ...props
}) {
  const { valid, errorMessage } = useMemo(() => validator(value, validation), [value]);

  return (
    <FormControl error={!valid} fullWidth>
      <TextField
        id={id}
        label={title}
        disabled={disabled}
        error={!valid}
        value={value || ''}
        onChange={event => onChange(event.target.value)}
        fullWidth
        {...props}
      />
      {errorMessage && <FormHelperText error={!valid}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

MDNumberField.defaultProps = {
  validator: validators.number,
};
