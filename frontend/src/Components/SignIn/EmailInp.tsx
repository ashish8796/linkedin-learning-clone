import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, InputLabel, Btn } from './SignInInput';

const SigninLC = styled.p`
    text-align: center;
    color: #004b7c;
    font-weight: 600;
`;

const Join = styled.p`
    text-align: center;
`;

interface emailProps {
    handleChange: any;
    email: string;
    handleContinue: any;
}

export const EmailInp = ({handleChange, email, handleContinue}: emailProps) => {
    
    return (
        <div>
            <div className="form-floating mb-3">
                <Input
                    required
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange} />
                <InputLabel>Email</InputLabel>
            </div>
            <Btn 
                type="button" 
                className="btn btn-primary" 
                disabled={email.length < 1}
                onClick={handleContinue}>
                    Continue
            </Btn>
            <SigninLC>Sign in with your library card</SigninLC>
            <Join>
                New to LinkedIn? 
                <Link 
                    style={{textDecoration:'none', color:'#004b7c'}} 
                    to='/signup'>
                        Join now
                </Link>
            </Join>
        </div>
    )
}
