import React from 'react';
import styled from 'styled-components';
import { Home } from '../Components/Home/Home';

const Container = styled.div`
    position: relative;
    margin-top: 70px;
    width: 100%;
`;

export const HomePage = () => {
    return (
        <Container>
            <Home />
        </Container>
    )
}
