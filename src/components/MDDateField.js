import {KeyboardDatePicker} from "@material-ui/pickers";
import React, {useMemo} from "react";
import {Grid, Tooltip} from "@material-ui/core";

export default function MDNumberField({values, onChange, field: {id, title, disabled, size, validation}, ...props}) {

    return (
        <Grid item xs={12} {...size}>
            {/*<Tooltip title={errorMessage} placement={"bottom"}>*/}
                <KeyboardDatePicker
                    label={title}
                    value={values[id]}
                    onChange={date => onChange(id, date)}
                    disabled={disabled}
                />
            {/*</Tooltip>*/}
        </Grid>
    )
}