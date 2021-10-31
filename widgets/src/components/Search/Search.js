import React, { useEffect, useState } from "react";
import { Search as Searchbox, Icon } from "semantic-ui-react";
import axios from 'axios';

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            // Cancel the timeout if value changes (also on delay change or unmount)
            // This is how we prevent debounced value from updating if value is changed ...
            // .. within the delay period. Timeout gets cleared and restarted.
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
}

export const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 500);

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

    useEffect(() => {
        if (term) debouncedSearchTerm();
    }, [term]);

    const resultsRenderer = ({ pageid, title, description }) => (
        <>
            <a href={`https://en.wikipedia.org?curid=${pageid}`} target='_blank' rel='noreferrer'>{title} <Icon name='linkify' size='small' /></a>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </>
    );

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} results={results} onSearchChange={onSearchChange} resultRenderer={resultsRenderer} />;
}