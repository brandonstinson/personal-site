import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.gray};
    color: ${props => props.theme.white};
  }
`;

const theme = {
  gray: `#2e3440`,
  white: `#eceff4`,
  blue: `#81a1c1`,
  yellow: `#ebcb8b`,
  red: `#bf616a`,
  purple: `#b48ead`,
  orange: `#d08770`,
  green: `#a3be8c`,
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Helmet htmlAttributes={{ lang: `en` }}>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal site for Brandon Stinson" />
        <title>Brandon Stinson</title>
      </Helmet>
      {children}
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
