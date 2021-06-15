import React, { useRef, useState } from "react";
import styled from "styled-components";
import RegisterFormLeftSection from "./RegisterFormLeftSection";
import CreateInput from "./../Common/CreateInput/CrateInput";
import CreateButton from "../Common/CreateButton";
import { type } from "os";
import SelectSpecilization from "./SelectSpecilization";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../store/course/actions";
import { PostTeacher } from "../../api/apiTypes";
import { State } from "../../store/tsTypes";
import { useHistory } from "react-router-dom";
import { UserState } from "../../store/user/userReducer";

interface IRegisterFormProps {}

export interface RegisterTeacherFormState {
  qualification: Array<string>;
  description: string;
  DOB: string;
  specializations: Array<string>;
  linkedInProfile: string;
  image: Blob | null;
}

const initState: RegisterTeacherFormState = {
  qualification: [],
  description: "",
  DOB: "",
  specializations: [],
  linkedInProfile: "",
  image: null,
};

export default function RegisterForm({}: IRegisterFormProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const imgRef = useRef<HTMLInputElement>(null);
  const { userId } = useSelector((state: State) => state.user);
  const [registerData, setRegisterData] =
    useState<RegisterTeacherFormState>(initState);
  const [qualificationText, setQualificationText] = useState<string>("");

  const { qualification, description, DOB, linkedInProfile, image } =
    registerData;

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { type, name, value } = e.target;

    if (name === "qualificationText") {
      setQualificationText(value);
    } else if (name === "image") {
      console.log(e.target.files![0]);
      setRegisterData({
        ...registerData,
        [name]: new Blob([e.target.files![0]], { type: "image/png" }),
      });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleAddQualification = () => {
    setRegisterData({
      ...registerData,
      qualification: [...registerData.qualification, qualificationText],
    });

    setQualificationText("");
  };

  console.log(registerData);

  const handleSubmitForm: React.FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();
    const registerFormData: FormData = new FormData();

    const payload = { ...registerData, uniqueId: userId };

    // let key: keyof typeof payload;

    for (let key in payload) {
      if (key) {
        //@ts-ignore
        registerFormData.append(key, payload[key!]);
      }
    }

    try {
      const data = await dispatch(addTeacher(registerFormData));
      console.log(typeof data);

      // @ts-ignore
      if (data) {
        // history.push("/instructor");
      }
    } catch (error) {}
  };

  return (
    <div>
      {/* <RegisterFormLeftSection /> */}
      <FormRightSection onSubmit={handleSubmitForm}>
        <p>Instructor Application</p>

        <Form>
          <QualificationBox>
            <ShowQualificationBox>
              {qualification.join("\n")}
            </ShowQualificationBox>

            <CreateInput
              type="text"
              name="qualificationText"
              value={qualificationText}
              label="Add qualifications"
              handleChange={handleOnChange}
              placeholder="Qualification"
              required={qualification.length === 0}
            />

            <CreateButton
              label="Add qualification"
              handleClick={handleAddQualification}
            />

            <CreateInput
              type="text"
              name="linkedInProfile"
              value={linkedInProfile}
              handleChange={handleOnChange}
              label="Linkedin Profile"
              required={true}
              placeholder="Enter Linkedin Profile Url"
            />

            <CreateInput
              type="file"
              name="image"
              value=""
              handleChange={handleOnChange}
              label="Select Profile Image"
              required={false}
              placeholder=""
            />

            {/* <SelectImgBox>
              <input
                type="file"
                ref={imgRef}
                onChange={handleOnChange}
                name="image"
              />
            </SelectImgBox> */}

            <CreateInput
              type="date"
              name="DOB"
              value={DOB}
              label="Date of Birth"
              required={true}
              placeholder=""
              handleChange={handleOnChange}
            />

            <CreateInput
              type="text"
              name="description"
              value={description}
              label="Describe Yourself"
              required={true}
              placeholder="Enter description"
              handleChange={handleOnChange}
            />

            <SelectSpecilization setRegisterData={setRegisterData} />
          </QualificationBox>

          <Submit type="submit">Submit</Submit>
        </Form>
      </FormRightSection>
    </div>
  );
}

const FormRightSection = styled.section``;
const Form = styled.form``;
const QualificationBox = styled.div``;
const ShowQualificationBox = styled.div``;
const Submit = styled.button``;
const SelectImgBox = styled.div``;
