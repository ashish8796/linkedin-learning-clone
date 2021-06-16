import React from 'react'
import styled from 'styled-components'

export default function OverView() {
    return (
        <Content>
        {/* <div>
            something
        </div> */}
        <InstructorNRelatedToCourse >
            < SubInstructorNRelatedToCourse>
            <h6>INSTRUCTOR</h6>
            <AboutTeacher >
                <img src="https://via.placeholder.com/168x160" alt="" />
                <div>
                    <span style={{fontWeight:500 , fontSize:"18px"}}>Teacher Name</span>
                    <br />
                    <span>Teacher Details</span>
                    <p>
                        <span>view on Linkedin</span>
                        <span>Follow on Linkedin</span>
                    </p>
                </div>
            </AboutTeacher>
            </SubInstructorNRelatedToCourse>
            < SubInstructorNRelatedToCourse>
            <h6>RELATED TO THIS COURSE</h6>
            </SubInstructorNRelatedToCourse>
        </InstructorNRelatedToCourse>
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

const InstructorNRelatedToCourse = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    h6{
        opacity: 0.8;
        font-size: 15px;
    }
`


const SubInstructorNRelatedToCourse =styled.div`
    display: grid;
    grid-template-rows: 20px auto;
    img{
        width:50px;
        margin: 10% auto;
        padding: auto;
        border-radius: 50%;
    }
    
`
const AboutTeacher = styled.div`
margin-top:10px;
    display: grid;
    grid-template-columns:30% 70%;
    height: 200px;
    p{
        color: #0073b1;
        font-size: 15px;
        display: flex;
        width: auto;
        line-height: 1em;
        /* height: 90p  x; */
        span{
            width:100%
        }
    }
    border-right: 0.7px solid grey;
`