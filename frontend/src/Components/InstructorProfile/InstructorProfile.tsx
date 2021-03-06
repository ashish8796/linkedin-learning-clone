import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/tsTypes";

export default function InstructorProfile() {
  const { teacher } = useSelector((state: State) => state.teacher);
  const { userDetails } = useSelector((state: State) => state.user);

  const { firstName, lastName } = userDetails;
  const {
    qualification,
    specializations,
    description,
    linkedInProfile,
    image,
  } = teacher;

  useEffect(() => {}, []);

  return (
    <ProfileContainer>
      <div>
        <UpperBox
          imgPath={
            require("./../../assets/images/instructor/background-1.jpeg")
              .default
          }
        ></UpperBox>

        <LowerBox>
          <div>
            <ProfilePicBox>
              <img
                src={image || "https://via.placeholder.com/130"}
                alt={firstName}
              />
            </ProfilePicBox>

            <InstructorDetailsBox>
              <div>
                <Name>{`${firstName} ${lastName}`} </Name>
                <QualificationBox>
                  {qualification.length > 0 && qualification.join(", ")}
                </QualificationBox>
              </div>

              <div>
                <LinkedInLink href={linkedInProfile} target="_blank">
                  View profile on LinkedIn
                </LinkedInLink>
              </div>
            </InstructorDetailsBox>

            <DescriptionBox>{description}</DescriptionBox>
          </div>
        </LowerBox>
      </div>
    </ProfileContainer>
  );
}

interface UpperBoxProps {
  imgPath: string;
}

const ProfileContainer = styled.div`
  width: 75%;
  margin: auto;
  padding: 2rem 0;

  & > div {
    padding-bottom: 3rem;
    background-color: #fff;

    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);
  }
`;

const UpperBox = styled.div`
  height: 7.5rem;

  background-image: url(${({ imgPath }: UpperBoxProps) => imgPath});
`;

const LowerBox = styled.div`
  border-top: 1px solid #80808000;

  & > div {
    background-color: none;
    padding: 0 20px;

    margin-top: -5.5rem;
  }
`;

const ProfilePicBox = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border-radius: 50%;
  border: 2px solid #fff;
  width: 130px;
  height: 130px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 2px 3px rgb(0 0 0 / 20%);
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const InstructorDetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 17px;
  margin: 10px 0 0 15px;
`;

const QualificationBox = styled.p`
  color: #4d4d4d;
  line-height: 26px;
`;

const LinkedInLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #0073b1;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #0073b1;
  }
`;

const DescriptionBox = styled.div``;
