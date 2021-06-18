import React from 'react';
import { Box, Divider, Card, makeStyles, CardContent, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/user/action';
import { State } from '../../store/tsTypes';
import { useHistory } from 'react-router-dom';
import { getTeacherByUniqueId } from '../../api/api';
import { SET_TEACHER } from '../../store/teacher/actionTypes';
import { AnyARecord } from 'dns';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
interface IDropdownProps {
    setShowMeOpt: any;
}

export default function Dropdown({ setShowMeOpt }: IDropdownProps) {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const data =useSelector((state:State)=>state.user.userDetails)

    const userDetails:any = useSelector((state: State)=> state.user.userDetails)
    const { flag } = useSelector((state: State) => state.user.userDetails);

    const history = useHistory()
    const handleLogout = ()=>{
        dispatch(logoutUser());
    }

    const handleShowMeOpt = ()=>{
        setShowMeOpt(false);
    }

    const handleTeacherProfile = async ()=>{
        const {data} = await getTeacherByUniqueId(userDetails._id)
        console.log(data)
        dispatch({
            type:SET_TEACHER,
            payload:data.teacher
        })
            history.push("/instructor")
    }

    return (
        <Container>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent} onMouseLeave={handleShowMeOpt}>
                    <Box className={classes.contentBox && classes.userDetails}>
                        <Box className={classes.imageBox}>
                            <AccountCircleIcon  style={{fontSize:"2.5em"}} />
                        </Box>
                        <Box className={classes.user} onClick={handleTeacherProfile} >
                            <Typography>{`${userDetails.firstName} ${userDetails.lastName}`}</Typography>
                            <Typography style={{fontSize:'0.9rem'}}>Personal Account</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box>
                        <Typography className={classes.contentBox} style={{color:'#000'}}>My Learning</Typography>
                        <Typography className={classes.content} >In Progress</Typography>
                        <Typography className={classes.content} >Saved</Typography>
                        <Typography className={classes.content} >Collections</Typography>
                        <Typography className={classes.content} >Learning History</Typography>
                        <Typography className={classes.content} >Skills</Typography>
                    </Box>
                    <Divider />
                    <Box>
                        {!flag && <Typography className={classes.content} onClick={()=>history.push("/instructor/new")} >Become an Instructor</Typography>}
                        <Typography className={classes.content} >Language</Typography>
                        <Typography className={classes.content} >Settings</Typography>
                        <Typography className={classes.content} >Go to LinkedIn Profile</Typography>
                        <Typography className={classes.content} >Buy for my team</Typography>
                        <Typography className={classes.content} >Help center</Typography>
                        <Typography className={classes.content} onClick={handleLogout} >Sign out</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 73rem;
    margin: auto;
    z-index: 99999999999999;
    top: -1rem;
`;

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        position: 'absolute',
        right: theme.spacing(7),
        zIndex: 999,
        color: '#6f6f6f',
        paddingBottom: theme.spacing(0)
    },
    cardContent: {
        padding: 0
    },
    contentBox: {
        padding: theme.spacing(1, 2),
    },
    content: {
        padding: theme.spacing(1, 2),
        fontSize: '0.9rem',
        lineHeight: '1rem',
        '&:hover': {
            color: '#000',
            background: '#eaecee',
            cursor: 'pointer'
        }
    },
    userDetails: {
        display: 'flex',
        padding: theme.spacing(2)
    },
    user: {
        marginLeft: theme.spacing(2)
    },
    imageBox: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        // fontSize:"2rem"
    }
}));