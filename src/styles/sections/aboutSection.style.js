import styled, {css} from 'styled-components';
import Img from 'gatsby-image';
import theme from '../theme';

const {colors, sizes} = theme;

const AboutDescriptionStyle = css`
    width: 80%;
`;

const AboutSizeStyle = css`
    @media (max-width: ${sizes.tablet}) {
        width: 100%;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: ${sizes.tablet}) {
        
    }
`;

export const AboutTitle = styled.h1``;

export const AboutImageAndDescriptionContainer = styled.div`
    display: flex;
    margin: 0 10%;
    border-bottom: 2px solid ${colors.borderColor};

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column;
        align-items: center;
        margin: 0;
    }
`;

export const AboutImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 25rem; */
    height: 100%;
    width: 50%;
    margin: 3% 0;
    max-width: 600px;
    @media (max-width: ${sizes.tablet}) {
        justify-content: center;
        width: 80%;
        height: 80%;
    }
`;

// export const AboutImage = styled.img`
//     src: url(${props => props.src});
//     width: 100%;
//     height: 100%;
// `;

export const AboutImage = styled(Img)``;

export const AboutDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    ${AboutSizeStyle};
`;

export const AboutDescription = styled.p`
    ${AboutDescriptionStyle};
`;

export const AboutTechnologyContainer = styled.div`
`;

export const AboutTechnologyDescription = styled.p`
    text-align: center;
    padding-top: 10px;
`;

export const AboutTechnologyList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(50px, 175px));
    grid-gap: 10px;
    justify-content: center;

    @media (max-width: ${sizes.tablet}) {
        grid-template-columns: repeat(2, minmax(50px, 175px));
    }
`;

export const AboutTechnologyItem = styled.li`
    list-style: none;

    &:before {
        padding-right: 5px;
        content: ">>";
        color: ${colors.borderColor};
    }
`;