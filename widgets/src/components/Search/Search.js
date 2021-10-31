import React, { useEffect, useState } from "react";
import { Search as Searchbox } from "semantic-ui-react";

export const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('TERM', term);
    }, [term]);

    const onSearchChange = (_, { value }) => setTerm(value);

    return <Searchbox fluid value={term} onSearchChange={onSearchChange} />;
}