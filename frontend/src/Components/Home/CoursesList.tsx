import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    background: #f3f6f8;
    padding-bottom: 30px;
`;

const Course = styled.p`
    color: #666;
    font-size: 0.8rem;
    line-height: 24px;
    font-weight: 600;

    &:hover {
        color: #0a66c2;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const useStyles = makeStyles((theme) => ({
    cont: {
        position: 'relative',
        width: '72rem',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
    },
    courses: {
        width: '23%',
        marginTop: '20px'
    },
    otherCourses: {
        marginTop: '70px'
    },
    head: {
        fontWeight: 600,
        fontSize: '1rem',
        color: 'rgba(0,0,0,0.9)'
    },
    seeAll: {
        color: '#0a66c2',
        marginTop: '10px',
        fontWeight: 600,

        '&:hover' : {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }
  }));

export const CoursesList = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.cont}>
                <Box className={classes.courses}>
                    <Typography className={classes.head}>Best-selling Tech Courses</Typography>
                    <Course>Agile Foundations</Course>
                    <Course>SPSS Statistics Essential Traning</Course>
                    <Course>Learning R</Course>
                    <Course>DevOps Foundations</Course>
                    <Course>Python Essential Training</Course>
                    <Course>Statistics Foundations: 1</Course>
                    <Course>Programming Foundations: Fundamentals</Course>
                    <Course>Learning Linux Command Line</Course>
                    <Course>SQL Essential Training</Course>
                    <Course>Learning Data Analytics</Course>
                </Box>
                <Box className={classes.courses}>
                    <Typography className={classes.head}>Best-selling Business Courses</Typography>
                    <Course>Learning Excel 2019</Course>
                    <Course>WordPress 5 Essential Training</Course>
                    <Course>Quickbooks Online Essential Training (2019)</Course>
                    <Course>Excel 2016 Essential Training</Course>
                    <Course>Human Resources Foundations</Course>
                    <Course>Online Marketing Foundations (2018)</Course>
                    <Course>Project Management Foundations</Course>
                    <Course>Excel Essential Training (Office 365/Microsoft 365)</Course>
                    <Course>Excel 2019 Essential Training</Course>
                </Box>
                <Box className={classes.courses}>
                    <Typography className={classes.head}>Best-selling Leadership Courses</Typography>
                    <Course>Leading Without Formal Authority (2017)</Course>
                    <Course>Strategic Thinking</Course>
                    <Course>Time Management Fundamentals</Course>
                    <Course>Expert Tips for Answering Common Interview Questions</Course>
                    <Course>Critical Thinking</Course>
                    <Course>Proven Skills for Managing Your Time</Course>
                    <Course>Communicating with Confidence</Course>
                    <Course>Learning Personal Branding</Course>
                    <Course>The Six Morning Habits of High Performers</Course>
                </Box>
            </Box>
            <Box className={classes.cont}>
                <Box className={`${classes.courses} ${classes.otherCourses}`} >
                    <Typography className={classes.head}>Explore Business Topics</Typography>
                    <Course>Business Analysis and Strategy</Course>
                    <Course>Business Software and Tools</Course>
                    <Course>Career Development</Course>
                    <Course>Customer Service</Course>
                    <Course>Finance and Accounting</Course>
                    <Course>Human Resources</Course>
                    <Course>Leadership and Management</Course>
                    <Course>Marketing</Course>
                    <Course>Professional Development</Course>
                    <Course>Projhect Management</Course>
                    <Course>Sales</Course>
                    <Course>Small Business and Entrepreneurship</Course>
                    <Course>Training and Education</Course>
                    <Typography className={classes.seeAll}>See all</Typography>
                </Box>
                <Box className={`${classes.courses} ${classes.otherCourses}`}>
                    <Typography className={classes.head}>Explore Creative Topics</Typography>
                    <Course>AEC</Course>
                    <Course>Animation and Illustration</Course>
                    <Course>Audio and Music</Course>
                    <Course>Graphic Design</Course>
                    <Course>Motion Graphics and VFX</Course>
                    <Course>Photography</Course>
                    <Course>Product and Manufacturing</Course>
                    <Course>User Experience</Course>
                    <Course>Video</Course>
                    <Course>visualization and Real-Time</Course>
                    <Course>Web Design</Course>
                    <Typography className={classes.seeAll}>See all</Typography>
                </Box>
                <Box className={`${classes.courses} ${classes.otherCourses}`}>
                    <Typography className={classes.head}>Explore Technology Topics</Typography>
                    <Course>Cloud Computing</Course>
                    <Course>Data Science</Course>
                    <Course>Database Management</Course>
                    <Course>DevOps</Course>
                    <Course>IT Help Desk</Course>
                    <Course>Mobile Development</Course>
                    <Course>Network and System Adminidtrattion</Course>
                    <Course>Security</Course>
                    <Course>Software Development</Course>
                    <Course>Web Development</Course>
                    <Typography className={classes.seeAll}>See all</Typography>
                </Box>
            </Box>
        </Container>
    )
}
