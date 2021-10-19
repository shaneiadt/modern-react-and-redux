import { Container, Form, Checkbox, Button } from 'semantic-ui-react';
import { SearchBar } from '../SearchBar/SearchBar';

function App() {
    return (
        <Container>
            <SearchBar />
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    );
}

export default App;
