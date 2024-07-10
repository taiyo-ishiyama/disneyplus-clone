import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
        onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}
      >
        <img src='/images/viewers-disney.png' />
        <video src='/videos/1564674844-disney.mp4' loop muted />
      </Wrap>
      <Wrap
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
        onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}
      >
        <img src='/images/viewers-pixar.png' />
        <video src='/videos/1564676714-pixar.mp4' loop muted />
      </Wrap>
      <Wrap
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
        onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}
      >
        <img src='/images/viewers-marvel.png' />
        <video src='/videos/1564676115-marvel.mp4' loop muted />
      </Wrap>
      <Wrap
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
        onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}
      >
        <img src='/images/viewers-starwars.png' />
        <video src='/videos/1608229455-star-wars.mp4' loop muted />
      </Wrap>
      <Wrap
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
        onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}
      >
        <img src='/images/viewers-national.png' />
        <video src='/videos/1564676296-national-geographic.mp4' loop muted />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 500px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
      }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 250ms ease-in-out;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;
