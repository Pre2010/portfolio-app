import styled from 'styled-components';
// import HeroImageSvg from '../../images/heroImage';
import theme from '../theme';

const {colors} = theme;

export const HeroContainer = styled.div`
    display: flex;
    margin-top: 100px;
`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    /* for mobile? height: 15rem; */
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
`;

export const HeroDescriptionName = styled.span`
    font-size: 45px;
    color: ${colors.titleColor};
`;

export const HeroDescription = styled.p`
    font-size: 23px;
`;