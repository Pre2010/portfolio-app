import styled from 'styled-components';
import { Link } from 'gatsby';

export const SocialMediaContainer = styled.div`

`;

export const SocialMediaList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
`;

export const SocialMediaLink = styled(Link)`
    padding: 10px;
    vertical-align: middle;
    transition: 0.3s ease;

    svg {
        height: 45px;
        width: 45px;
    }

    &:hover {
        path {
            opacity: 0.7;
        }
    }
`;