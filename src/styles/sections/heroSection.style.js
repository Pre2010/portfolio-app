import styled from 'styled-components';
// import HeroImageSvg from '../../images/heroImage';
import theme from '../theme';

const {colors} = theme;

export const HeroContainer = styled.div`

`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* for mobile? height: 15rem; */
`;

export const HeroImage = styled.img`
    src: url(${props => props.src});
    width: 40%;
`;

export const HeroDescriptionContainer = styled.div`
    margin: 2% auto;
    text-align: center;
    width: 60%;
`;

export const HeroDescriptionName = styled.span`
    font-size: 45px;
    color: ${colors.titleColor};
`;

export const HeroDescription = styled.p`
    margin: 10px 0 5px 0;
    font-size: 23px;
`;