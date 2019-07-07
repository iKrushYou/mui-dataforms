import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

export default function MDUnknownField({field: {title, type, size}}) {

    return (
        <Grid item xs={12} {...size}>
            <Typography color={"error"}>Unknown Field: {title} [{type}]</Typography>
        </Grid>
    )
}