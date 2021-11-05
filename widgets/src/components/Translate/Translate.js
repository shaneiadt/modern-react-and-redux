import React, { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
];

export const Translate = ({ lang = "en" }) => {
    const [lang, setLang] = useState(lang);

    return (
        <Dropdown />
    );
}