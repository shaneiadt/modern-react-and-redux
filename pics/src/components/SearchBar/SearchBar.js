import React from "react";
import { Form, Input } from "semantic-ui-react";

export class SearchBar extends React.Component {
    state = {
        loading: false,
        term: ""
    };

    onInputChange = (_, { value }) => {
        this.setState({ ...this.state, term: value });
    }

    render() {
        return (
            <Form loading={this.state.loading}>
                <Form.Field>
                    <Input placeholder='Image Search' value={this.state.term} onChange={this.onInputChange} />
                </Form.Field>
            </Form>
        );
    }
}