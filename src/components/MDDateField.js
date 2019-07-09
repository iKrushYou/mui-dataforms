import React from 'react';
import {DatePicker} from "@material-ui/pickers";

export default function MDDateField({ value, onChange, field: { id, title, disabled, size, validation }, ...props }) {
  return (
      <DatePicker
        label={title}
        value={value}
        onChange={date => onChange(date)}
        disabled={disabled}
        fullWidth
        {...props}
      />
  );
}
