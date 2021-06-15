import React, { useState } from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { RegisterInput } from './RegisterInput';
import { Footer } from '../../Routes/Footer';
import { NameInput } from './NameInput';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/user/action';
import Axios from 'axios';

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

export interface IRegister {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
}

const initData: IRegister = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: ''
}

const axios  = Axios.create({
    baseURL: 'http://localhost:5000/'
})

export default function Register () {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [ user, setUser ] = useState<IRegister>(initData)
    const [ showName, setShowName ] = useState<boolean>(false);

    const handleShowName: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShowName(true);
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=> {
        const { name, value } = e.target;
        const payload: IRegister = {
            ...user,
            [name]: value
        };
        setUser(payload);
    };

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        dispatch(registerUser(user));
    }
    
    return (
        <Container>
            <Box>
                <Logo>
                    Linked
                    <LinkedInIcon className={classes.logo} />
                </Logo>
                <Typography className={classes.text}>Make the most of your professional life</Typography>
                {
                    !showName?
                    <RegisterInput handleShowName={handleShowName} handleChange={handleChange} />
                    :
                    <NameInput handleSubmit={handleSubmit} handleChange={handleChange} />
                }
            </Box>
            <Footer />
        </Container>
    )
}
