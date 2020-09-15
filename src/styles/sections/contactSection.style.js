import styled from 'styled-components';
import theme from '../theme';

const {colors} = theme;

export const ContactContainer = styled.div`
    /* display: flex;
    flex-direction: column; */
`;

export const ContactTitleContainer = styled.div`

`;

export const ContactTitle = styled.h1`
    
`;

export const ContactCtaAndImageContainer = styled.div`
    display: flex;
    margin: 0 20%;
    margin-bottom: 25px;
`;

export const ContactCtaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid ${colors.borderColor};
    border-radius: 10px;
    padding: 25px;
    width: 40%;
`;

export const ContactCta = styled.p`
    margin-top: 5%;
    margin-bottom: 10%;
`;

export const ContactImgContainer = styled.div`
    display: flex;
    height: 100%;
    width: 60%;
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

