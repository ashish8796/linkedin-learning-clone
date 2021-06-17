import React from 'react'
import styled from "styled-components";

export default function NoteBook() {
    return (
        <Content>
        <div style={{display:"grid" , gridTemplateRows:"10rem 5rem"}}>
            <textarea style={{width:"80%" , margin:"auto", height:"10rem" }} placeholder="Type your note here to save for the later...">
            
            </textarea>
            <div style={{display:"flex",width:"80%", margin:"auto" , justifyContent:"space-around"}}>
                <span>0 Notes taken</span>
                <span>Enter To Save</span>
            </div>
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
    padding:15px
`