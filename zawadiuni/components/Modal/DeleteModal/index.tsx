import DeleteIcon from '@/components/icons/DeleteIcon';
import { DeleteModalProps } from '@/components/interface';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
    const { deleteText, deleteTitle, deleteDescription } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <><Button className="buttons-icons" color="danger" size="md" onClick={toggle}>{<DeleteIcon />}{deleteText}</Button><Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{deleteTitle}</ModalHeader>
            <ModalBody>
                {deleteDescription}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal></>
    );
}

export default DeleteModal;