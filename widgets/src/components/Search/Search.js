import React, { useState } from "react";
import { Search as Searchbox } from "semantic-ui-react";

export const Search = () => {
    const [term, setTerm] = useState('');

    const onSearchChange = (e, { value }) => setTerm(value);

    return <Searchbox fluid value={term} onSearchChange={onSearchChange} />;
}