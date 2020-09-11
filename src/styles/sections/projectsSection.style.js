import styled from 'styled-components';
import theme from '../theme';

const {colors} = theme;

export const ProjectsContainer = styled.div`
    display: flex;
    padding-bottom: 2%;
    margin: 0 10% 2% 10%;
    border-bottom: 2px solid ${colors.borderColor};
    
`;

export const ProjectsTitle = styled.h1``;

export const ProjectsImageAndButtonsContainer = styled.div`
    width: 30%;
    margin-left: 10%;
`;

export const ProjectsImageContainer = styled.div`
    display: flex;
    height: 18rem;
    width: 20%;
    
`;

export const ProjectsImage = styled.img`
    src: url(${props => props.src});
    max-width: 400px;
`;

export const ProjectsButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 5%;
`;

export const ProjectsButton = styled.a`
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

export const ProjectsDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    max-width: 400px;
    margin-left: 15%;
`;

export const ProjectsDescription = styled.p``;

export const ProjectsTechContainer = styled.div``;

export const ProjectsTechList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(10%, 25%));
    grid-gap: 10px;
    justify-content: center;
`;

export const ProjectsTechItem = styled.li`
    list-style: none;

    &:before {
        content: ">>";
        padding-right: 5px;
        color: ${colors.titleColor};
    }
`;