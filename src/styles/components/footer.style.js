import styled from 'styled-components';
import theme from '../theme';
import Logo from '../../components/image_components/logoComponent';

const {colors, margin_left_right} = theme;

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    // TODO media query for screens less than x px. if so, set flex direction to column
`;

export const FooterLogo = styled(Logo)`
    width: 50px;
    height: 50px;
`;

export const FooterInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
`;

export const FooterInfo = styled.p`
    margin: 0;
    padding: 0 5px;
    text-align: center;
`;

export const FooterSocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${margin_left_right}px;
`;