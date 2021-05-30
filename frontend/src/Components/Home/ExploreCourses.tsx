import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    margin-top: 70px;
`;
    
const Cont = styled.div`
    background: #faf9f7;
    width: 100%;
    height: 200px;
    position: absolute;
    top: -205px;
`;

const Btn = styled.button`
    margin: 0 20px 0 10px;
    font-size: 1rem;
    line-height: 1.5;
    padding: 8px;
    background: none;
    border: none;
    outline: none;
    font-weight: 600;
    color: #646463;

    &:hover {
        cursor: pointer;
        border-bottom: 2px solid #646463
        ;
    }
`;

const useStyles = makeStyles(theme=>({
    contentBox: {
        width: '72rem',
        margin: 'auto',
        height: '100%',
        paddingTop: '70px',
        borderBottom: '2px solid #dcdbd9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    heads: {
    }
}));

export const ExploreCourses = () => {

    const classes = useStyles();
    
    return (
        <Container>
            <Cont>
                <Box className={classes.contentBox}>
                    <Typography variant="h3">Explore courses</Typography>
                    <Box className={classes.heads}>
                        <Btn>All Courses</Btn>
                        <Btn>Business</Btn>
                        <Btn>Technology</Btn>
                        <Btn>Creative</Btn>
                    </Box>
                </Box>
            </Cont>
        </Container>
    )
}