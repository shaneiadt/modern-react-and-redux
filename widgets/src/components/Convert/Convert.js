import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Convert = ({ lang, text }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(translated);

    useEffect(() => {
        const debounceTimer = setTimeout(() => setDebouncedText(text), 500);

        return () => clearTimeout(debounceTimer);
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: lang,
                    key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation(debouncedText);
    }, [lang, debouncedText]);

    return (
        <h1>{translated}</h1>
    )
}