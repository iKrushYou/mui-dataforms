import {useMemo} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, Tooltip} from "@material-ui/core";
import React from "react";
import validators from "../validators";

export default function MDSelectField({values, onChange, field: {id, title, disabled, size, validation, options}, validator}) {

    const {valid, errorMessage} =
        useMemo(() => validator(values[id], validation), [values[id]]);

    return (
        <Grid item xs={12} {...size}>
            <Tooltip title={errorMessage} placement={"bottom"}>
                <FormControl fullWidth disabled={!!disabled}>
                    <InputLabel htmlFor={id}>{title}</InputLabel>
                    <Select
                        value={!!values[id] ? values[id] : ''}
                        onChange={event => onChange(id, event.target.value)}
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
        </Grid>
    )
}

MDSelectField.defaultProps = {
    validator: validators.select
};