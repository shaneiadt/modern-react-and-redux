import React from 'react';
import { Container } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
    onSearchSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <Container style={{ padding: '20px', margin: '20px', border: '1px solid #f1f1f1', borderRadius: '5px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </Container>
        );
    }

}

export default App;
