import React from "react";
import styled from "styled-components";
import CreateIcon from "../Common/CreateIcon/CreateIcon";
import RegisterForm from "./RegisterForm";

export default function InstructorRegister() {
  return (
    <InstructorRegisterBox>
      <Header>
        <Nav>
          <Logo>
            <h2>Linked</h2>
            <CreateIcon
              path={require("./../../assets/svgs/common/logo.svg").default}
            />
            <p>Learning</p>
          </Logo>
        </Nav>
      </Header>

      <FormSection>
        <RegisterForm />
      </FormSection>
    </InstructorRegisterBox>
  );
}

const InstructorRegisterBox = styled.div``;
const Header = styled.header``;
const Nav = styled.nav``;
const Logo = styled.div``;
const Icon = styled.div``;
const FormSection = styled.section``;
