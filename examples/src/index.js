import React from 'react';
import {render} from 'react-dom';
import './styles.css'
import {Card, CardContent, Grid} from "@material-ui/core";
import useMergeState from "./useMergeState";
import MuiDataform from "../../src/MuiDataform";

const validateIpAddress = (ipAddress) => (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)
);

const App = () => {

    const fields = [
        {
            title: "Personal Information",
            description: "Some info about yourself.",
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
                },
            ],
        },

        {
            title: "Contact Info",
            fields: [
                {
                    id: 'email-address',
                    title: 'Email Address',
                    type: 'text',
                    validation: {
                        min: 3,
                    },
                    size: {
                        xs: 12,
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
                        md: 6,
                    },
                },
                {
                    type: 'spacer',
                    size: {
                        xs: false,
                        md: 6,
                    }
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
                    validator: (value) => {
                        const valid = !!value && value.match(/^[0-9]{5}(?:-[0-9]{4})?$/)
                        const errorMessage = valid ? '' : 'Incorrect zip code'
                        return {valid, errorMessage}
                    },
                    size: {
                        xs: 12,
                        md: 6,
                    },
                },
            ]
        },
    ];

    const [values, setValues] = useMergeState({"first-name": "Alex"})

    const handleOnChange = (key, value) => {
        setValues({[key]: value})
    }

    return (
        <React.Fragment>
            <Grid container style={{marginTop: 64, marginBottom: 64}}>
                <Grid item xs={false} md={2}/>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={3 * 8}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <MuiDataform fields={fields} values={values} onChange={handleOnChange}/>
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
                <Grid item xs={false} md={2}/>
            </Grid>
        </React.Fragment>
    );
};

render(<App/>, document.getElementById("root"));