import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import icon from '../utils/images/favicon-1024.png';

const StyledHome = styled.div`
  --large-font: 3rem;
  --medium-font: 2rem;
  --small-font: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 50vw);
  grid-auto-rows: 16.6vh;
  grid-template-areas:
    'full full'
    'image image'
    'about1 about1'
    'about2 about2'
    'projects blog'
    'resources contact';
  justify-items: center;
  align-items: center;
  text-align: center;
  h1 {
    color: ${props => props.theme.blue};
    font-size: var(--large-font);
  }
  p {
    font-size: var(--small-font);
    padding: 10px 20px;
  }
  a {
    color: ${props => props.theme.yellow};
    text-decoration: none;
    font-size: var(--medium-font);
  }
  .first {
    grid-area: first;
    display: none;
  }
  .last {
    grid-area: last;
    display: none;
  }
  .full-name {
    grid-area: full;
  }
  .about1 {
    grid-area: about1;
  }
  .about2 {
    grid-area: about2;
  }
  .projects {
    grid-area: projects;
  }
  .blog {
    grid-area: blog;
  }
  .resources {
    grid-area: resources;
  }
  .contact {
    grid-area: contact;
  }
  .image {
    grid-area: image;
    width: 100px;
  }
  @media (min-width: 1000px) {
    --large-font: 4rem;
    --medium-font: 3rem;
    --small-font: 2rem;
    grid-template-columns: repeat(3, 33.3vw);
    grid-auto-rows: 33.3vh;
    grid-template-areas:
      'projects about1 blog'
      'first image last'
      'resources about2 contact';
    .image {
      width: 200px;
    }
    .first {
      display: block;
    }
    .last {
      display: block;
    }
    .full-name {
      display: none;
    }
  }
`;

const Home = () => (
  <Layout>
    <StyledHome>
      <h1 className="first">Brandon</h1>
      <h1 className="last">Stinson</h1>
      <h1 className="full-name">Brandon Stinson</h1>
      <p className="about1">
        Software engineer currently focused on the web, but interested in machine learning.
      </p>
      <p className="about2">Currently active duty Air Force in Abilene, Texas.</p>
      <Link to="/projects" className="projects">
        Projects
      </Link>
      <Link to="/blog" className="blog">
        Blog
      </Link>
      <Link to="/resources" className="resources">
        Resources
      </Link>
      <Link to="/contact" className="contact">
        Contact
      </Link>
      <img src={icon} alt="Icon with my initials" className="image" />
    </StyledHome>
  </Layout>
);

export default Home;
