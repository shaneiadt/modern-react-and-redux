import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
    onSearchSubmit = async (term) => {
        try {
            console.log(term);
            const request = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: { term }
                },
                headers: {
                    Authorization: 'Client-ID tw9QXKnDfli2JMKwguRSXBWaNvymA9rESKHzoIqfvVo'
                }
            });
            console.log(request);
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Container style={{ padding: '20px', margin: '20px', border: '1px solid #f1f1f1', borderRadius: '5px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </Container>
        );
    }

}

export default App;
