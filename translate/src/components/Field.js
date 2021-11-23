import React, { Component } from "react";

import LanguageContext from "./contexts/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div className="ui field">
                <label>Name</label>
                <input />
            </div>
        );
    }
}

export default Field;