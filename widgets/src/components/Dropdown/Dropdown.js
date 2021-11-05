import React from "react";
import { Dropdown as DDown } from "semantic-ui-react";

export const Dropdown = ({ options, selection, onSelectedChange }) => {
    return (
        <DDown
            placeholder='Select An Option'
            onChange={onSelectedChange}
            fluid
            selection
            value={selection}
            options={options} />
    );
}