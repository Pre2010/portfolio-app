import React, {useEffect, useState} from "react"
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavContainer,
  HeaderScrollMask,
  HeaderNavLinksContainer,
  HeaderNavLinkList,
  HeaderNavLinkListItem,
  HeaderNavLink,
  HeaderResumeButton,
  HeaderSocialMediaAndResumeContainer,
} from '../styles/components/header.style';
import {navLinks} from '../config';
import SocialMedia from "./image_components/socialMedia";
import {useScrollYPosition} from 'react-use-scroll-position';

const Header = () => {
  const scrollY = useScrollYPosition();
  const [showStickyNav, setShowStickyNav] = useState(false);
  
  useEffect(() => {
    setShowStickyNav(scrollY !== 0 ? true : false);
  }, [scrollY]);
  

  return (
    <HeaderContainer>
      <HeaderNavContainer>
      <HeaderScrollMask scrollActive={showStickyNav} />
        <HeaderNavLinksContainer>
        <HeaderLogo />
          <HeaderNavLinkList>
            {
              navLinks.map(({url, name}, i) => (
                <HeaderNavLinkListItem key={i}>
                  <HeaderNavLink to={url} stripHash={true}>{name}</HeaderNavLink>
                </HeaderNavLinkListItem>
              ))
            }
          </HeaderNavLinkList>
        <HeaderSocialMediaAndResumeContainer>
          <SocialMedia />
          <HeaderResumeButton 
          href='./resume.jpg'
          target='_blank'
          rel='nofollow noopener noreferrer'>Resume</HeaderResumeButton>
        </HeaderSocialMediaAndResumeContainer>
        </HeaderNavLinksContainer>
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header
