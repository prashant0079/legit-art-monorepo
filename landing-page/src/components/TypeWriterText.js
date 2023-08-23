import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: camelcase;
    font-family: "Acumin Pro", sans-serif;
  }
  .text-1{
      color: #FF6734;
  }
  .text-2{
      color: #34FF67;
  }
  .text-3{
      color: #D634FF;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;
  margin: 0.5em;

  button{
    margin: 0.5em;
  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0.5em;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
        <Title>
      Discover
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Amazing Legit Artworks</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Auctioning Artwork daily, indefinitely</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">The Artwork: Entry to LegitART.DAO Community</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      
    </Title>
    <SubTitle>Bored of just buying NFTs? Try LegitART today</SubTitle>
    <ButtonContainer>
    <Button text="Login" link="#about" />
    <Button text="Sign Up" link="#about" />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
