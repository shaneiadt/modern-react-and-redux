import React from "react";
import { Form, Input } from "semantic-ui-react";

export class SearchBar extends React.Component {

    onInputChange(_, { value }) {
        console.log(value);
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <Input placeholder='Image Search' onChange={this.onInputChange} />
                </Form.Field>
            </Form>
        );
    }
}