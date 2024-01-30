import { Course } from "@/app/interface";
import EditIcon from "@/components/icons/EditIcon";
import { EditCourseModalProps } from "@/components/interface";
import axiosApi from "@/helpers/axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const EditCourseModal: React.FC<EditCourseModalProps> = (props) => {
    const [modal, setModal] = useState(false);
    const { onEditCourse, course } = props;
    const [editedCourse, setEditedCourse] = useState<Course>(course);
    const [courseName, setCourseName] = useState<string>();
    const [description, setCourseDescription] = useState<string>();
    const [dateCreated, setCourseDate] = useState<string>();
    const [departmentOptions, setDepartmentOptions] = useState<any[]>([]);
    const [selectedDepartmentId, setSelectedDepartment] = useState<number | string>(course?.batchId);;

    const toggle = () => setModal(!modal);

    const handleEdit = () => {
        onEditCourse(editedCourse);
    };
    
    useEffect(() => {
        // Fetch the list of parents when the component mounts
        setEditedCourse(course);
        fetchDepartmentOptions();
      }, [course]);

    const fetchDepartmentOptions = async () => {
        try {
            axiosApi.getAllData("batch").then((response) => {
                console.log("set department")
                setDepartmentOptions(response.data);
            })
        } catch (error) {
          console.error('An error occurred while fetching parent options', error);
        }
      };


    return (
        <>
        <Button className="buttons-icons" color="primary" size="md" onClick={toggle}>{<EditIcon />}Edit course</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Course</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">
                                Course Name
                            </Label>
                            <Input
                                id="courseName"
                                name="courseName"
                                value={editedCourse?.courseName}
                                onChange={(e) => setEditedCourse({...editedCourse, courseName: e.target.value})}
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
                                value={editedCourse?.description}
                                onChange={(e) => setEditedCourse({...editedCourse, description: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Department
                            </Label>
                            <Input
      id="exampleSelect"
      name="select"
      type="select"
      value={selectedDepartmentId}
      onChange={(e) => setEditedCourse({...editedCourse, batchId: parseInt(e.target.value,10)})}
    >
            <option value="">Select Department..</option>
            {departmentOptions.map((department) => (
              <option key={department.batchId} value={department.batchId}>
                {department.batchName}
              </option>
            ))}
          </Input>
                        </FormGroup>
                        <FormGroup>
                        <Label>
                                Date created
                            </Label>
                            <Input
                                id="dateCreated"
                                type="date"
                                name="dateCreated"
                                placeholder="Select date"
                                value={editedCourse?.dateCreated}
                                onChange={(e) => setEditedCourse({...editedCourse, dateCreated: e.target.value})}
                            />
                        </FormGroup>
                        <Button type="submit" onClick={handleEdit}>
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

        </>
    )
}

export default EditCourseModal;