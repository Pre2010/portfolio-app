import styled from 'styled-components';
import theme from '../theme';

const {colors, sizes} = theme;

export const ProjectsContainer = styled.div``;

export const ProjectTitle = styled.h1``;

export const ProjectContainer = styled.div`
    display: flex;
    margin: 0 10% 2% 10%;
    border-bottom: 2px solid ${colors.borderColor};

    @media (min-width: ${sizes.tablet}) {
        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProjectImageAndButtonsContainer = styled.div`
    width: 40%;
    margin-left: 10%;
    max-width: 400px;

    @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-left: 0;
        margin-bottom: 3%;
    }
`;

export const ProjectImageContainer = styled.div`
    display: flex;
    height: 18rem;
    width: 20%;
`;

export const ProjectImage = styled.img`
    src: url(${props => props.src});
    max-width: 400px;

    @media (max-width: ${sizes.mobile}) {
        max-width: 250px;
        max-height: 250px;
    }
`;

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
    margin-left: 15%;

    @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-left: 0;
        max-width: 800px;
    }

    @media (max-width: ${sizes.mobile}) {
        max-width: 500px;
    }
`;

export const ProjectTitleDescription = styled.h2`
    color: ${colors.titleColor};
    margin: 0;
    margin-bottom: 3%;
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