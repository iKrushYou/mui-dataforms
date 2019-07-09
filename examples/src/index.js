import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import { Card, CardContent, Grid } from '@material-ui/core';
import useMergeState from './useMergeState';
import MuiDataform from '../../src/MuiDataform';
import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

const App = () => {
  const fields = [
    {
      title: 'Personal Information',
      description: 'Some info about yourself.',
      fields: [
        {
          id: 'first-name',
          title: 'First Name',
          type: 'text',
          validation: {
            required: true,
            min: 3,
            max: 16,
          },
          size: {
            xs: 12,
            md: 6,
          },
        },
        {
          id: 'last-name',
          title: 'Last Name',
          type: 'text',
          validation: {
            required: true,
            min: 3,
            max: 16,
          },
          size: {
            xs: 12,
            md: 6,
          },
        },
        {
          id: 'birthday',
          title: 'Birthday',
          type: 'date',
          validation: {
            required: true,
            min: 3,
            max: 16,
          },
          size: {
            xs: 12,
            md: 6,
          },
          props: {
            disableFuture: true,
            openTo: 'year',
            format: 'DD/MM/YYYY',
            views: ['year', 'month', 'day'],
          },
        },
        {
          id: 'fav-time',
          title: 'Favorite Time',
          type: 'custom',
          validation: {
            required: true,
            min: 3,
            max: 16,
          },
          size: {
            xs: 12,
            md: 6,
          },
          props: {
            disableFuture: true,
            openTo: 'year',
            format: 'DD/MM/YYYY',
            views: ['year', 'month', 'day'],
          },
          Component: ({ value, onChange, field }) => (
            <TimePicker clearable ampm={false} label={field.title} value={value} onChange={onChange} fullWidth />
          ),
        },
        {
          id: 'biography',
          title: 'Biography',
          type: 'text',
          validation: {
            required: true,
            min: 3,
            max: 16,
          },
          size: {
            xs: 12,
            md: 6,
          },
          props: {
            multiline: true,
            rows: 4,
          },
        },
      ],
    },

    {
      title: 'Contact Info',
      fields: [
        {
          id: 'email-address',
          title: 'Email Address',
          type: 'text',
          validation: {
            min: 3,
          },
          size: {
            xs: 6,
          },
        },
        {
          type: 'spacer',
          size: {
            xs: false,
            md: 6,
          },
        },
        {
          id: 'home-address',
          title: 'Address',
          type: 'text',
          validation: {
            min: 3,
          },
          size: {
            xs: 12,
          },
        },
        {
          id: 'home-state',
          title: 'State',
          type: 'select',
          validation: {
            required: true,
          },
          options: [
            {
              value: 'new-york',
              label: 'New York',
            },
            {
              value: 'new-jersey',
              label: 'New Jersey',
            },
          ],
          size: {
            xs: 12,
            md: 6,
          },
        },
        {
          id: 'home-city',
          title: 'City',
          type: 'text',
          validation: {
            min: 3,
          },
          size: {
            xs: 12,
            md: 6,
          },
        },
        {
          id: 'home-zip',
          title: 'Zip Code',
          type: 'text',
          validator: value => {
            const valid = !!value && value.match(/^[0-9]{5}(?:-[0-9]{4})?$/);
            const errorMessage = valid ? '' : 'Incorrect zip code';
            return { valid, errorMessage };
          },
          size: {
            xs: 12,
            md: 6,
          },
        },
        {
          id: 'mailing-list',
          title: 'Add me to the mailing list',
          type: 'checkbox',
          size: {
            xs: 12,
            md: 3,
          },
        },
        {
          id: 'other-list',
          title: 'Add me to the other list',
          type: 'switch',
          validator: value => ({ valid: value, errorMessage: 'This field is required' }),
          size: {
            xs: 12,
            md: 3,
          },
        },
      ],
    },
  ];

  const [values, setValues] = useMergeState({ 'first-name': 'Alex', 'mailing-list': true });

  const handleOnChange = key => value => {
    console.log(`setting [${key}]: ${value}`);
    setValues({ [key]: value });
  };

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container style={{ marginTop: 64, marginBottom: 64 }}>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <MuiDataform fields={fields} values={values} onChange={handleOnChange} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} md={2} />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
