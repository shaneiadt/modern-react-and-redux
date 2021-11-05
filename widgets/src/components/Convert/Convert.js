import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Convert = ({ lang, text }) => {
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: lang,
                    key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation(text);
    }, [lang, text]);

    return (
        <div>
            <h1>{translated}</h1>
        </div>
    )
}