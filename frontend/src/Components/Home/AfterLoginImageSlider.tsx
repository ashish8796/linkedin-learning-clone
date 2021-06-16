import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export const AfterLoginImageSlider = () => {
    return (
        <Container>
            <Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <BtnBox className="carousel-indicators">
                    <BtnRound type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></BtnRound>
                    <BtnRound type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></BtnRound>
                    <BtnRound type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></BtnRound>
                </BtnBox>
                <ImagesCont className="carousel-inner">
                   <ImgBox className="carousel-item active" >
                        <Image src="https://media-exp1.licdn.com/dms/image/C4E0DAQHalINRV_Ux9A/learning-public-crop_288_512/0/1623088185834?e=1623931200&v=beta&t=OIIXaGRPfiftQTNy8paL0aRB4ad9RL7tR2A2jl0sqaw" className="d-block w-100" alt="..." />
                    </ImgBox>
                    <ImgBox className="carousel-item">
                        <Image src="https://media-exp1.licdn.com/dms/image/C560DAQE9wyYJud9S6w/learning-public-crop_288_512/0/1621358071844?e=1623938400&v=beta&t=P_aULYSiaHc8ad6AoUpD77AMTTXkmig9MQod3DBlCe4" className="d-block w-100" alt="..." />
                    </ImgBox>
                    <ImgBox className="carousel-item">
                        <Image src="https://media-exp1.licdn.com/dms/image/C4E0DAQEd3lrHChvvOw/learning-public-crop_288_512/0/1591209203046?e=1623938400&v=beta&t=67XxC6pTt1L-2v8rc83DD9v7w2S9DDhFjyBCGHw5rCM" className="d-block w-100" alt="..." />
                    </ImgBox>
                </ImagesCont>
                <NxtPrevBtn className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <Span className="carousel-control-prev-icon" aria-hidden="true"></Span>
                    <Span className="visually-hidden">Previous</Span>
                </NxtPrevBtn>
                <NxtPrevBtn className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <Span className="carousel-control-next-icon" aria-hidden="true"></Span>
                    <Span className="visually-hidden">Next</Span>
                </NxtPrevBtn>
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 265px;
    width: 100%;
    // border: 1px solid red;
`;

const Carousel = styled.div``;

const BtnBox = styled.div``;

const BtnRound = styled.button`
    height: 10px !important;
    width: 10px !important;
    border-radius: 50% !important;
`;

const ImagesCont = styled.div``;

const ImgBox = styled.div`
    width: 100%;
    height: 265px;
    overflow: hidden;
`;
const Image = styled.img`
    position: relative;
    bottom: 80%;
    filter: blur(15px)
`;

const NxtPrevBtn = styled.button`
    color: #000;
`;

const Span = styled.span``;