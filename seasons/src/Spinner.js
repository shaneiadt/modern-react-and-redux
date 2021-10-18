import React from "react";

const Spinner = ({ text = "Loading" }) => (
    <div className="ui active dimmer">
        <div className="ui big text loader">
            {text}
        </div>
    </div>
)

export default Spinner;