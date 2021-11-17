import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input, Message } from 'semantic-ui-react';

class StreamCreate extends Component {
    renderInput = ({ input: props, meta: { error, touched }, label }) => (
        <Form.Field>
            <label>{label}</label>
            <Input {...props} autoComplete="off" />
            {touched && error && (
                <Message negative>
                    <p>{error}</p>
                </Message>
            )}
        </Form.Field>
    );

    onSubmit = (formValues) => {
        console.log(formValues);
    }

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

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);