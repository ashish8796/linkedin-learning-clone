import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { RegisterInput } from './RegisterInput';
import { Footer } from '../../Routes/Footer';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #f3f2ef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Logo = styled.h2`
    color: #0a66c2;
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
`;


const useStyles = makeStyles(theme=>({
    logo: {
        fontSize: '2.7rem',
        position: 'relative',
        top: -4
    },
    text: {
        fontSize: '2rem',
        textAlign: 'center'
    }
}));

export default function Register () {

    const classes = useStyles();
    
    return (
        <Container>
            <Box>
                <Logo>
                    Linked
                    <LinkedInIcon className={classes.logo} />
                </Logo>
                <Typography className={classes.text}>Make the most of your professional life</Typography>
                <RegisterInput />
            </Box>
            <Footer />
        </Container>
    )
}
