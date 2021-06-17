import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
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
    image: string;
    type: string;
    title: string;
    viewers: string;
    _id:string;
}

export const SingleCourse = ({image, type, title, viewers,_id}: singleCourseProps) => {
    
    const classes = useStyles();
    
    const history = useHistory();

    const routeHandle = () =>{
        history.push(`/learning/${_id}`)
    }
    return (
        
        <Container onClick={routeHandle}>
            <Box className={classes.imageBox}>
                <Image src={image} />
            </Box>
            <Box className= {classes.contentBox}>
                <Typography className={classes.course}>COURSE</Typography>
                <Typography className={classes.heading} variant='subtitle1' component="h3">{title}</Typography>
                <Typography className={classes.viewers}>{viewers} viewers</Typography>
            </Box>
        </Container>
    )
}
