import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';

class StreamCreate extends Component {
    renderInput = (label) => ({ input: props }) => (
        <Form.Field>
            <label>{label}</label>
            <Input {...props} />
        </Form.Field>
    );

    render() {
        return (
            <Form>
                <Field name='title' component={this.renderInput('Enter Title')} />
                <Field name='description' component={this.renderInput('Enter Description')} />
            </Form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);