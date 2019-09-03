import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  MDCheckbox,
  MDDateField,
  MDDateTimeField,
  MDNumberField,
  MDSelectField,
  MDSwitch,
  MDTextField,
  MDTimeField,
  MDUnknownField,
} from './components';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function MuiDataform({ values, onChange, fields, spacing }) {
  const fieldDefaults = {
    validation: {
      required: false,
    },
  };

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <form noValidate autoComplete="off" fullWidth>
          <Grid container spacing={3}>
            {fields.map((section, index) => {
              return (
                <Grid item xs={12} key={`section-${section.title}-${index}`}>
                  {!!section.title && (
                    <Typography variant={'h5'} gutterBottom>
                      {section.title}
                    </Typography>
                  )}
                  {!!section.description && (
                    <Typography variant={'body1'} style={{ marginBottom: 8 }}>
                      {section.description}
                    </Typography>
                  )}
                  <Grid container spacing={spacing}>
                    {section.fields.map((field, index) => {
                      const key = `${field.id}-${field.type}-${index}`;
                      let FieldComponent = MDUnknownField;

                      if (!!field) {
                        switch (field.type) {
                          case 'spacer':
                            return <Grid item xs={12} {...field.size} key={key} />;
                          case 'text':
                            FieldComponent = MDTextField;
                            break;
                          case 'number':
                            FieldComponent = MDNumberField;
                            break;
                          case 'select':
                            FieldComponent = MDSelectField;
                            break;
                          case 'date':
                            FieldComponent = MDDateField;
                            break;
                          case 'time':
                            FieldComponent = MDTimeField;
                            break;
                          case 'datetime':
                            FieldComponent = MDDateTimeField;
                            break;
                          case 'checkbox':
                            FieldComponent = MDCheckbox;
                            break;
                          case 'switch':
                            FieldComponent = MDSwitch;
                            break;
                        }
                      }

                      return (
                        <Grid item xs={12} {...field.size}>
                          <FieldComponent
                            key={key}
                            value={values[field.id]}
                            onChange={onChange(field.id)}
                            field={{ ...fieldDefaults, ...field } || {}}
                            validator={field.validator}
                            fullWidth
                            {...field.props}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </form>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

MuiDataform.defaultProps = {
  initialValues: {},
  spacing: 3,
};
