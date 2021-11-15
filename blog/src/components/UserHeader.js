import React, { Component } from "react";

import { Item } from 'semantic-ui-react';

class UserHeader extends Component {
    render() {
        return <Item.Extra>Author - {this.props.userId}</Item.Extra>
    }
}

export default UserHeader;