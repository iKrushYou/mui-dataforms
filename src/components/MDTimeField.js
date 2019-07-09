import React from 'react';
import {TimePicker} from "@material-ui/pickers";

export default function MDTimeField({value, onChange, field: {id, title, disabled, size, validation}, ...props}) {
    return (
        <TimePicker
            label={title}
            value={value}
            onChange={date => onChange(date)}
            disabled={disabled}
            fullWidth
            {...props}
        />
    );
}
