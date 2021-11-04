import React from "react";
import { Dropdown as DDown } from "semantic-ui-react";

export const Dropdown = ({ options }) => {
    return (
        <DDown
            placeholder='Select An Option'
            fluid
            selection
            options={options} />
    );
}