import { AddCourseModalProps } from "@/components/interface";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddCourseModal: React.FC<AddCourseModalProps> = (props) => {
    const [modal, setModal] = useState(false);
    const { onAddCourse } = props;

    const [courseID, setCourseID] = useState<number>();
    const [courseName, setCourseName] = useState<string>();
    const [description, setCourseDescription] = useState<string>();
    const [dateCreated, setCourseDate] = useState<string>();

    const toggle = () => setModal(!modal);

    const handleAdd = () => {
        onAddCourse({
            courseID,
            description,
            courseName,
            dateCreated
        })
    };
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
                                value={courseID}
                                onChange={(e) => setCourseID(parseInt(e.target.value))}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Course Name
                            </Label>
                            <Input
                                id="courseName"
                                name="courseName"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">
                                Course Description
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

export default AddCourseModal;