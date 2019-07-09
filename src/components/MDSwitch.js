import React, { useMemo } from 'react';
import { Tooltip } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Switch from '@material-ui/core/Switch/Switch';
import FormHelperText from '@material-ui/core/FormHelperText';
import validators from '../validators';

export default function MDSwitch({ value, onChange, field: { id, title, disabled, size, validation }, validator }) {
  const { valid, errorMessage } = useMemo(() => validator(value, validation), [value]);

  return (
    <Tooltip title={''} placement={'bottom'}>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Switch checked={value} onChange={event => onChange(event.target.checked)} />}
          label={title}
        />
        {!valid && <FormHelperText error={!valid}>{errorMessage}</FormHelperText>}
      </FormControl>
    </Tooltip>
  );
}

MDSwitch.defaultProps = {
  validator: validators.alwaysTrue,
};
