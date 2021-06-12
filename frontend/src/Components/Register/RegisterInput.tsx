import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 25rem;
    background: #fff;
    margin: auto;
    border-radius: 8px;
    padding: 10px 30px;
    margin-top: 20px;
`;

export const Inp = styled.input`
    border: 1px solid black;
    height: 32px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    padding: 0 10px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    margin-top: 20px;
    color: #666666;
`;

const Text = styled.p`
    font-size: 0.75rem;
    text-align: center;
    margin: 15px 0 15px 0;
`;

const Span = styled.span`
    color: #0a66c2;
`;

export const Btn = styled.button`
    position: relative;
    background: #0a66c2;
    width: 100%;
    height: 48px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 24px;
    border: none;
    outline: none;
    color: #fff;
    
    &:hover {
        background: #004182;
    }
`;

const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 20px 0;
`;

const DividerSpan = styled.div`
    border-bottom: 0.5px solid #696c6f;
    height: 7px;
    width: 42%;
`;

const Signin = styled.p`
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
`;

const useStyles = makeStyles(theme=>({
    google: {
        color: '#0a66c2 !important',
        background: '#fff !important',
        border: '1px solid #0a66c2 !important',

        '&:hover': {
            background: '#ecf4fe !important',
            border: '2px solid #0a66c2 !important'
        }
    },
    logo: {
        position: 'relative',
        width: '1.2rem',
        height: '1.2rem',
        left: '-10px',
        top: '-2px'
    },
    link: {
        marginLeft: '5px',
        textDecoration: 'none',
        color: '#0a66c2',

        '&:hover': {
            textDecoration: 'underline'
        }
    }
}));

interface registerInpProps {
    handleChange: any;
    handleShowName: any;
}

export const RegisterInput = ({handleChange, handleShowName}: registerInpProps) => {

    const classes = useStyles();
    
    return (
        <Container>
            <Label>
                Email or phone number
                <Inp type="email" onChange={handleChange} name="emailId" />
            </Label>
            <Label>
                Password (6 or more characters)
                <Inp type="password" onChange={handleChange} name="password" />
            </Label>
            <Text>
                By clicking Agree & Join, you agree to the LinkedIn <Span>User Agreement, Privacy Policy,</Span> and <Span>Cookie Policy.</Span>
            </Text>
            <Btn onClick={handleShowName} >Agree & Join</Btn>
            <Divider>
                <DividerSpan></DividerSpan>
                or
                <DividerSpan />
            </Divider>
            <Btn className={classes.google}>
                <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                Join with Google
            </Btn>
            <Signin>
                Already on Linkedin? 
                <Link className={classes.link} to='/learning-login'>
                    Sign in
                </Link>
            </Signin>
        </Container>
    )
}
