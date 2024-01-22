import { AddModalProps } from "@/components/interface";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddDepartmentModal: React.FC<AddModalProps> = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="primary" onClick={toggle}>Add Department</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Department</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Batch ID
                            </Label>
                            <Input
                                id="batchId"
                                name="batchId"
                                type="number"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Batch Name
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Batch Description
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="textarea"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input type="datetime-local" />
                        </FormGroup>
                        <Button>
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

        </>
    )
}

export default AddDepartmentModal;