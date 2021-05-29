import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const useStyles = makeStyles(theme=>({

}));


export const Home = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Box>
                <Typography variant="h3" >Keep learning in the moments that matter</Typography>
                <Typography>Courses for every step of your career. Instructors with real-world experience</Typography>
            </Box>
            <Box>
                <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="Welcome to our professional commmunity" />
            </Box>
        </Container>
    )
}
