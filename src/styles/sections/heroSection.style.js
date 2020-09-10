import styled from 'styled-components';
import HeroImageSvg from '../../images/heroImage';

export const HeroContainer = styled.div`

`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* for mobile? height: 15rem; */
`;

export const HeroImage = styled(HeroImageSvg)`

`;

export const HeroDescriptionContainer = styled.div`
    margin: 5% auto;
    text-align: center;
    width: 60%;
`;

export const HeroDescription = styled.p`
    margin: 10px 0 5px 0;
    font-size: 23px;
`;