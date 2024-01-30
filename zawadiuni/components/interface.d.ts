import { Course } from "@/app/interface";

export interface TopCardProps {
  cardTitle: string;
  cardSubtitle: string;
  cardText: string;
}

export interface DeleteModalProps {
  deleteText: string;
  deleteTitle: string;
  deleteDescription: string;
  itemId: string;
  itemType: string;
  redirectUrl: string;
}

export interface AddCourseModalProps {
  onAddCourse: Function;
}

export interface EditCourseModalProps {
  onEditCourse: Function;
  course: any;
}

export interface EditDepartmentModalProps {
  onEditCourse: Function;
  course: Batch;
}

export interface AddDepartmentModalProps {
  onAddDepartment: Function;
}