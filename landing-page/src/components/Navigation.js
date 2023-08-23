import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import ArtistShowcase from "./ArtistShowcase";
import SemproLogo from '../assets/SEMPRO_AlternativeLogo_12-12-2022_SLS-04.png'
import { List} from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';


const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    /* 1024 px */

    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : `translateY(1000%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  align-items:center;
  text-align: center;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;
const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};

  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024 px */
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }
  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAnotherDialog, setOpenAnotherDialog] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpenDialog(!openDialog);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleClickAnotherOpen = (scrollType) => () => {
    setOpenAnotherDialog(!openAnotherDialog);
    setScroll(scrollType);
  };

  const handleAnotherClose = () => {
    setOpenAnotherDialog(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => window.location.replace('https://legit-art-propositions.vercel.app/')}>Propositions</MenuItem>
          <ListItemButton onClick={handleClick} sx={{ pl: 2, pr: 2 }}>
            <ListItemText primary="Docs" sx={{ color: "#6734FF"}} />
          </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit sx={{ color: "#6734FF"}}>
                <List component="div" sx={{ color: "#6734FF",}}>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText primary="White Paper" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 2 }}>
                    <ListItemText primary="Audit Report" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 2 }} onClick={handleClickOpen('paper')}>
                    <ListItemText primary="Roadmap" />
                    <Dialog
                      open={openDialog}
                      onClose={handleClose}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title" sx={{ color: "#6734FF"}}><h2>Roadmap </h2> </DialogTitle>
                      <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                          id="scroll-dialog-description"
                          ref={descriptionElementRef}
                          tabIndex={-1}
                        >
                        <Typography variant="h5" gutterBottom sx={{ color: "#6734FF"}}>
                        Launching LegitArt.DAO Website
                        </Typography>

                        <Typography variant="body2" gutterBottom sx={{ color: "#6734FF"}}>
                          The upcoming phase includes the launch of LegitArt.DAO, an
                          interactive platform that serves as the hub for LegitArt community. This website will feature essential
                          components such as the voting mechanism forum, documents repository, propositions page, bidding
                          system, and treasury. LegitArt.DAO will enable seamless community engagement, transparent decision-
                          making, and access to relevant information and resources.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ color: "#6734FF"}}>
                        Staking Mechanism
                        </Typography>

                        <Typography variant="body2" gutterBottom sx={{ color: "#6734FF"}}>
                          LegitArt aims to introduce a staking mechanism as an additional feature,
                          allowing community members to participate and contribute to the ecosystem&#39;s governance. However,
                          the implementation of this mechanism is contingent upon ensuring compliance with legal requirements,
                          particularly in the United States.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ color: "#6734FF"}}>
                        Launch of Cryptocurrency Token
                        </Typography>

                        <Typography variant="body2" gutterBottom sx={{ color: "#6734FF"}}>
                          LegitArt envisions the launch of its own cryptocurrency token
                          (name pending) to further enhance the platform&#39;s utility and foster deeper community involvement.
                          However, similar to the staking mechanism, the introduction of the token is subject to legal
                          considerations and compliance, particularly within the regulatory framework of the United States.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ color: "#6734FF"}}>
                        Partnerships and Ecosystem Growth
                        </Typography>

                        <Typography variant="body2" gutterBottom sx={{ color: "#6734FF"}}>
                          LegitArt recognizes the importance of collaborations and
                          partnerships to create a thriving ecosystem. By fostering relationships with industry leaders, artists,
                          businesses, and other key stakeholders, LegitArt aims to expand its reach and provide even greater
                          opportunities for funding and artistic expression
                        </Typography>
                          
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button text="Close" onClick={handleClose} />
                      </DialogActions>
                    </Dialog>
                  </ListItemButton>
                </List>
              </Collapse>       
          <ListItemButton onClick={handleClickAnotherOpen('paper')}>
            <ListItemText primary="Artists" sx={{ color: "#6734FF"}}/>
            <Dialog
                      open={openAnotherDialog}
                      onClose={()=> setOpenAnotherDialog(true)}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle id="scroll-dialog-title" sx={{ color: "#6734FF"}}><h2>Artist Showcase </h2> </DialogTitle>
                      <DialogContent dividers={scroll === 'paper'}>
                        <ArtistShowcase/>
                      </DialogContent>
                      <DialogActions>
                        <Button text="Close" onClick={handleAnotherClose} />
                      </DialogActions>
                    </Dialog>
          </ListItemButton>  
          <MenuItem onClick={() => scrollTo("team")}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Forum</MenuItem>
          <MenuItem>
            <div className="mobile">
              <Button text="Connect Wallet" link="https://google.com" />
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <Button text="Connect Wallet" link="https://google.com" />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
