import React from "react";
import { Modal as SemanticModal, Button } from "semantic-ui-react";

import history from '../history';

const Modal = ({ header, content }) => {
    return (
        <SemanticModal
            open={true}
            onClose={() => history.push('/')}
        >
            <SemanticModal.Header>{header}</SemanticModal.Header>
            <SemanticModal.Content>{content}</SemanticModal.Content>
            <SemanticModal.Actions>
                <Button negative>
                    Cancel
                </Button>
                <Button positive>
                    Yes
                </Button>
            </SemanticModal.Actions>
        </SemanticModal>
    );
};

export default Modal;