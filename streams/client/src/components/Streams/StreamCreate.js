import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from 'semantic-ui-react';

import { createStream } from '../../actions/';

class StreamCreate extends Component {
    renderError = (error, touched) => touched && error && <Label basic color='red' pointing>{error}</Label>;

    renderInput = ({ input: props, meta: { error, touched }, label }) => (
        <Form.Field error={touched && error}>
            <label>{label}</label>
            <Input {...props} autoComplete="off" />
            {this.renderError(error, touched)}
        </Form.Field>
    );

    onSubmit = (formValues) => this.props.createStream(formValues);

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label="Enter a title" />
                <Field name='description' component={this.renderInput} label="Enter a description" />
                <Button>Submit</Button>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) errors.title = "You must enter a title";
    if (!formValues.description) errors.description = "You must enter a description";

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);