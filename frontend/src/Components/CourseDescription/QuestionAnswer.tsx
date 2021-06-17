import React from 'react'
import styled from "styled-components";
import Test from '../QuestionNAnswer/Test';
export default function QuestionAnswer() {
    return (
        <Content>
            
        <Test />
            
        <SideBar>
            something
        </SideBar>
    </Content>
    )
}

const Content = styled.section`
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 5px;
    height:70rem;
`

const SideBar = styled.aside`
    border-left:0.2px solid black;
`