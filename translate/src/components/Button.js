import React, { Component } from "react";

import LanguageContext from "./contexts/LanguageContext";

class Button extends Component {
    // * Class context
    // static contextType = LanguageContext;

    render() {
        // * Class context
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <button className="ui button primary">
                {/* Consumer context */}
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;