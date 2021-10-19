import React from "react";
import { Form } from "semantic-ui-react";

export class SearchBar extends React.Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <input placeholder='Image Search' />
                </Form.Field>
            </Form>
        );
    }
}