import styled from 'styled-components';
import theme from '../theme';

const {colors} = theme;

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    background: ${colors.primaryColor};
`;

export const FooterInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const FooterInfo = styled.p`
    margin: 10px 0;
    padding: 0 5px;
    text-align: center;
`;

export const FooterGitHubLink = styled.a`
    text-decoration: none;
    padding-left: 5px;
    color: ${colors.borderColor};

    &:hover {
        color: ${colors.titleColor};
    }
`;