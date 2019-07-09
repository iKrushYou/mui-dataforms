import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';

export default function MDDateTimeField({
  value,
  onChange,
  field: { id, title, disabled, size, validation },
  ...props
}) {
  return (
    <DateTimePicker
      label={title}
      value={value}
      onChange={date => onChange(date)}
      disabled={disabled}
      fullWidth
      {...props}
    />
  );
}
