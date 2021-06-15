import { RegisterTeacherFormState } from "../Components/BecomeInstructor/RegisterForm";

export interface PostTeacher extends Omit<RegisterTeacherFormState, "image"> {
  uniqueId: string;
  image: FormData;
}