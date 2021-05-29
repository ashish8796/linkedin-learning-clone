import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    padding: 0 50px 0 100px;
    font-family: sans-serif;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const TrialBtn = styled.button`
    background: #006097;
    color: #fff;
    height: 56px;
    border-radius: 28px;
    padding: 8px 20px;
    font-size: 1.3rem;
    border: none;
    outline: none;
    margin-right: 10px;

    &:hover {
        background: #004182;
        cursor: pointer;
    }
`;

const BuyBtn = styled.button`
    background: none;
    height: 56px;
    color: #666666;
    border-radius: 28px;
    padding: 8px 20px;
    font-size: 1.3rem;
    border: 2px solid #979797;
    outline: none;
    margin-right: 10px;

    &:hover {
        background: #cccccc;
        cursor: pointer;
    }
`;

const useStyles = makeStyles(theme=>({
    info: {
        position: 'relative',
        padding: theme.spacing(9, 0, 0, 10),
        width: '55%'
    },
    heading: {
        fontSize: '3.6rem',
        color: '#2977c9',
        lineHeight: '70px'
    },
    subHead: {
        fontSize: '1.2rem',
        lineHeight: '1.4',
        color: 'rgba(0,0,0,0.9)',
        marginTop: '10px'
    },
    imageBox: {
        position: 'relative',
        minWidth: '700px',
        width: '900px',
        height: '670px',
    },
    btnBox: {
        marginTop: '20px'
    }
}));

export const Headline = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.info}>
                <Typography className={classes.heading} variant="h3" >Keep learning in the moments that matter</Typography>
                <Typography className={classes.subHead}>Courses for every step of your career. Instructors with real-world experience.</Typography>
                <Box className={classes.btnBox}>
                    <TrialBtn>Start my free month</TrialBtn>
                    <BuyBtn>Buy for my team</BuyBtn>
                </Box>
            </Box>
            <Box className={classes.imageBox}>
                <Image src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="Welcome to our professional commmunity" />
            </Box>
        </Container>
    )
}
