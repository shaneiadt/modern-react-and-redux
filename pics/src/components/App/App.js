import { Container } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

function App() {
    return (
        <Container style={{padding:'20px', margin: '20px', border:'1px solid #f1f1f1', borderRadius: '5px'}}>
            <SearchBar />
        </Container>
    );
}

export default App;
