import React, { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
];

export const Translate = () => {
    const [lang, setLang] = useState(options[0]);

    const onSelectedChange = (e, { value }) => setLang(options.find(option => option.value === value));

    return (
        <Dropdown selection={lang.value} onSelectedChange={onSelectedChange} options={options.map(({ value, label }) => ({ key: value, text: label, value }))} />
    );
}