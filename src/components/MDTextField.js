import React from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import validators from '../validators';
import FormControl from '@material-ui/core/FormControl/FormControl';

export default function MDTextField({ value, onChange, field: { id, title, disabled, size, validation }, validator }) {
  const { valid, errorMessage } =
    // useMemo(() =>
    validator(value, validation);
  // , [value]);

  return (
    <Tooltip title={errorMessage} placement={'bottom'}>
      <FormControl error={!valid} fullWidth>
        <TextField
          id={id}
          label={title}
          disabled={disabled}
          error={!valid}
          value={value || ''}
          onChange={event => onChange(event.target.value)}
          fullWidth
        />
        {/*<FormHelperText>{errorMessage}</FormHelperText>*/}
      </FormControl>
    </Tooltip>
  );
}

MDTextField.defaultProps = {
  validator: validators.text,
};
