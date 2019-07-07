import React from "react";
import {Tooltip} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

export default function MDCheckbox({value, onChange, field: {id, title, disabled, size, validation}, validator}) {

    return (
        <Tooltip title={""} placement={"bottom"}>
            <FormControl fullWidth>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value}
                            onChange={event => onChange(event.target.checked)}
                        />
                    }
                    label={title}
                />
            </FormControl>
        </Tooltip>
    )
}