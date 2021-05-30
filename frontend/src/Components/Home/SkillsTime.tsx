import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: flex;
    width: 73rem;
    margin: 100px auto 150px;
`;

const Image = styled.img`
    widht: 280px;
    height: 280px;
    margin-bottom: 30px;
`;

const useStyles = makeStyles(theme=>({
    leftBox: {
        minWidth: '50%',
    },
    rightBox: {
        minWidth: '50%',
    }
}));

export const SkillsTime = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.leftBox}>
                <Image src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj" />
                <Typography variant="h3">Prove your skills</Typography>
                <Typography>Earn certificates toadd to your LinkedIn profile.</Typography>
            </Box>
            <Box className={classes.rightBox}>
                <Image src="https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv" />
                <Typography variant="h3">Learn on your time</Typography>
                <Typography>Watch bite-sized videos or in depth-courses.</Typography>
            </Box>
        </Container>
    )
}
