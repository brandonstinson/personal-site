import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ContentContainer from '../components/contentContainer';
import ProjectCard from '../components/projectCard';
import projects from '../utils/data/projects';

const cardWidth = '300px';
const cardWidthWithBorder = '316px';

const StyledProjects = styled.div`
  --card-width: ${cardWidthWithBorder};
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
    grid-template-columns: repeat(auto-fill, var(--card-width));
    grid-gap: 2rem;
    justify-content: center;
    width: 100%;
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Header />
    <Title title="Projects" />
    <ContentContainer>
      <StyledProjects>
        <div className="details">
          All of the below projects were created with React and Styled Components. This static site
          is built with Gatsby and deployed/hosted on Netlify. Code for all projects is available on
          Github.
        </div>
        <div className="project-container">
          {projects.map(project => (
            <ProjectCard project={project} key={project.title} cardWidth={cardWidth} />
          ))}
        </div>
      </StyledProjects>
    </ContentContainer>
  </Layout>
);

export default ProjectsPage;
