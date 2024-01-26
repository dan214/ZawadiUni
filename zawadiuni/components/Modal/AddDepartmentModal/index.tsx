import { AddDepartmentModalProps } from "@/components/interface";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddDepartmentModal: React.FC<AddDepartmentModalProps> = (props) => {

    const [modal, setModal] = useState(false);
    const { onAddDepartment } = props;

    const [batchName, setCourseName] = useState<string>();
    const [description, setCourseDescription] = useState<string>();
    const [dateCreated, setCourseDate] = useState<string>();

    const toggle = () => setModal(!modal);

    const handleAdd = () => {
        onAddDepartment({
            description,
            batchName,
            dateCreated
        })
    };

    return (
        <>
            <Button color="primary" onClick={toggle}>Add Department</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Department</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">
                                Department Name
                            </Label>
                            <Input
                                id="courseName"
                                name="courseName"
                                value={batchName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Description
                            </Label>
                            <Input
                                id="courseDescription"
                                name="courseDescription"
                                type="textarea"
                                value={description}
                                onChange={(e) => setCourseDescription(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="dateCreated"
                                type="datetime-local"
                                name="dateCreated"
                                value={dateCreated}
                                onChange={(e) => setCourseDate(e.target.value)}
                            />
                        </FormGroup>
                        <Button type="submit" onClick={handleAdd}>
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

        </>
    )
}

export default AddDepartmentModal;