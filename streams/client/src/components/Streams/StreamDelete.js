import React, { Component } from "react";

import Modal from '../Modal';

class StreamDelete extends Component {
    render() {
        return <Modal header='Delete Stream' content='Are you sure you want to delete stream?' />
    }
}

export default StreamDelete;