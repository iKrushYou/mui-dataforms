import React, { useMemo } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import validators from '../validators';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function MDTextField({
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

MDTextField.defaultProps = {
  validator: validators.text,
};
