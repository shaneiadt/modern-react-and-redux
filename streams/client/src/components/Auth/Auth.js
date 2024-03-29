import React, { Component } from "react";
import { Button, Icon, Loader } from "semantic-ui-react";
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';

class Auth extends Component {
    componentDidMount() {
        try {
            window.gapi.load('client:auth2', () => {
                window.gapi.client
                    .init({
                        clientId: '224043226631-qehv8ophoeo34ba844mhcdbep4280sp0.apps.googleusercontent.com',
                        scope: 'email'
                    })
                    .then(() => {
                        this.auth = window.gapi.auth2.getAuthInstance();

                        this.onAuthChange(this.auth.isSignedIn.get());

                        this.auth.isSignedIn.listen(this.onAuthChange);
                    });
            });
        } catch (error) {
            console.error(error);
        }
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) return <Loader active inline='centered' size="small" />;
        else if (this.props.isSignedIn) return <Button color='google plus' onClick={() => this.auth.signOut()}><Icon name='google plus' /> Sign Out</Button>;
        else return <Button color='google plus' onClick={() => this.auth.signIn()}><Icon name='google plus' /> Sign In</Button>;
    }

    render() {
        return this.renderAuthButton();
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(Auth);