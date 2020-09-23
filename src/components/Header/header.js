import React, {useEffect, useState} from "react"
import {
  HeaderContainer,
  HeaderLogo,
  HeaderNavContainer,
  HeaderHamburgerMenuMask,
  HeaderScrollMask,
  HeaderNavLinksContainer,
  NavBarLinksStyled,
  HeaderSocialMediaAndResumeContainer,
  HamburgerMenuContainer,
  HamburgerMenuButton,
  HamburgerMenuTopBar,
  HamburgerMenuMiddleBar,
  HamburgerMenuBottomBar,
  HamburgerMenuOpenContainer, HamburgerMenuButtonContainer
} from '../../styles/components/Header/header.style';
import SocialMedia from "../image_components/socialMedia";
import {useScrollYPosition} from 'react-use-scroll-position';
import CustomButton from '../customButton';

const Header = () => {
  const scrollY = useScrollYPosition();
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setShowStickyNav(scrollY !== 0 ? true : false);
    setOpenMenu(false);
  }, []);
  

  return (
    <HeaderContainer>
      <HeaderNavContainer>
      <HeaderHamburgerMenuMask scrollActive={openMenu} />
      <HeaderScrollMask scrollActive={showStickyNav} />
        <HeaderNavLinksContainer>
          <HeaderLogo />
            <NavBarLinksStyled />
          <HeaderSocialMediaAndResumeContainer>
            <SocialMedia />
            <CustomButton
            href='/resume.jpg'
            target='_blank'
            rel='nofollow noopener noreferrer'>
              Resume
            </CustomButton>
          </HeaderSocialMediaAndResumeContainer>
          <HamburgerMenuContainer>
            <HamburgerMenuButtonContainer>
              <HamburgerMenuButton 
                className={openMenu ? 'open' : ''}
                onClick={() => setOpenMenu(!openMenu)} >
                  <HamburgerMenuTopBar />
                  <HamburgerMenuMiddleBar />
                  <HamburgerMenuBottomBar />
              </HamburgerMenuButton>
            </HamburgerMenuButtonContainer>
            <HamburgerMenuOpenContainer openMenu={openMenu}>
                <NavBarLinksStyled />
                <SocialMedia />
                <CustomButton
                    href='/resume.jpg'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                >Resume</CustomButton>
            </HamburgerMenuOpenContainer>
        </HamburgerMenuContainer>
        </HeaderNavLinksContainer>
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header
