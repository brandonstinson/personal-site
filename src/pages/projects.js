import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const StyledProjects = styled.div`
    display: grid;
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 0 40px 40px;
    .details {
        font-size: 1.5rem;
    }
    .project-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 400px);
        grid-gap: 40px;
        justify-content: center;
        width: 100%;
    }
`;

const ProjectsPage = () => (
    <Layout>
        <Header />
        <StyledProjects>
            <Title title="Projects" />
            <div className="details">
                Projects that I have built. This site is made with React, Styled Components, and
                Gatsby. Deployed and hosted with Netlify. Code for all projects is available on
                Github.
            </div>
            <div className="project-container">
                {projects.map(project => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </StyledProjects>
    </Layout>
);

export default ProjectsPage;
