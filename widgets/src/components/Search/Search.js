import React, { useEffect, useState } from "react";
import { Search as Searchbox } from "semantic-ui-react";
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

            setResults(data.query.search.map(({ title, snippet }) => ({ title, description: snippet })));
        };

        if (term) search();
    }, [term]);

    const resultsRenderer = ({ title, description }) => (
        <>
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </>
    );

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} results={results} onSearchChange={onSearchChange} resultRenderer={resultsRenderer} />;
}