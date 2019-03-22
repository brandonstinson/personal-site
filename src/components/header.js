import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import icon from '../utils/images/favicon-1024.png';

const StyledHeader = styled.header`
  --smaller-text: 1rem;
  --bigger-text: 1.5rem;
  --smaller-height: calc(var(--smaller-text) * 2);
  --bigger-height: calc(var(--bigger-text) * 2);
  display: grid;
  grid-template-rows: var(--bigger-height);
  grid-auto-rows: var(--smaller-height);
  align-items: center;
  background-color: ${props => props.theme.black};
  a {
    color: ${props => props.theme.yellow};
    text-decoration: none;
    font-size: inherit;
  }
  .nav-home {
    font-size: var(--bigger-text);
    justify-self: center;
  }
  .nav-home img {
    width: calc(var(--bigger-text) * 2 / 3);
    margin-right: calc(var(--bigger-text) * 1 / 3);
  }
  .nav-links {
    font-size: var(--smaller-text);
    align-self: start;
    display: flex;
    justify-content: space-evenly;
  }
  @media (min-width: 1000px) {
    grid-template-columns: auto 1fr;
    .nav-home {
      margin-left: var(--bigger-text);
    }
    .nav-links {
      justify-content: flex-end;
      align-self: center;
      font-size: var(--bigger-text);
    }
    .nav-links > * {
      margin-right: var(--bigger-text);
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="nav-home">
      <Link to="/">
        <img src={icon} alt="Icon with my initials" />
        Brandon Stinson
      </Link>
    </div>
    <div className="nav-links">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resources">Resources</Link>
    </div>
  </StyledHeader>
);

export default Header;
