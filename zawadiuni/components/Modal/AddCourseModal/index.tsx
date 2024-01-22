import { AddModalProps } from "@/components/interface";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddCourseModal: React.FC<AddModalProps> = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="primary" onClick={toggle}>Add Course</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Course</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Course ID
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
                                Course Name
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Course Description
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

export default AddCourseModal;