import React, { useRef, useState, CSSProperties } from "react";
import styled from "styled-components";
import RegisterFormLeftSection from "./RegisterFormLeftSection";
import CreateInput from "./../Common/CreateInput/CrateInput";
import CreateButton from "../Common/CreateButton";
import SelectSpecilization from "./SelectSpecilization";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../store/course/actions";
import { State } from "../../store/tsTypes";
import { useHistory } from "react-router-dom";

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
  const { data } = useSelector((state: State) => state.user);
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
        [name]: new Blob([e.target.files![0]], { type: "image/jpeg" }),
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

  console.log(data);

  const handleSubmitForm: React.FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault();
    const registerFormData: FormData = new FormData();

    const payload = { ...registerData, uniqueId: data.user._id };

    for (let key in payload) {
      if (key) {
        //@ts-ignore
        registerFormData.append(key, payload[key]);
      }
    }

    try {
      const data = await dispatch(addTeacher(registerFormData));
      console.log(typeof data);

      // @ts-ignore
      if (data) {
        history.push("/instructor");
      }
    } catch (error) {}
  };

  return (
    <FormWrapper>
      <RegisterFormLeftSection />
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
              label=""
              handleChange={handleOnChange}
              placeholder="Write qualifications*"
              required={qualification.length === 0}
            />

            <CreateButton
              label="Add Qualification"
              handleClick={handleAddQualification}
              styles={AddQualificationStyles}
            />

            <CreateInput
              type="text"
              name="linkedInProfile"
              value={linkedInProfile}
              handleChange={handleOnChange}
              label=""
              required={true}
              placeholder="Enter Linkedin Profile Url*"
            />

            <CreateInput
              type="file"
              name="image"
              //@ts-ignore
              value={image ? image?.name : ""}
              handleChange={handleOnChange}
              label="Select Profile Image"
              required={false}
              placeholder=""
            />

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
              label=""
              required={true}
              placeholder="Describe Yourself*"
              handleChange={handleOnChange}
            />

            <SelectSpecilization setRegisterData={setRegisterData} />
          </QualificationBox>

          <Submit type="submit">Submit</Submit>
        </Form>
      </FormRightSection>
    </FormWrapper>
  );
}

const AddQualificationStyles: CSSProperties = {
  border: "1px solid grey",
  padding: "10px",
  borderRadius: "2px",
  backgroundColor: "gray",
  color: "#fff",
  margin: "10px 0 30px",
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > section {
    flex: 1;
  }
`;

const FormRightSection = styled.section`
  background-color: #ececec;
  padding: 2rem;

  & > p {
    font-size: 2rem;
    font-weight: 200;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const QualificationBox = styled.div``;
const ShowQualificationBox = styled.div``;
const Submit = styled.button`
  padding: 8px 2rem;
  width: fit-content;
  background-color: #0073b1;
  color: #fff;
  border-radius: 2px;
  margin: 10px 0;
`;

const SelectImgBox = styled.div``;
