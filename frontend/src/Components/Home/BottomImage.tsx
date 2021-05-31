import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { TrialBtn, BuyBtn } from './Headline';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 670px;
    background:url("https://static-exp1.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59") repeat-x bottom/auto 100%;
    background-position: bottom;
    background-size: auto;
    margin-top: 20px;
`;

const useStyles = makeStyles(theme=>({
    contentBox: {
        position: 'relative',
        width: '71rem',
        margin: 'auto',
    },
    heading: {
        fontSize: '3.5rem',
        color: '#2977c9',
        lineHeight: '70px'
    },
    subHead: {
        fontSize: '1.2rem',
        lineHeight: '1.4',
        color: 'rgba(0,0,0,0.9)',
        marginTop: '20px'
    },    
    btnBox: {
        marginTop: '30px'
    }
}));

export const BottomImage = () => {
    
    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.contentBox}>
                <Typography className={classes.heading} variant="h4" >Learn from industry experts, and connect with a global network of experience</Typography>
                <Typography className={classes.subHead}>Courses for every step of your career. Instructors with real-world experience.</Typography>
                <Box className={classes.btnBox}>
                    <TrialBtn>Start my free month</TrialBtn>
                    <BuyBtn>Buy for my team</BuyBtn>
                </Box>
            </Box>
        </Container>
    )
}
