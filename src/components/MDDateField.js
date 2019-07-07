import React from 'react';

import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';

export default function MDNumberField({ value, onChange, field: { id, title, disabled, size, validation }, ...props }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        label={title}
        value={value}
        onChange={date => onChange(date)}
        disabled={disabled}
        fullWidth
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
}
