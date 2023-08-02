import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS LEGITART.DAO?" >
  LegitArt.DAO is a community-based decentralized autonomous organization (DAO) dedicated to providing funding for crypto and startup businesses through its treasury. It leverages the power of blockchain technology and a vibrant community to revolutionize the funding landscape and support custom handmade artwork from artists worldwide.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHERE CAN I VIEW MY NFTS?" >
  Once minted or bought simply connect to your OpenSea account to view your NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW DOES IT WORK?" >
  The platform operates on a decentralized governance structure where each holder of a LegitArt NFT (Non-Fungible Token) becomes a community member with voting rights. This inclusive model allows community members to actively participate in the decision-making process, empowering them to shape the future of LegitArt and influence the allocation of funds.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE AUCTION PROCESS?" >
LegitArt.DAO hosts daily artwork auctions, offering unique pieces of custom handmade artwork for public bidding. The Ethereum raised from these auctions is collected and deposited into the LegitArt DAO treasury, serving as the community's collective capital. This capital is then used to fund opportunities for crypto and startup businesses.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO I CARE?
" >
LegitArt.DAO aims to empower startups and artists by democratizing access to funding and creating a vibrant ecosystem that celebrates creativity and innovation within the crypto and startup communities.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT ARE THE BENEFITS FOR ME AS A STAKEHOLDER?
" >
  As a stakeholder in LegitArt.DAO, you'll enjoy voting rights, access to unique handmade artwork, empowerment of crypto/startup businesses, transparency, influence on platform development, engagement in a vibrant community, and contribution to a transformative funding landscape.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq