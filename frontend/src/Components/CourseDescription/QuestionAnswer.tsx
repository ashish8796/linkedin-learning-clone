import React from 'react'
import styled from "styled-components";
export default function QuestionAnswer() {
    return (
        <Content>
        <div>
            something
        </div>
        <SideBar>
            something
        </SideBar>
    </Content>
    )
}

const Content = styled.section`
    display: grid;
    grid-template-columns: 65% 35%;
    margin-top: 5px;
    height:70rem;
`

const SideBar = styled.aside`
    border-left:0.2px solid black;
`