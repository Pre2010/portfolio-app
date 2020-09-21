import styled from 'styled-components';
import theme from '../theme';

const {colors, sizes} = theme;

export const WorksContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WorksTitle = styled.h1`
    @media (max-width: ${sizes.mobile}) {
        text-align: center;
    }
`;

export const WorkJobsAccordionContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0 15% 2% 15%;

    .accordion {
        border: 1px solid ${colors.borderColor};
        border-radius: 4px;
    }

    @media (max-width: ${sizes.tablet}) {
        margin: 5% 10%;
    }

    @media (max-width: ${sizes.mobile}) {
        margin: 0 1%;
    }
`;

export const WorkJobsListCardContainer = styled.div`
    .card {
        background-color: ${colors.primaryColor};
    }
    .card-header {
        background-color: ${colors.textColor};
    }
`;

export const WorkDescriptionCardBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WorkCompanyName = styled.h3`
    color: ${colors.primaryColor};
`;

export const WorkJobTitle = styled.h3``;

export const WorkJobDate = styled.p``;

export const WorkJobTechDescription = styled.p`
    text-align: center;
`;

export const WorkJobTechList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(50%, 60%));
    justify-content: center;
    grid-gap: 5%;
    padding-left: 0;

    @media (max-width: ${sizes.mobile}) {
        grid-template-columns: repeat(1, 100%);
    }
`;

export const WorkJobTechItem = styled.li`
    list-style: none;
    &:before {
        content: ">>";
        padding: 5px;
        color: ${colors.titleColor};

        @media (max-width: ${sizes.mobile}) {
            content: '>';
        }
    }
`;

export const WorkJobDescriptionList = styled.ul`
    
    @media (max-width: ${sizes.tablet}) {
        padding-left: 0;
    }
`;

export const WorkJobDescriptionItem = styled.li`
    list-style: none;
    padding-bottom: 10px;
    
    &:before {
        content: ">>";
        padding-right: 5px;
        color: ${colors.titleColor};
    }
`;