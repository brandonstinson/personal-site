import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MenuButton from './MenuButton';
import icon from '../images/favicon-1024.png';

const StyledHeader = styled.header`
    --text-size: 30px;
    height: calc(var(--text-size) * 2);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    background-color: ${props => props.theme.black};
    a {
        color: ${props => props.theme.yellow};
        text-decoration: none;
        font-size: var(--text-size);
    }
    .menu {
        margin: 0 var(--text-size);
    }
    .home {
        justify-self: center;
    }
    .home img {
        width: 20px;
        margin-right: 10px;
    }
    .nav {
        display: none;
        justify-content: flex-end;
    }
    .nav > * {
        margin-right: var(--text-size);
    }
    @media (min-width: 800px) {
        .nav {
            display: flex;
        }
        .menu {
            display: none;
        }
        .home {
            margin: 0 var(--text-size);
        }
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="menu">
            <MenuButton size="30px" />
        </div>
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
