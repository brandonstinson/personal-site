import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import icon from '../images/favicon-1024.png';

const StyledHeader = styled.header`
    --multiplier: 0.75;
    --margin: 1.25rem;
    --font-size: calc(1rem * var(--multiplier));
    height: calc(var(--font-size) * 3);
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
        width: calc(var(--font-size) * 0.7);
        margin-right: calc(var(--font-size) * 0.4);
    }
    .nav {
        display: flex;
        justify-content: flex-end;
    }
    .nav > * {
        margin-right: var(--margin);
    }
    @media (min-width: 500px) {
        --multiplier: 1;
        --margin: 1.5rem;
    }
    @media (min-width: 700px) {
        --multiplier: 1.5;
        --margin: 2rem;
    }
    @media (min-width: 900px) {
        --margin: 2.5rem;
    }
    @media (min-width: 1100px) {
        --multiplier: 2;
        --margin: 3rem;
    }
    @media (min-width: 1300px) {
        --margin: 3.5rem;
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
