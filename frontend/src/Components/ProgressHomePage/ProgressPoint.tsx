import { BottomNavigation, BottomNavigationAction, Box, LinearProgress, Typography } from '@material-ui/core';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import React from 'react'
import styled from 'styled-components';

const Container= styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:73rem;
    border-bottom: 0.8px solid black ;
    /* border: 2px solid bla    ck; */
    place-content: center;
    margin: auto;
    grid-gap: 10px;
`
    const Title= styled.div`
        border-bottom: 0.8px solid black;
        padding-bottom: 10px;
        h6{
            /* padding: 0%; */
            margin: 0.5%;
        }
    `;

const WeeklyGoal = styled.div`
    display: grid;
    grid-template-columns: 25% 65% 10%;
    img{
        border-radius: 50%;
        height:150px;
        padding: 20px;
    }
    span{
        /* padding: 5%; */
        line-height: 2.5em;
    }
`

const SavedCourse = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-gap: 10px;
`

const Course = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    padding-top: 2%;
    padding-bottom: 2%;
`

const CourseDetails = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
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
    }
    span{
        padding:0%;
    }
    
`


export default function ProgressPoint(props:CircularProgressProps & {value:number , size:number}) {

    const lastWeek = `34`+"minutes"
    const color = "#0073b1";
    return (
        <section style={{width:"100%", margin:"auto", marginTop:"100px"}}> 
            <Container>
                <div>
                <Title>
                    <h6>
                         Weekly goal
                        </h6>
                </Title>
                    <WeeklyGoal>
                        <div style={{padding:"2rem"}} >
                        < CircularProgress variant="determinate"  {...props}/>
                        <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="caption" component="div" color="textSecondary">{`${props.value}%`}</Typography>
                            </Box>
                        </div>
                        <div>
                            <span style={{opacity:"0.8"}}>Jun 13 to Jun 19</span>
                            <br />
                            <span style={{fontWeight:450}}>You’ve got this! Start learning to reach your goal.</span>
                            <br />
                            <span style={{opacity:"0.8"}}>Last week : {lastWeek}</span>
                        </div>
                        <span style={{color:"#0073b1" , fontWeight:500}}>Editgoal</span>
                    </WeeklyGoal>
                </div>
                <div>
                    <Title>
                        <div style={{height:"20px" , padding:"0" , margin:"0" , borderBottom:"0.8px solid black"}}>

                        <BottomNavigation
                            showLabels
                            >
                            <span style={{paddingRight:"10%"}}>Inprogress</span>
                            
                            <span style={{paddingRight:"10%"}}>Saved</span>
                        </BottomNavigation>
                        </div>
                    </Title>
                    <SavedCourse>
                        <div>
                            <Course>
                                <img src="https://via.placeholder.com/120x75" alt="" />
                                <CourseDetails>
                                    <h5>TITLE</h5>
                                    <p>COURSE</p>
                                    {/* <span>Progress</span> */}
                                    <span><LinearProgress variant="determinate" color={"primary"} value={15} /></span>
                                </CourseDetails>
                            </Course>
                            <Course>
                                <img src="https://via.placeholder.com/120x75" alt="" />
                                <CourseDetails>
                                    <h5>TITLE</h5>
                                    <p>COURSE</p>
                                    <span><LinearProgress variant="determinate" value={10} /></span>
                                </CourseDetails>
                            </Course>
                        </div>
                        <div>
                            <span  style={{color:"#0073b1" , fontWeight:500}}>Show all</span>
                        </div>
                    </SavedCourse>
                </div>
            </Container>
        </section>
    )
}
