import styled, {css} from 'styled-components';
import theme from '../../theme';
import Logo from '../../../components/image_components/logoComponent';
import NavLinks from '../../../components/Header/navLinks';
const {colors, gradients, sizes} = theme;

const HeaderMaskStyle = css`
    width: ${props => props.scrollActive ? '100%' : '0'};
    height: 100%;
    top: 0;
    background: ${colors.primaryColor};
    position: absolute;
    transition: width 0.5s ease;
    z-index: -1;
    box-shadow: 5px 2px ${colors.hoverColor};
`;

const HeaderDisplayMaskStyle = css`
    @media (min-width: ${sizes.tablet}) {
        display: flex;
    }
`;

const HamburgerButtonDivStyle = css`
    transition: all 0.5s ease;
    height: 3px;
    width: 100%;
    background: ${colors.borderColor};
    position: absolute;
`;

export const HeaderContainer = styled.header``;

export const HeaderNavContainer = styled.nav`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    padding: 0 60px;

    @media (max-width: ${sizes.mobile}) {
        padding: 0 20px;
    };

    @media (max-width: ${sizes.tablet}) {
        padding: 0 40px;
    };
`;

export const HeaderLogo = styled(Logo)`
    width: 50px;
    height: 50px;

`;

export const HeaderHamburgerMenuMask = styled.div`
    ${HeaderMaskStyle};
    left: 0;
`;

export const HeaderScrollMask = styled.div`
    ${HeaderMaskStyle};
    right: 0;
`;

export const HeaderNavLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65px;
    margin-top: 1%;
`;

export const NavBarLinksStyled = styled(NavLinks)``;

export const HeaderSocialMediaAndResumeContainer = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    ${HeaderDisplayMaskStyle};
`;

export const HamburgerMenuContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    transition: height 3.5s ease;

    @media (min-width: ${sizes.tablet}) {
        display: none;
    }
`;

export const HamburgerMenuButtonContainer = styled.div`
    @media (max-width: ${sizes.mobile}) {
        padding: 5px 20px;
    };

    @media (max-width: ${sizes.tablet}) {
        padding: 10px 40px;
    };
`;

export const HamburgerMenuButton = styled.button`
    height: 2.5rem;
    width: 3.5rem;
    border: none;
    background: transparent;
    position: relative;
    padding: 0;

    &.open {
        div {
            background: ${gradients.greenToOrange};

            &:nth-child(2) {
                opacity: 0;
            }

            &:first-child {
                transform: rotate(45deg);
                top: 1.1rem;
            };

            &:last-child {
                transform: rotate(-45deg);
                bottom: 1.1rem;
            };
        }
    }
`;

export const HamburgerMenuTopBar = styled.div`
    ${HamburgerButtonDivStyle};
    top: 0;
    left: 0;
`;

export const HamburgerMenuMiddleBar = styled.div`
    ${HamburgerButtonDivStyle};
    top: calc(50% - 1.5px);
    left: 0;
`;

export const HamburgerMenuBottomBar = styled.div`
    ${HamburgerButtonDivStyle};
    bottom: 0;
    left: 0;
`;

export const HamburgerMenuOpenContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 80px);
    position: fixed;
    line-height: 3rem;
    background-color: ${colors.primaryColor};
    transform: translateX(${props => (props.openMenu ? '0%' : '100%')});
    transition: transform 0.5s ease;
    top: 75px;
    left: 0;
    padding: 2rem;
    align-items: center;

    @media (min-width: ${sizes.mobile}) {
        padding: 4rem;
    }

    div > ol {
        display: flex;
        flex-direction: column;
        padding-left: 0;
    }

    a {
        width: 70px;
    }
`;