import React from 'react';
import styled from 'styled-components';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';

const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: 1000000000;
    width: 100%;
    height: 100%;
    diaplay: flex;
    justify-content: center;
    background: #fff;
    padding-top: 10%;
    `;
    
const Smily = styled.div`
    width: 500px;
    margin: auto;
    color: grey;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    line-height: 2rem;
`;

const Head = styled.h1`
    font-size: 70px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
`;
    
const P = styled.p`
    font-size: 20px;
    text-align: center;
`;

export const PageNotFound = () => {
    return (
        <Container>
            <Smily> 
                <SentimentDissatisfiedSharpIcon style={{fontSize:'300px'}} />
                <Head>404</Head>
                <P>Page Not Found</P>
                <p>The page you are looking for doesn't exist or an error occured.</p>
            </Smily>
        </Container>
    )
}
