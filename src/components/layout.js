import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/header';
import Footer from './footer';
import {GlobalStyle} from '../styles/components/layout.style';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
        <Header />
          <main>{children}</main>
          <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
