import React from "react";
import {FormControl, InputLabel, MenuItem, Select, Tooltip} from "@material-ui/core";
import validators from "../validators";

export default function MDSelectField({value, onChange, field: {id, title, disabled, size, validation, options}, validator}) {

    const {valid, errorMessage} =
        // useMemo(() =>
        validator(value, validation)
    // , [value]);

    return (
        <Tooltip title={errorMessage} placement={"bottom"}>
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
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Tooltip>
    )
}

MDSelectField.defaultProps = {
    validator: validators.select
};