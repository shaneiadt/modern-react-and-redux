import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Dropdown } from '../Dropdown/Dropdown';
import { Convert } from '../Convert/Convert';

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
];

export const Translate = () => {
    const [lang, setLang] = useState(options[0]);
    const [text, setText] = useState("");

    const onSelectedChange = (e, { value }) => setLang(options.find(option => option.value === value));

    return (
        <>
            <p><Input onChange={(e, { value }) => setText(value)} value={text} placeholder="Enter text to translate..." fluid /></p>
            <p><Dropdown selection={lang.value} onSelectedChange={onSelectedChange} options={options.map(({ value, label }) => ({ key: value, text: label, value }))} /></p>
            <p><Convert /></p>
        </>
    );
}