import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import icon from '../images/favicon-1024.png';

const StyledHeader = styled.header`
    --margin: 5vw;
    --font-size: 3vw;
    height: 10vh;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    background-color: ${props => props.theme.black};
    a {
        color: ${props => props.theme.yellow};
        text-decoration: none;
        font-size: var(--font-size);
    }
    .home {
        margin-left: var(--margin);
        font-size: var(--font-size);
    }
    .home img {
        width: 2vw;
        margin-right: 1vw;
    }
    .nav {
        display: flex;
        justify-content: flex-end;
    }
    .nav > * {
        margin-right: var(--margin);
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="home">
            <Link to="/">
                <img src={icon} alt="Icon with my initials" />
                Brandon Stinson
            </Link>
        </div>
        <div className="nav">
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </StyledHeader>
);

export default Header;
