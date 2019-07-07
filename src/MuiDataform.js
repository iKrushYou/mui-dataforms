import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MDTextField from './components/MDTextField';
import MDNumberField from './components/MDNumberField';
import MDSelectField from './components/MDSelectField';
import MDUnknownField from './components/MDUnknownField';
import MDDateField from './components/MDDateField';
import MDCheckbox from './components/MDCheckbox';
import MDSwitch from './components/MDSwitch';

export default function MuiDataform({ values, onChange, fields, spacing }) {
  const fieldDefaults = {
    validation: {
      required: false,
    },
  };

  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <Grid container spacing={3 * 8}>
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
                <Grid container spacing={spacing * 8}>
                  {section.fields.map((field, index) => {
                    const key = `${field.id}-${field.type}-${index}`;
                    let FieldComponent = MDUnknownField;

                    if (!!field) {
                      if (field.type === 'spacer') {
                        return <Grid item xs={12} {...field.size} key={key} />;
                      } else if (field.type === 'text') {
                        FieldComponent = MDTextField;
                      } else if (field.type === 'number') {
                        FieldComponent = MDNumberField;
                      } else if (field.type === 'select') {
                        FieldComponent = MDSelectField;
                      } else if (field.type === 'date') {
                        FieldComponent = MDDateField;
                      } else if (field.type === 'checkbox') {
                        FieldComponent = MDCheckbox;
                      } else if (field.type === 'switch') {
                        FieldComponent = MDSwitch;
                      } else if (field.type === 'custom') {
                        FieldComponent = field.Component;
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
    </React.Fragment>
  );
}

MuiDataform.defaultProps = {
  initialValues: {},
  spacing: 3,
};
