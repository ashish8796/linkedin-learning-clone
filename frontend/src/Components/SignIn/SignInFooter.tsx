import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Container = styled.div`
    position: relative;
    min-height: 50px; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Details = styled.p`
    color: #666;
    font-size: .7rem;
    font-weight: 600;
    display: flex;
    alignItems: center;
    margin: 0 10px;

    &:hover {
        color: #0a66c2;
        cursor: pointer;
        text-decoration: underline;
    }
`;

const useStyles = makeStyles(theme=>({
    linkedIn: {
        display: 'flex',
        alignItems: 'center'
    },
    liText: {
        fontWeight: 600,
        fontSize: '0.8rem'
    },
    logo: {
        fontSize: '1rem'

    },
    copy: {
        marginLeft: '10px',
        fontSize: '0.8rem'
    },
    expIcon: {
        fontSize: '1rem',
        marginLeft: '2px'
    }
}));

export const SignInFooter = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.linkedIn}>
                <Typography className={classes.liText}>Linked</Typography>
                <LinkedInIcon className={classes.logo} />
                <p className={classes.copy}>© 2021</p>
            </Box>
            <Details>About</Details>
            <Details>Help</Details>
            <Details>Visit LinkedIn Learning</Details>
        </Container>
    )
}
