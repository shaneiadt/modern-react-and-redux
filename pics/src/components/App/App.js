import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
    state = { images: [], loading: false };

    onSearchSubmit = async (term) => {
        this.setState({ loading: true });

        try {
            const request = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: { term }
                },
                headers: {
                    Authorization: 'Client-ID tw9QXKnDfli2JMKwguRSXBWaNvymA9rESKHzoIqfvVo'
                }
            });

            this.setState({ loading: false, images: request.data.results });
        } catch (error) {
            this.setState({ loading: false });
            console.error(error);
        }
    }

    render() {
        return (
            <>
                <Container style={{ padding: '20px', margin: '20px', border: '1px solid #f1f1f1', borderRadius: '5px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} loading={this.state.loading} />
                </Container>
                {this.state.images &&
                    <Container>
                        {this.state.images.length}
                    </Container>
                }
            </>
        );
    }

}

export default App;
