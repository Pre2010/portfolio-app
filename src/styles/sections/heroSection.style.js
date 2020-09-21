import styled from 'styled-components';
import theme from '../theme';

const {colors, sizes} = theme;

export const HeroContainer = styled.div`
    display: flex;
    margin-top: 100px;

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: ${sizes.tablet}) {
        width: 75%;
    }
`;

export const HeroImage = styled.img`
    src: url(${props => props.src});
    width: 100%;
`;

export const HeroDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10%;
    text-align: center;
    width: 50%;

    @media (max-width: ${sizes.tablet}) {
        width: 100%;
    }
`;

export const HeroDescriptionName = styled.span`
    font-size: 45px;
    color: ${colors.titleColor};
`;

export const HeroDescription = styled.p`
    font-size: 23px;
`;