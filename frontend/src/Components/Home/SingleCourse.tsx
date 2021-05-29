import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    min-width: 228px;
    max-width: 228px;
    min-height: 240px;
    padding-bottom: 10px;
    margin: 0 20px 0 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const useStyles = makeStyles(theme=> ({
    imageBox: {
        position: 'relative',
        width: '100%',
        height: '134px',
        lineHeight: '1'
    },
    contentBox: {
        position: 'relative',
        width: '100%',
        marginTop: '10px'
    },
    course: {
        fontSize: '13px',
        color: '#8c8c8c',
        fontWeight: 600,
        marginBottom: '3px'
    },
    heading: {
        fontWeight: 600,
        lineHeight: '1.33',
        marginBottom: '3px',

        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    viewers: {
        fontSize: '15px'
    }
}));

export interface singleCourseProps {
    imgUrl: string;
    type: string;
    courseName: string;
    viewers: string;
}

export const SingleCourse = ({imgUrl, type, courseName, viewers}: singleCourseProps) => {
    
    const classes = useStyles();
    
    return (
        <Container>
            <Box className={classes.imageBox}>
                <Image src={imgUrl} />
            </Box>
            <Box className= {classes.contentBox}>
                <Typography className={classes.course}>{type}</Typography>
                <Typography className={classes.heading} variant='subtitle1' component="h3">{courseName}</Typography>
                <Typography className={classes.viewers}>{viewers} viewers</Typography>
            </Box>
        </Container>
    )
}
