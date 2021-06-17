import React from 'react'
import styled from 'styled-components'
import PeopleIcon from '@material-ui/icons/People';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Icon from '@material-ui/core/Icon';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import { Typography ,LinearProgress } from '@material-ui/core';
export default function OverView() {
    return (
        <Content>
        {/* <div>
            something
        </div> */}
        <div>

        <InstructorNRelatedToCourse >
            < SubInstructorNRelatedToCourse style={{borderRight:"0.8px solid black"}}>
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
            < SubInstructorNRelatedToCourse style={{marginLeft:"10px"}}>
            <h6>RELATED TO THIS COURSE</h6>
            <MainList>
                    <ListItem>
                        <Icon style={{marginTop:"-7px" , height:"1.2em"}}><PeopleIcon/></Icon>
                        <p style={{fontWeight:500}}>Learning Group</p>
                        <p style={{color:"#0073b1", fontWeight:500}}>Show all</p>
                    </ListItem>
                    <ListItem>
                            <Icon style={{marginTop:"-7px" , height:"1.2em"}}><FolderOpenIcon /></Icon>
                            <p style={{fontWeight:500}}>Exercise Files</p>
                            <p style={{color:"#0073b1", fontWeight:500}}>Show all</p>
                    </ListItem>
                    <ListItem>
                            <Icon style={{marginTop:"-7px" , height:"1.2em"}}><CallToActionIcon /></Icon>
                            <p style={{fontWeight:500}}>Certificates</p>
                            <p style={{color:"#0073b1", fontWeight:500}}>Show all</p>
                    
                    </ListItem>
            </MainList>
            </SubInstructorNRelatedToCourse>
        </InstructorNRelatedToCourse>
        <CourseDetails>
                <h3>Course Details</h3>           
                <div>
                    <span>4hr 32min</span>
                    <span>Intermediate</span>
                    <span>12/02/2021</span>
                </div>
                <span>Stars</span>
                <Typography>
                Excelling in an ever-changing software development world requires true "full stack" experience. Knowledge of nonrelational databases in particular adds exciting new capabilities and features that make everyday development easier, more streamlined, and vastly more scalable. This course provides an introduction to using MongoDB, one of the most popular nonrelational databases. Discover how to create documents to store data, organize documents in collections, and write queries to read, update, and delete documents. Instructor Justin Jenkins also shows how to properly index data to increase performance in MongoDB, and then shows how MongoDB can be integrated with applications written in Python, Node.js, and PHP. In the final chapter, he covers basic server administration, including replication, sharding, security, and backups. Make sure to practice your newfound MongoDB skills using the challenge and solution sets issued along the way.
                </Typography>
        </CourseDetails>
        </div>

        <SideBar>
            <Typography variant="h6">
                Related Course
            </Typography>
            {/* <div> */}
                            <Course>
                                <img src="https://via.placeholder.com/120x75" alt="" />
                                <CourseDetails2>
                                    <p>COURSE</p>
                                    <Typography variant="h6">TITLE</Typography>
                                    <Typography variant="h5"> {"10,000"} Learns</Typography>
                                    {/* <span>Progress</span> */}
                                    {/* <span><LinearProgress variant="determinate" color={"primary"} value={15} /></span> */}
                                </CourseDetails2>
                            </Course>
                            <Course>
                                <img src="https://via.placeholder.com/120x75" alt="" />
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
    grid-template-columns: 65% 35%;

    margin-top: 5px;
    height:70rem;
`

const SideBar = styled.aside`
    border-left:0.2px solid black;
    padding:15px;
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
    height:10em;
    /* padding-left: 2px; */
    /* padding-right: 2px; */
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
    grid-template-columns:20% 80%;
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
    /* border-right: 0.7px solid grey; */
`

const MainList = styled.div`
    display: grid;
    grid-template-rows:1fr 1fr 1fr ;
    grid-row-gap: 2px;
`

const ListItem = styled.div`
    display: grid;
    grid-template-columns: 30px 1.2fr 1fr;
    grid-column-gap: 5px;
    place-content: center;
    /* Icon{
        width: 100px;
    } */
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
            grid-template-columns: 42px 42px 42px;
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
