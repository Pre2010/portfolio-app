import React from "react"
import {
  HeaderLogo,
  HeaderNavContainer,
  HeaderNavLinksContainer,
  HeaderNavLinkList,
  HeaderNavLinkListItem,
  HeaderNavLink,
  HeaderResumeButton,
  HeaderSocialMediaAndResumeContainer,
} from '../styles/components/header.style';
import {navLinks} from '../config';
import SocialMedia from "./image_components/socialMedia";

const Header = () => (
  <header>
    <HeaderNavContainer>
      <HeaderLogo />
      <HeaderNavLinksContainer>
        <HeaderNavLinkList>
          {
            navLinks.map(({url, name}, i) => (
              <HeaderNavLinkListItem key={i}>
                <HeaderNavLink to={url}>{name}</HeaderNavLink>
              </HeaderNavLinkListItem>
            ))
          }
        </HeaderNavLinkList>
      </HeaderNavLinksContainer>
      <HeaderSocialMediaAndResumeContainer>
        <SocialMedia />
        <HeaderResumeButton 
        href='./resume.jpg'
        target='_blank'
        rel='nofollow noopener noreferrer'>Resume</HeaderResumeButton>
      </HeaderSocialMediaAndResumeContainer>
    </HeaderNavContainer>
  </header>
);

export default Header
