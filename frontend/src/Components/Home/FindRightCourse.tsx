import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Container = styled.div`
    position: relative;
    width: 73rem;
    display: flex;
    margin: 100px auto;
`;

const Span = styled.span`
    font-weight: 600;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Btn = styled.button`
    border: none;
    outline: none;
    height: 50px;
    padding: 5px 20px;
    border-radius: 25px;
    font-size: 1.2rem;
    margin: 5px;
    font-weight: 600;
    color: #5e666e;
    line-height: 1.5;

    &:hover {
        background: #cccccc;
        cursor: pointer;
    }
`;

const ShowBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1rem;
    margin-top: 10px;
`;

const useStyles = makeStyles(theme=>({
    descriptionBox: {
        minWidth: '35%',
        maxWidth: "35%"
    },
    topicsBox: {
        minWidth: '55%',
        maxWidth: '55%',
        paddingLeft: '50px'
    },
    popHead: {
        fontSize: '1rem',
        fontWeight: 600,
        color: 'rgba(0,0,0,0.6)',
        lineHeight: '20px',
        marginLeft: theme.spacing(2)
    }
}));

export const FindRightCourse = () => {

    const classes = useStyles();

    const [show, setShow] = useState<boolean>(false);
    
    return (
        <Container>
            <Box className={classes.descriptionBox}>
                <Typography variant="h3">Find the right course for you</Typography>
                <Typography variant="h6">Choose from over <Span>16,700 courses</Span> and <Span>Learning Paths</Span>, dozens added each week.</Typography>
            </Box>
            <Box className={classes.topicsBox}>
                <Typography>POPULAR TOPICS</Typography>
                <Btn>Personal Effectiveness</Btn>
                <Btn>Personal Branding</Btn>
                <Btn>NASBA Continuing Professional Education (CPE)</Btn>
                <Btn>Job Searching</Btn>
                <Btn>Career Management</Btn>
                <Btn>Spreadsheets</Btn>
                <Btn>Data Analysis</Btn>
                <Btn>Business Intelligence</Btn>
                {
                    show &&
                    <div>
                        <Btn>Project Management Institute (PMI)®</Btn>
                        <Btn>Leadership Skills</Btn>
                        <Btn>Management Skills</Btn>
                        <Btn>Communication</Btn>
                        <Btn>Entrepreneurship</Btn>
                        <Btn>Terms and Collaboration</Btn>
                        <Btn>Speaking</Btn>
                    </div>
                }
                <ShowBtn onClick={()=> setShow(!show)}>
                    Show {show? `less` : "more"}
                    {
                        !show? <ExpandMoreIcon /> : <ExpandLessIcon />
                    }
                </ShowBtn>
            </Box>
        </Container>
    )
}
