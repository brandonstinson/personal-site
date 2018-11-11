import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const StyledProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-gap: 40px;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 40px;
`;

const ProjectsPage = () => (
    <Layout>
        <Header />
        <StyledProjects>
            {projects.map(project => (
                <ProjectCard project={project} key={project.title} />
            ))}
        </StyledProjects>
    </Layout>
);

export default ProjectsPage;
