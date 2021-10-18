import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';

    }

    return lat > 0 ? 'winter' : 'summer';
}

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const getText = () => season === 'winter' ? <h1>Burr, it's chilly</h1> : <h1>Let's hit the beach</h1>
    const getIcon = () => season === 'winter' ? <i className="snowflake icon" /> : <i className="sun icon" />

    return (
        <div>
            {getIcon()}
            {getText()}
        </div>
    )
}