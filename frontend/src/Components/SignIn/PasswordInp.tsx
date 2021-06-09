import { useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Input, InputLabel, Btn } from './SignInInput';
import { makeStyles } from '@material-ui/core';

const PasswordBox = styled.div`
    position: relative;
`;

const ShowPass = styled.button`
    position: absolute;
    width: 4rem;
    background: none;
    outline: none;
    height: 1.5rem;
    color: #0a66c2;
    right: 10px;
    top: 10px;
    border-radius: 0.75rem;
    
    &:hover {
        background: #eaf4fe;

    }
`;

const ForgetPass = styled.p`
    color: #004b7c;
    text-align: center;
    font-weight: 600;
`;

const SigninMagic = styled.div`
    width: 100%;
    background: #f5f5f5;
    padding: 30px;
`;

const MagicBtn = styled.button`
    border: 1px solid #006097;
    background: none;
    color: #006097;
    width: 350px;
    height: 40px;
    font-weight: 600;
    margin-left: 8px;

    &:hover {
        background: #deeef5;
        border: 3px solid #006097;
    }
`;

const useStyles = makeStyles(theme=>({
    infoIcon: {
        position: 'absolute'
    },
    p: {
        fontSize: '14px',
        marginLeft: '30px'
    },
    text: {
        paddingLeft: '30px'
    },
}));

interface passwordProps {
    password: string;
    handleChange: any;
}

export const PasswordInp = ({password, handleChange}: passwordProps) => {

    const classes = useStyles();

    const [showPass, setShowPass] = useState<boolean>(false);

    const handleShowPass: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShowPass(prev => !prev);
    }
    
    return (
        <PasswordBox>
            <div className="form-floating mb-3">
                <Input
                    required
                    name="password"
                    className="form-control"
                    type={showPass? "text": "password"}
                    placeholder="Email"
                    onChange={handleChange} />
                <ShowPass onClick={handleShowPass}>{showPass? "Hide": "Show"}</ShowPass>
                <InputLabel>Use your LinkedIn Password</InputLabel>
            </div>
            <Btn 
                type="button"
                style={{borderRadius: '1.5rem'}}
                className="btn btn-primary"
                disabled={password.length < 1}>
                    Continue
            </Btn>
            <ForgetPass>Froget Password?</ForgetPass>
            <SigninMagic>
                <InfoOutlinedIcon className={classes.infoIcon} />
                <h6 className={classes.text}>Need help signing in?</h6>
                <p className={classes.p}>We'll email you a one-time magic link that will sign you instantly.</p>
                <MagicBtn>Send me a magic link</MagicBtn>
            </SigninMagic>
        </PasswordBox>
    )
}
