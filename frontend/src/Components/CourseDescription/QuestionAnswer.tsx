import { Typography } from '@material-ui/core';
import React from 'react'
import styled from "styled-components";
import Test from '../QuestionNAnswer/Test';
export default function QuestionAnswer({id}:any) {
    return (
        <Content>
            
        <Test id={id}/>
            
        <SideBar>
        <Typography variant="h6">
                Related Course
            </Typography>
            {/* <div> */}
                            <Course>
                                <img  src="https://linkden-learning.s3.ap-south-1.amazonaws.com/course-thumbnails//1243db26-d136-4f54-bac9-c467c6ead24d_" alt="" />
                                <CourseDetails2>
                                    <p>COURSE</p>
                                    <Typography variant="h6">Figure Drawing</Typography>
                                    <Typography variant="h5"> {"10,000"} Learns</Typography>
                                    {/* <span>Progress</span> */}
                                    {/* <span><LinearProgress variant="determinate" color={"primary"} value={15} /></span> */}
                                </CourseDetails2>
                            </Course>
                            <Course>
                                <img src="https://linkden-learning.s3.ap-south-1.amazonaws.com/course-thumbnails//f855d5f9-372f-4b13-9ce1-32684f2db4a0_" alt="" />
                                <CourseDetails2>
                                    <p style={{margin:"0px"}}>COURSE</p>
                                    <Typography variant="h6">TITLE</Typography>
                                    <Typography variant="h5"> {"10,000"} Learns</Typography>

                                    {/* <span><LinearProgress variant="determinate" value={10} /></span> */}
                                </CourseDetails2>
                            </Course>
                        {/* </div> */}
                        <div>
                            <span  style={{color:"#0073b1" , fontWeight:500}}>Show all</span>
                        </div>
        </SideBar>
    </Content>
    )
}

const Content = styled.section`
    display: grid;
    width: 50rem;
    margin: auto;
    margin-top: 5px;
    height:70rem;
`

const SideBar = styled.aside`
    border-left:0.2px solid black;
    padding:15px
`


const CourseDetails = styled.div`
        display: grid;
        margin-top: 20px;
        grid-template-rows: 50px 35px 25px auto;
        height: auto;
        h3{
            font-size: 1.5em;
            align-items: flex-start;
        }
        div{
            display:grid;
            /* flex-basis: 20%; */
            grid-template-columns: 80px 102px 102px;
            grid-column-gap: 10px;
            span{
                margin: 0%;
                padding: 0%;
            }
        }

`

const Course = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    padding-top: 2%;
    padding-bottom: 2%;
    img{
        width:7rem
    }
`

const CourseDetails2 = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr 2rem;
    height: 50px;
    line-height: 0.5em;
    font-size: small;
    /* padding: ; */
    h5{
        font-size: small;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    p{
        padding: 0%;
        margin: 0%;
    }
    span{
        padding:0%;
    }
    
`
