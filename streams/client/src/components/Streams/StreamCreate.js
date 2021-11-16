import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Input } from 'semantic-ui-react';

class StreamCreate extends Component {
    renderInput = ({ input }) => <Input {...input} />;

    render() {
        return (
            <form>
                <Field name='title' component={this.renderInput} />
                <Field name='desc' component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);