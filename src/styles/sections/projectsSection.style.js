import styled from 'styled-components';
import theme from '../theme';

const {colors} = theme;

export const ProjectsContainer = styled.div``;

export const ProjectTitle = styled.h1``;

export const ProjectContainer = styled.div`
    display: flex;
    margin: 0 10% 2% 10%;
    border-bottom: 2px solid ${colors.borderColor};
    
`;

export const ProjectImageAndButtonsContainer = styled.div`
    width: 40%;
    margin-left: 10%;
    max-width: 400px;
`;

export const ProjectImageContainer = styled.div`
    display: flex;
    height: 18rem;
    width: 20%;
    
`;

export const ProjectImage = styled.img`
    src: url(${props => props.src});
    max-width: 400px;
`;

export const ProjectButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;

export const ProjectButton = styled.a`
    text-decoration: none;
    color: ${colors.textColor};
    padding: 0 8px;
    border: 2px solid ${colors.borderColor};
    border-radius: 10px;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
        color: ${colors.borderColor};
        background-color: ${colors.shapeColor};
    }
`;

export const ProjectDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    max-width: 400px;
    margin-left: 15%;
`;

export const ProjectTitleDescription = styled.h2`
    color: ${colors.titleColor};
    margin: 0;
`;

export const ProjectDescription = styled.p``;

export const ProjectTechContainer = styled.div``;

export const ProjectTechList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(40%, 45%));
    grid-gap: 15px;
    justify-content: space-between;
    padding-left: 0;
`;

export const ProjectTechItem = styled.li`
    list-style: none;

    &:before {
        content: ">>";
        padding-right: 5px;
        color: ${colors.borderColor};
    }
`;