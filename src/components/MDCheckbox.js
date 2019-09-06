import React, { useMemo } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import validators from '../validators';
import MDNumberField from './MDNumberField';

export default function MDCheckbox({ value, onChange, field: { id, title, disabled, size, validation }, validator }) {
  const { valid, errorMessage } = useMemo(() => validator(value, validation), [value]);

  return (
    <Tooltip title={''} placement={'bottom'}>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox checked={value || false} onChange={event => onChange(event.target.checked)} />}
          label={title}
        />
        {!valid && <FormHelperText error={!valid}>{errorMessage}</FormHelperText>}
      </FormControl>
    </Tooltip>
  );
}

MDCheckbox.defaultProps = {
  validator: validators.alwaysTrue,
};
