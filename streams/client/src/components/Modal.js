import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";

const Modal = ({ header, content, onClose, actions }) => {
    return (
        <SemanticModal
            open={true}
            onClose={onClose}
        >
            <SemanticModal.Header>{header}</SemanticModal.Header>
            <SemanticModal.Content>{content}</SemanticModal.Content>
            <SemanticModal.Actions>
                {actions()}
            </SemanticModal.Actions>
        </SemanticModal>
    );
};

export default Modal;