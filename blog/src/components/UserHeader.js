import React, { Component } from "react";
import { connect } from "react-redux";
import { Item } from 'semantic-ui-react';

import { fetchUser } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find(user => user.id === this.props.userId);

        if (!user) return null;

        return <Item.Extra>{user.name}</Item.Extra>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);