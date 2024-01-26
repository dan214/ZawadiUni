import { AddCourseModalProps } from "@/components/interface";
import axiosApi from "@/helpers/axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const AddCourseModal: React.FC<AddCourseModalProps> = (props) => {
    const [modal, setModal] = useState(false);
    const { onAddCourse } = props;
    const [courseName, setCourseName] = useState<string>();
    const [description, setCourseDescription] = useState<string>();
    const [dateCreated, setCourseDate] = useState<string>();
    const [departmentOptions, setDepartmentOptions] = useState<any[]>([]);
    const [selectedDepartmentId, setSelectedDepartment] = useState('');;

    const toggle = () => setModal(!modal);

    const handleAdd = () => {
        onAddCourse({
            description,
            courseName,
            dateCreated,
            batchId:selectedDepartmentId
        });
    };
    
    useEffect(() => {
        // Fetch the list of parents when the component mounts
        fetchDepartmentOptions();
      }, []);

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
            <Button color="primary" onClick={toggle}>Add Course</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Course</ModalHeader>
                <ModalBody>
                    <Form>
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
                            <Label>
                                Department
                            </Label>
                            <Input
      id="exampleSelect"
      name="select"
      type="select"
      value={selectedDepartmentId}
      onChange={(e) => setSelectedDepartment(e.target.value)}
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