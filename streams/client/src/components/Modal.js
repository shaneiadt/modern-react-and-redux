import React from "react";
import { Modal as SemanticModal, Button } from "semantic-ui-react";

const Modal = props => {
    return (
        <SemanticModal
            open={true}
        >
            <SemanticModal.Header>Use Google's location service?</SemanticModal.Header>
            <SemanticModal.Content>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </SemanticModal.Content>
            <SemanticModal.Actions>
                <Button negative>
                    Disagree
                </Button>
                <Button positive>
                    Agree
                </Button>
            </SemanticModal.Actions>
        </SemanticModal>
    );
};

export default Modal;