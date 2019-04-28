import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  --smaller-text: 1rem;
  --bigger-text: 1.5rem;
  --smaller-height: calc(var(--smaller-text) * 1.5);
  --bigger-height: calc(var(--bigger-text) * 2);
  display: grid;
  grid-template-rows: var(--bigger-height);
  grid-auto-rows: var(--smaller-height);
  align-items: center;
  background-color: ${props => props.theme.gray};
  a {
    color: ${props => props.theme.purple};
    text-decoration: none;
    font-size: inherit;
  }
  .nav-home {
    font-size: var(--bigger-text);
    justify-self: center;
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
      <Link to="/">Brandon Stinson</Link>
    </div>
    <div className="nav-links">
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/resources">Resources</Link>
    </div>
  </StyledHeader>
);

export default Header;
