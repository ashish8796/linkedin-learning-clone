import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { TrialBtn, BuyBtn } from './Headline';

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const DriveTab = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    display: flex;
    margin-bottom: 20px;
`;

const Image = styled.img`
    height: 100%;
    margin-left: 96px;
`;

const Cont = styled.div`
    position: relative;
    width: 100%;
    height: 670px;
    background:url("https://static-exp1.licdn.com/sc/h/2vt8plqbv2l2pi6kxm89bqs59") repeat-x bottom/auto 100%;
    background-position: bottom;
    background-size: auto;
    margin-top: 160px;
`;

const Span = styled.span`
    font-weight: 600;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const useStyles = makeStyles(theme=>({
    driveContent: {
        position: 'relative',
        minWidth: '50%',
        height: '720px',
        background: '#faf9f7',
        display: 'flex'
    },
    contText: {
        position: 'absolute',
        top: '25%',
        width: '450px',
        right: '50px'
    },
    imageBox: {
        minWidth: '50%',
        height: '800px',
    },
    driveHead: {
        color: '#B24020',
        fontSize: '2.2rem',
        lineHeight: '50px',
        fontWeight: 600
    },
    driveText: {
        fontSize: '2.2rem',
        marginTop: '8px',
        fontWeight: 400
    },
    buyBtn: {
        marginTop: '25px'
    },
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
            <DriveTab>
                <Box className={classes.driveContent}>
                    <Box className={classes.contText}>
                        <Typography className={classes.driveHead}>Drive business impact</Typography>
                        <p className={classes.driveText}>Get access to courses for your <Span>business</Span>, <Span>higher education</Span>, or <Span>government</Span> team</p>
                        <BuyBtn className={classes.buyBtn}>Buy for my team</BuyBtn>
                    </Box>
                </Box>
                <Box className={classes.imageBox}>
                    <Image src="https://static-exp1.licdn.com/sc/h/e5e46mbehmrq92n30enduib0j" />
                </Box>
            </DriveTab>
            <Cont>
                <Box className={classes.contentBox}>
                    <Typography className={classes.heading} variant="h4" >Learn from industry experts, and connect with a global network of experience</Typography>
                    <Typography variant="subtitle2" className={classes.subHead}>Courses for every step of your career. Instructors with real-world experience.</Typography>
                    <Box className={classes.btnBox}>
                        <TrialBtn>Start my free month</TrialBtn>
                        <BuyBtn>Buy for my team</BuyBtn>
                    </Box>
                </Box>
            </Cont>
        </Container>
    )
}
