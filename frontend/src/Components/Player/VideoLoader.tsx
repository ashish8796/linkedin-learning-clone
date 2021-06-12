import React from "react";
import styled from "styled-components";

interface IVideoLoaderProps {}

export default function VideoLoader({}: IVideoLoaderProps) {
  const makeLines = () => {
    for (let i = 0; i < 24; i++) {
      return <Line></Line>;
    }
  };
  return (
    <LoaderBox>
      {/* <Loader>{makeLines()}</Loader> */}
      <Loader></Loader>
    </LoaderBox>
  );
}

const LoaderBox = styled.div`
  position: absolute;
  /* border: 1px solid red; */
  width: 4rem;
  height: 4rem;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.div`
  border: 3px solid white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: 2px solid #ffffff00;

  animation: load 0.8s linear infinite;

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Line = styled.div``;
