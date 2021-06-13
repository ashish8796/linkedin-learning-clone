import React, { useState } from "react";
import styled from "styled-components";
import RegisterFormLeftSection from "./RegisterFormLeftSection";
import CreateInput from "./../Common/CreateInput/CrateInput";
import CreateButton from "../Common/CreateButton";
import { type } from "os";
import SelectSpecilization from "./SelectSpecilization";

interface IRegisterFormProps {}

interface InitState {
  qualification: Array<string>;
  description: string;
  dob: string;
  specializations: Array<String>;
  linkedInProfile: string;
}

const initState: InitState = {
  qualification: [],
  description: "",
  dob: "",
  specializations: [],
  linkedInProfile: "",
};

export default function RegisterForm({}: IRegisterFormProps) {
  const [registerData, setRegisterData] = useState<InitState>(initState);
  const [qualificationText, setQualificationText] = useState<string>("");

  const { qualification, description, dob, specializations, linkedInProfile } =
    registerData;

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { type, name, value } = e.target;

    if (name === "qualificationText") {
      setQualificationText(value);
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

  return (
    <div>
      {/* <RegisterFormLeftSection /> */}
      <FormRightSection>
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
              required={true}
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
              type="date"
              name="dob"
              value={dob}
              label="Date of Birth"
              required={true}
              placeholder=""
              handleChange={handleOnChange}
            />

            <SelectSpecilization />
          </QualificationBox>
        </Form>
      </FormRightSection>
    </div>
  );
}

const FormRightSection = styled.section``;
const Form = styled.form``;
const QualificationBox = styled.div``;
const ShowQualificationBox = styled.div``;
