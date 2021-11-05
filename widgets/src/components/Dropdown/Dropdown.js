import React, { useState } from "react";
import { Dropdown as DDown } from "semantic-ui-react";

export const Dropdown = ({ options }) => {
    const [state, setState] = useState({});
    const handleChange = (e, { value }) => setState({ value });

    return (
        <DDown
            placeholder='Select An Option'
            onChange={handleChange}
            fluid
            selection
            value={state.value}
            options={options} />
    );
}