import React from 'react';
import {
    LogoContainer,
    LogoStyled
}
from '../../styles/components/logoComponent.style';
import { Link } from 'gatsby';

const Logo = () => {
    return (
        <LogoContainer>
            <Link to='/'>
                <LogoStyled />
            </Link>
        </LogoContainer>
    )
};

export default Logo;