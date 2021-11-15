import React, { Component } from "react";
import { connect } from "react-redux";
import { Item } from 'semantic-ui-react';

import { fetchUser } from '../actions';

class UserHeader extends Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        if (!this.props.user) return null;

        return <Item.Extra>{this.props.user.name}</Item.Extra>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);