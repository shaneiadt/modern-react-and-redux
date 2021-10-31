import React, { useEffect, useState } from "react";
import { Search as Searchbox, Icon } from "semantic-ui-react";
import axios from 'axios';

export const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
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
        };

        if (term) search();
    }, [term]);

    const resultsRenderer = ({ pageid, title, description }) => (
        <>
            <a href={`https://en.wikipedia.org?curid=${pageid}`} target='_blank'>{title} <Icon name='linkify' size='small' /></a>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </>
    );

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} results={results} onSearchChange={onSearchChange} resultRenderer={resultsRenderer} />;
}