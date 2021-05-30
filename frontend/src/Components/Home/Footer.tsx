import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    background: #faf9f7;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Body = styled.div`
    width: 72rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const Tabs = styled.p`
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

const Logo = styled.img`
    width: 23px;
    height: 23px;
`;

const useStyles = makeStyles(theme=>({
    tabs: {
        width: '17.5%',
        maxWidth: '210px'
    },
    logoBox: {
        width: '30%',
        display: 'flex'
    },
    tabHead: {
        fontWeight: 600,
        fontSize: '0.9rem',
        color: 'rgba(0,0,0,0.9)'
    },
    title: {
        color: '#0a66c2',
        fontWeight: 600,
        fontSize: '1.4rem',
        position: 'relative',
        top: '-5px',
        marginRight: '2px'
    }
}));

export const Footer = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Body>
                <Box className={classes.logoBox}>
                    <Typography className={classes.title}>Linked</Typography>
                    <Logo src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1622137765~hmac=ba6f199a1f7f6a4d7b381b5f6be8e09d" />
                </Box>
                <Box className={classes.tabs}>
                    <Typography className={classes.tabHead}>General</Typography>
                    <Tabs>Sign Up</Tabs>
                    <Tabs>Help Center</Tabs>
                    <Tabs>About</Tabs>
                    <Tabs>Press</Tabs>
                    <Tabs>Blog</Tabs>
                    <Tabs>Careers</Tabs>
                    <Tabs>Developers</Tabs>
                </Box>
                <Box className={classes.tabs}>
                    <Typography className={classes.tabHead}>Browse linkedIn</Typography>
                    <Tabs>Learning</Tabs>
                    <Tabs>Jobs</Tabs>
                    <Tabs>Salary</Tabs>
                    <Tabs>Mobile</Tabs>
                    <Tabs>Services</Tabs>
                </Box>
                <Box className={classes.tabs}>
                    <Typography className={classes.tabHead}>Business Solutions</Typography>
                    <Tabs>Talent</Tabs>
                    <Tabs>Marketing</Tabs>
                    <Tabs>Sales</Tabs>
                    <Tabs>Learning</Tabs>
                </Box>
                <Box className={classes.tabs}>
                    <Typography className={classes.tabHead}>Directories</Typography>
                    <Tabs>Members</Tabs>
                    <Tabs>Jobs</Tabs>
                    <Tabs>Companies</Tabs>
                    <Tabs>Salaries</Tabs>
                    <Tabs>Featured</Tabs>
                    <Tabs>Learning</Tabs>
                    <Tabs>Schools</Tabs>
                    <Tabs>News</Tabs>
                    <Tabs>News Letters</Tabs>
                    <Tabs>Services</Tabs>
                    <Tabs>Interview Prep</Tabs>
                </Box>
            </Body>
        </Container>
    )
}
