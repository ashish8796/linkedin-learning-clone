import React from 'react';
import { Container, Inp, Label, Btn } from './RegisterInput';

interface nameInputProps {
    handleChange: any;
    handleSubmit: any;
}

export const NameInput = ({handleChange, handleSubmit}: nameInputProps) => {
    return (
        <Container>
            <Label>
                First Name
                <Inp type="text" name="firstName" onChange={handleChange} />
            </Label>
            <Label>
                Last Name
                <Inp type="text" name="lastName" onChange={handleChange} />
            </Label>
            <Btn style={{margin:'30px 0 20px'}} onClick={handleSubmit} >Continue</Btn>
        </Container>
    )
}