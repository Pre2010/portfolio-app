import React from 'react';
import {navLinks} from '../../config';
import {
    NavLinksContainer,
    NavLinkList,
    NavLinkListItem,
    NavLink
}
from '../../styles/components/Header/navLinks.style';

const NavLinks = () => {
    return (
        <NavLinksContainer>
            <NavLinkList>
                {
                    navLinks.map(({url, name}, i) => (
                        <NavLinkListItem key={i} >
                            <NavLink to={url} stripHash={true}>{name}</NavLink>
                        </NavLinkListItem>
                    ))
                }
            </NavLinkList>
        </NavLinksContainer>
    )
};

export default NavLinks;