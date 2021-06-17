import React from 'react';
import styled from 'styled-components';

interface IAfterLoginSliderCompProps {
    imgPath: string;
    title: string;
    by: string;
    authorDetails: string;
    createdAt: string;
    tag?: string;
}

export const AfterLoginSliderComp = ({ imgPath, title, by, authorDetails, createdAt, tag }: IAfterLoginSliderCompProps) => {
    return (
        <Container>
            <ImageBox>
                <Image src={imgPath} />
            </ImageBox>
            <ContentBox>
                <Content>
                    <div>
                        <Date>{createdAt}</Date>
                    </div>
                    <h2>{title}</h2>
                    <User>
                        <h6>{by}</h6>
                        <p>{authorDetails}</p>
                    </User>
                </Content>
                <ContentImageBox>
                    <ContentImage src={imgPath} />
                </ContentImageBox>
            </ContentBox>
        </Container>
    )
}

const Container = styled.div`
    height: 260px;
    width: 100%;
    padding: 25px 0;
`;

const ImageBox = styled.div`
    width: 100%;
    positioon: relative;
    overflow: hidden;
    z-index: -1;
`;
    
const Image = styled.img`
    z-index: -1;
    display: block;
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: -100%;
    filter: blur(10px);
`;

const ContentBox = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    width: 70rem;
    margin: auto;
`;

const Content = styled.div`
    color: #fff;
`;

const Date = styled.p``;

const ContentImageBox = styled.div`
    width: 370px;
    height: 90%;
`;


const ContentImage = styled.img`
    width: 100%;
    height: 100%;
`;

const User = styled.div``;