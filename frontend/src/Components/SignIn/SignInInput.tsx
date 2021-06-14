import styled from 'styled-components';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { EmailInp } from './EmailInp';
import { PasswordInp } from './PasswordInp';
import { ILogin } from './SignIn';

const Container = styled.div`
    position: relative;
    width:m 100%;
`;

export const Input = styled.input`
    border: 1px solid #000 !important;
    width: 100%;
    height: 3rem !important;
    font-size: .9rem;
    font-weight: 600;
    box-shadow: none !important;
    border-radius: 2px !important;
`;

export const Btn = styled.button`
    width: 100%;
    height: 3rem;
    outline: none;
    border: none;
    background: #006097;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none !important;
    margin-bottom: 1.5rem;
    cursor: pointer;
`;

export const InputLabel = styled.label`
    margin-top: -6px;
`;

interface signInInputProps {
    handleContinue: any;
    handleChange: any;
    handleSubmit: any;
    show: boolean;
    data: ILogin;
}

export const SignInInput = ({ handleContinue, show, handleChange, data, handleSubmit }: signInInputProps) => {

    return (
        <Container>
            {
                !show && <EmailInp 
                                {...data} 
                                handleChange={handleChange}
                                handleContinue={handleContinue} />
            }
            {
                show && <PasswordInp
                                {...data}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit} />
            }
        </Container>
    )
}
