import React, {useMemo} from "react";
import {TextField, Tooltip} from "@material-ui/core";
import validators from "../validators";

export default function MDNumberField({value, onChange, field: {id, title, disabled, size, validation}, validator}) {

    const {valid, errorMessage} =
        useMemo(() => validator(value, validation), [value]);

    return (
        <Tooltip title={errorMessage} placement={"bottom"}>
            <TextField
                id={id}
                label={title}
                disabled={disabled}
                error={!valid}
                value={value || ""}
                onChange={event => onChange(event.target.value)}
                fullWidth
            />
        </Tooltip>
    )
}

MDNumberField.defaultProps = {
    validator: validators.number
};