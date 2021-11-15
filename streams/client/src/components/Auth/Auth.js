import React, { Component } from "react";

class Auth extends Component {
    state = {
        isSignedIn: null
    };

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

                        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    });
            });
        } catch (error) {
            console.error(error);
        }
    }

    renderAuthButton = () => {
        if (this.state.isSignedIn === null) return <div>I don't know if we are signed in!</div>;
        else if (this.state.isSignedIn) return <div>I am signed in :)</div>;
        else return <div>I am not signed in :(</div>;
    }

    render() {
        return this.renderAuthButton();
    }
}

export default Auth;