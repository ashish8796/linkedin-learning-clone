import React from 'react';
import styled from 'styled-components';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTeacher } from '../../store/teacher/actions';
import { State } from '../../store/tsTypes';
import { getIndividualUser } from '../../store/user/action';

interface ISearchDisp {
    title: string;
    authorId: string;
    image: string;
}

export const SearchDispComponent = ({ title, authorId, image }: ISearchDisp) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const teacher: any= useSelector((state: State)=> state.teacher.teacher);
    const userData: any= useSelector((state: State)=> state.user.individualUser);

    const teacherData: any = teacher[0];
    
    const uniqueId: string = teacherData.uniqueId

    useEffect(()=>{
        dispatch(setTeacher(authorId));
        dispatch(getIndividualUser(uniqueId));
    }, [])
    
    return (
        <Container>
            <ImageBox>
                <Image src={image} />
            </ImageBox>
            <DetailBox>
                <Typography className={classes.type}>COURSE</Typography>
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                <Typography className={classes.authorName}>By: {`${userData.firstName} ${userData.lastName}`}</Typography>
            </DetailBox>
        </Container>
    )
}

const Container = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 12rem;
    display: flex;
    border-top: 1px solid #e1e1e1;
`;

const ImageBox = styled.div`
    border: 1px solid red;
    width: 30%;
    height: 100%;
`;

const DetailBox = styled.div`
    border: 1px solid blue;
    height: 100%;
    width: 70%;
    margin-left: 1.5rem;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const useStyles = makeStyles(theme => ({
    type: {
        fontSize: '12px'
    },
    title: {
        fontWeight: 500
    },
    authorName: {
        fontSize: '1rem'
    }
}));