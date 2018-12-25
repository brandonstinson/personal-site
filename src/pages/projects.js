import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ProjectCard from '../components/projectCard';
import projects from '../utils/data/projects';

const cardWidth = '300px';

const StyledProjects = styled.div`
  --card-width: ${cardWidth};
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;
  text-align: center;
  padding: 40px;
  .details {
    font-size: 1.5rem;
    padding-bottom: 20px;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, var(--card-width));
    grid-gap: 50px;
    justify-content: center;
    width: 100%;
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Header />
    <Title title="Projects" />
    <StyledProjects>
      <div className="details">
        All of the below projects were created with React and Styled Components. This static site is
        built with Gatsby and deployed/hosted on Netlify. Code for all projects is available on
        Github.
      </div>
      <div className="project-container">
        {projects.map(project => (
          <ProjectCard project={project} key={project.title} cardWidth={cardWidth} />
        ))}
      </div>
    </StyledProjects>
  </Layout>
);

export default ProjectsPage;
