import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { RegisterInput } from './RegisterInput';
import { Footer } from '../../Routes/Footer'
import Axios from 'axios';
import { useState } from 'react';

const axios : AxiosInstance = Axios.create({
    baseURL: 'http://localhost:5000/'
})

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

interface userData {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const initData: userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

interface Iconfig {
    url: string,
    method: string,
    data: userData
}

export default function Register () {

    const classes = useStyles();

    const [user, setUser] = useState<userData>(initData);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        const {name, value} = e.target
        const payload = {
            ...user,
            [name]: value
        }
        setUser(payload)
    }

    const registerUser = (userData: userData)=>{
        axios.post("/register", userData)
        .then((res: Response)=>{  
            console.log(res)
        })
    }
    
    return (
        <Container>
            <Box>
                <Logo>
                    Linked
                    <LinkedInIcon className={classes.logo} />
                </Logo>
                <Typography className={classes.text}>Make the most of your professional life</Typography>
                <RegisterInput handleChange={handleChange} />
            </Box>
            <Footer />
        </Container>
    )
}
