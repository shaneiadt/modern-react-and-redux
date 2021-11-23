import React, { Component } from "react";
import { Button as SemanticButton } from "semantic-ui-react";

import ColorContext from "./contexts/ColorContext";
import LanguageContext from "./contexts/LanguageContext";

class Button extends Component {
    // * Class context
    // static contextType = LanguageContext;

    render() {
        // * Class context
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <ColorContext.Consumer>
                {color => {
                    return (
                        <SemanticButton color={color}>
                            {/* Consumer context */}
                            <LanguageContext.Consumer>
                                {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                            </LanguageContext.Consumer>
                        </SemanticButton>
                    )
                }}
            </ColorContext.Consumer>
        );
    }
}

export default Button;