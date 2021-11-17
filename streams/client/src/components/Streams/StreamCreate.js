import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Input } from 'semantic-ui-react';

class StreamCreate extends Component {
    renderInput = (label) => ({ input: props }) => (
        <Form.Field>
            <label>{label}</label>
            <Input {...props} />
        </Form.Field>
    );

    onSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput('Enter Title')} />
                <Field name='description' component={this.renderInput('Enter Description')} />
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);