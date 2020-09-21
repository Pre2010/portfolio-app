import styled, {css} from 'styled-components';
import theme from '../theme';

const {colors, sizes} = theme;

const ContactSizeStyle = css`
    @media (max-width: ${sizes.tablet}) {
        width: 100%;
    }
`;

export const ContactContainer = styled.div``;

export const ContactTitleContainer = styled.div``;

export const ContactTitle = styled.h1``;

export const ContactCtaAndImageContainer = styled.div`
    display: flex;
    margin: 0 20%;
    margin-bottom: 25px;

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column-reverse;
        align-items: center;
        margin: 5% 10%;
    }

    @media (max-width: ${sizes.mobile}) {
        margin: 10% 1%;
    }
`;

export const ContactCtaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${colors.borderColor};
    border-radius: 10px;
    padding: 25px;
    width: 40%;

    ${ContactSizeStyle};
`;

export const ContactCta = styled.p`
    margin-top: 5%;
    margin-bottom: 10%;
`;

export const ContactImgContainer = styled.div`
    display: flex;
    height: 100%;
    width: 60%;

    ${ContactSizeStyle};
`;

export const ContactImg = styled.img`
    src: url(${props => props.src});
`;

export const ContactButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactButton = styled.a`
    text-decoration: none;
    color: ${colors.textColor};
    padding: 5px 2px;
    border: 2px solid ${colors.borderColor};
    border-radius: 10px;
    font-size: 25px;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
        color: ${colors.borderColor};
        background-color: ${colors.hoverColor};
    }
`;

