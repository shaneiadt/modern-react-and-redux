import React, { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
];

export const Translate = ({ language = "en" }) => {
    const [lang, setLang] = useState(language);

    return (
        <Dropdown options={options.map(({ value, label }) => ({ key: value, text: label, value }))} />
    );
}