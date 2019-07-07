import {useMemo} from "react";
import {Grid, TextField, Tooltip} from "@material-ui/core";
import React from "react";
import validators from "../validators";

export default function MDTextField({values, onChange, field: {id, title, disabled, size, validation}, validator}) {

    const {valid, errorMessage} =
        useMemo(() => validator(values[id], validation), [values[id]]);

    return (
        <Grid item xs={12} {...size}>
            <Tooltip title={errorMessage} placement={"bottom"}>
                <TextField
                    id={id}
                    label={title}
                    disabled={disabled}
                    error={!valid}
                    value={values[id]}
                    onChange={event => onChange(id, event.target.value)}
                    fullWidth
                />
            </Tooltip>
        </Grid>
    )
}

MDTextField.defaultProps = {
    validator: validators.text
};