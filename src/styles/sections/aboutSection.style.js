import styled, {css} from 'styled-components';
import theme from '../theme';

const {colors} = theme;

const AboutDescriptionStyle = css`
    width: 80%;
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AboutTitle = styled.h1``;

export const AboutImageAndDescriptionContainer = styled.div`
    display: flex;
    margin: 0 15%;
    border-bottom: 2px solid ${colors.borderColor};
`;

export const AboutImageContainer = styled.div`
    display: flex;
    height: 25rem;
    width: 50%;
`;

export const AboutImage = styled.img`
    src: url(${props => props.src});
`;

export const AboutDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
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
    /* TODO media query for smaller device screens, change 3 to auto-fill for the amount of columns */
`;

export const AboutTechnologyItem = styled.li`
    list-style: none;

    &:before {
        padding-right: 5px;
        content: ">>";
        color: ${colors.borderColor};
    }
`;