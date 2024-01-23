import DeleteIcon from '@/components/icons/DeleteIcon';
import { DeleteModalProps } from '@/components/interface';
import { toastNotification } from '@/components/NotificationBar';
import axiosApi from '@/helpers/axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
    const { itemId, itemType, deleteText, deleteTitle, deleteDescription, redirectUrl } = props;
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const { push } = useRouter();

    const toggle = () => setModal(!modal);

    const handleDelete = async () => {
        try {
            setLoading(true);
            axiosApi.deleteData(itemId, itemType).then((response) => {
                console.log(response.status);
            });
        }
        catch (error) {
            toastNotification("error", "There has been an error deleting the item");
        } finally {
            setLoading(false);
            setModal(false);
            toastNotification("success", "This item has successfully been deleted");
            push(`/${redirectUrl}`);
        }
    };

    return (
        <><Button type="submit" value="Submit" className="buttons-icons" color="danger" size="md" onClick={toggle}>{<DeleteIcon />}{deleteText}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{deleteTitle}</ModalHeader>
                <ModalBody>
                    {deleteDescription}
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="danger" disabled={loading} onClick={handleDelete}>
                        {deleteText}
                    </Button>{' '}
                    {loading && (
                        <Spinner
                            className="m-5"
                            color="primary"
                        >
                            Loading...
                        </Spinner>
                    )}
                    <Button type="submit" color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteModal;