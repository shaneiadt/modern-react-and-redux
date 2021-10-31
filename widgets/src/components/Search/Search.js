import React, { useEffect, useState } from "react";
import { Search as Searchbox } from "semantic-ui-react";
import axios from 'axios';

export const Search = () => {
    const [term, setTerm] = useState('');
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
            
            setResults(data.query.search);
        };

        if(term) search();
    }, [term]);

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} results={results} onSearchChange={onSearchChange} />;
}