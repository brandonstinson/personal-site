import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ContentContainer from '../components/contentContainer';
import ProjectCard from '../components/projectCard';
import projects from '../data/projects';

const StyledProjects = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  text-align: center;
  .details {
    font-size: 1.25rem;
    padding: 0.5rem 0;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 2rem;
    justify-content: center;
    width: 100%;
  }
  .details > a {
    color: ${props => props.theme.yellow};
    background-color: ${props => props.theme.black};
    text-decoration: none;
    padding: 3px 5px;
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Header />
    <Title title="Projects" />
    <ContentContainer>
      <StyledProjects>
        <div className="details">
          This site and all projects were built with Gatsby, React, and Styled Components. Code for
          all projects is available on{` `}
          <a href="https://github.com/brandonstinson/personal-site">Github</a>. The SVG background
          on this page is customized from a template available at
          {` `}
          <a href="https://www.svgbackgrounds.com">SVGBackgrounds.com</a>.
        </div>
        <div className="project-container">
          {projects.map(project => (
            <ProjectCard project={project} key={project.title} cardWidth={300} />
          ))}
        </div>
      </StyledProjects>
    </ContentContainer>
  </Layout>
);

export default ProjectsPage;
