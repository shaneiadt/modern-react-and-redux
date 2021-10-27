import React from 'react';
import unsplash from '../../api/unsplash';
import { Container } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
    state = { images: [], loading: false };

    onSearchSubmit = async (term) => {
        this.setState({ loading: true });

        try {
            const request = await unsplash.get('/search/photos', {
                params: {
                    query: { term }
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
