import React from "react";
import { Form, Input } from "semantic-ui-react";

export class SearchBar extends React.Component {
    state = {
        term: ""
    };

    onInputChange = (_, { value }) => {
        this.setState({ term: value });
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <Input placeholder='Image Search' value={this.state.term} onChange={this.onInputChange} />
                </Form.Field>
            </Form>
        );
    }
}