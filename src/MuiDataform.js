import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import MDTextField from "./components/MDTextField";
import MDNumberField from "./components/MDNumberField";
import MDSelectField from "./components/MDSelectField";
import MDUnknownField from "./components/MDUnknownField";

export default function MuiDataform({values, onChange, fields, spacing}) {

    const fieldDefaults = {
        validation: {
            required: false
        }
    };

    return (
        <React.Fragment>
            <form noValidate autoComplete="off">
                <Grid container spacing={3 * 8}>
                    {fields.map(section => {
                        return (
                            <Grid item xs={12}>
                                {!!section.title && (
                                    <Typography
                                        variant={"h5"}
                                        gutterBottom
                                    >
                                        {section.title}
                                    </Typography>
                                )}
                                {!!section.description && (
                                    <Typography
                                        variant={"body1"}
                                        style={{marginBottom: 8}}
                                    >
                                        {section.description}
                                    </Typography>
                                )}
                                <Grid container spacing={spacing * 8}>
                                    {section.fields.map(field => {
                                        if (!!field) {
                                            if (field.type === 'spacer') {
                                                return (
                                                    <Grid item {...field.size} />
                                                )
                                            }
                                            if (field.type === 'text') {
                                                return (
                                                    <MDTextField
                                                        values={values}
                                                        onChange={onChange}
                                                        field={{...fieldDefaults, ...field} || {}}
                                                        validator={field.validator}
                                                    />
                                                )
                                            }
                                            if (field.type === 'number') {
                                                return (
                                                    <MDNumberField
                                                        values={values}
                                                        onChange={onChange}
                                                        field={{...fieldDefaults, ...field} || {}}
                                                        validator={field.validator}
                                                    />
                                                )
                                            }
                                            if (field.type === 'select') {
                                                return (
                                                    <MDSelectField
                                                        values={values}
                                                        onChange={onChange}
                                                        field={{...fieldDefaults, ...field} || {}}
                                                        validator={field.validator}
                                                    />
                                                )
                                            }
                                            if (field.type === 'date') {
                                                // return (
                                                //     <MDDateField
                                                //         values={values}
                                                //         onChange={onChange}
                                                //         field={{...fieldDefaults, ...field} || {}}
                                                //         validator={field.validator}
                                                //     />
                                                // )
                                            }
                                        }

                                        return (
                                            <MDUnknownField
                                                field={field}
                                            />
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </form>
        </React.Fragment>
    )
}

MuiDataform.defaultProps = {
    initialValues: {},
    spacing: 3
};



