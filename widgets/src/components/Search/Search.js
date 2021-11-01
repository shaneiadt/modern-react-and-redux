import React, { useEffect, useState } from "react";
import { Search as Searchbox, Icon } from "semantic-ui-react";
import axios from 'axios';

import './Search.css';

export const Search = () => {
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            setLoading(true);
            const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });

            setResults(data.query.search.map(({ pageid, title, snippet }) => ({ pageid, title, description: snippet })));
            setLoading(false);
        };

        const timeoutId = setTimeout(() => {
            if (term) search();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [term]);

    const resultsRenderer = ({ pageid, title, description }) => (
        <>
            <a href={`https://en.wikipedia.org?curid=${pageid}`} target='_blank' rel='noreferrer'>{title} <Icon name='linkify' size='small' /></a>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </>
    );

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} loading={loading} results={results} onSearchChange={onSearchChange} resultRenderer={resultsRenderer} />;
}