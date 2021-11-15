import React, { Component } from "react";

class Auth extends Component {
    componentDidMount() {
        try {
            window.gapi.load('client:auth2', () => {
                window.gapi.init({
                    clientId: '224043226631-qehv8ophoeo34ba844mhcdbep4280sp0.apps.googleusercontent.com',
                    scope: 'email'
                });
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div>Auth</div>
        );
    }
}

export default Auth;