import styled from 'styled-components';
import Img from 'gatsby-image';
import theme from '../theme';

const {colors, sizes} = theme;

export const ProjectsContainer = styled.div``;

export const ProjectTitle = styled.h1``;

export const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
    border-bottom: 2px solid ${colors.borderColor};

    @media (min-width: ${sizes.tablet}) {
        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column;
        align-items: center;
        margin: 4%;
    }
`;

export const ProjectImageAndButtonsContainer = styled.div`
    width: 40%;
    max-width: 400px;
    margin: 0 10%;

    @media (max-width: ${sizes.tablet}) {
        width: 100%;
        align-items: center;
        margin-bottom: 3%;
        margin: 0;
    }
`;

export const ProjectImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectImage = styled(Img)``;

export const ProjectButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;

export const ProjectDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    max-width: 400px;
    margin: 0 10%;

    @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-left: 0;
        max-width: 800px;
        margin: 0;
    }

    @media (max-width: ${sizes.mobile}) {
        max-width: 500px;
        margin: 0;
    }
`;

export const ProjectTitleDescription = styled.h2`
    color: ${colors.titleColor};
    margin: 0;
    margin-bottom: 3%;

    @media (max-width: ${sizes.tablet}) {
        margin-top: 3%;
    }
`;

export const ProjectDescription = styled.p``;

export const ProjectTechContainer = styled.div``;

export const ProjectTechList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(40%, 45%));
    grid-gap: 15px;
    justify-content: space-between;
    padding-left: 0;

    @media (max-width: ${sizes.tablet}) {
        grid-template-columns: repeat(2, minmax(20%, 25%));
    }
    
    @media (max-width: ${sizes.mobile}) {
        grid-template-columns: repeat(1, minmax(10%, 15%));
    }
`;

export const ProjectTechItem = styled.li`
    list-style: none;

    &:before {
        content: ">>";
        padding-right: 5px;
        color: ${colors.borderColor};
    }
`;