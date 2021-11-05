import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Convert = ({ lang, text }) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: lang,
                key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
            }
        });
    }, [lang, text]);

    return (
        <div>
            Convert
        </div>
    )
}