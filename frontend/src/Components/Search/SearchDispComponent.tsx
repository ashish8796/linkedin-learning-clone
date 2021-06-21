import React from 'react';
import styled from 'styled-components';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTeacher } from '../../store/teacher/actions';
import { State } from '../../store/tsTypes';
import { getIndividualUser } from '../../store/user/action';
import { getCourseById } from '../../store/course/actions';

interface ISearchDisp {
    _id: string;
    title: string;
    authorId: string;
    image: string;
}

export const SearchDispComponent = ({ _id, title, image }: ISearchDisp) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const courseData = useSelector((state: State)=> state.course.course);

    // const updated = courseData.course.updatedAt;

    // const date = new Date(updated);
    // const month = date.getMonth()+1;
    // const year = date.getFullYear();

    // const mon = convertToString(month);

    // const author = `${courseData.course.authorId.uniqueId.firstName} ${courseData.course.authorId.uniqueId.lastName}`

    useEffect(()=>{
        dispatch(getCourseById(_id));
    }, [])
    
    return (
        <Container>
            <ImageBox>
                <Image src={image} />
            </ImageBox>
            <DetailBox>
                <div>
                    <Typography className={classes.type}>COURSE</Typography>
                    <Typography variant="h6" className={classes.title}>{title}</Typography>
                    {/* <Typography className={classes.authorName}>By: {author} . {mon} {year}</Typography> */}
                </div>
                <ViewersBox>
                    <Typography className={classes.viewers}>40,496 viewers</Typography>
                    <SaveBox>
                        <button className={classes.saveBtn}>Save</button>
                    </SaveBox>
                </ViewersBox>
            </DetailBox>
        </Container>
    )
}

const Container = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 12rem;
    display: flex;
    borderTop: '1px solid #e0e0e0'
`;

const ImageBox = styled.div`
    width: 25%;
    height: 100%;
    border-radius: 5px
`;

const DetailBox = styled.div`
    height: 100%;
    width: 75%;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

const ViewersBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SaveBox = styled.div``;

const useStyles = makeStyles(theme => ({
    type: {
        fontSize: '12px'
    },
    title: {
        fontWeight: 500
    },
    authorName: {
        fontSize: '.9rem',
        color: '#6d6e68',
        fontWeight: 400
    },
    viewers: {
        fontSize: '13px',
        color: '#6d6e68',
        position: 'relative',
        top: '1rem'
    },
    saveBtn: {
        border: '1px solid #228cc7',
        outline: 'none',
        background: 'none',
        color: '#228cc7',
        padding: '.2rem .5rem',
        borderRadius: '3px'
    }
}));


function convertToString (mon: number) {
    switch(mon){
        case 1: {
            return 'Jan';
        }
        case 2: {
            return 'Feb';
        }
        case 3: {
            return 'Mar';
        }
        case 4: {
            return 'Apr';
        }
        case 5: {
            return 'May';
        }
        case 6: {
            return 'Jun';
        }
        case 7: {
            return 'Jul';
        }
        case 8: {
            return 'Aug';
        }
        case 9: {
            return 'Sep';
        }
        case 10: {
            return 'Oct';
        }
        case 11: {
            return 'Nov';
        }
        case 12: {
            return 'Dec';
        }
    }
}