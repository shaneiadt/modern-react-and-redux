import React from "react";
import './SeasonDisplay.css';

const config = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's cold",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';

    }

    return lat > 0 ? 'winter' : 'summer';
}

export const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());

    return (
        <div>
            <i className={`${config[season].iconName} icon massive icon-left`} />
            <h1>{config[season].text}</h1>
            <i className={`${config[season].iconName} icon massive icon-right`} />
        </div>
    )
}