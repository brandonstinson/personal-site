import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import icon from '../images/favicon-1024.png';

const StyledHome = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 33.3vw);
    grid-auto-rows: 33.3vh;
    grid-template-areas:
        'projects about1 blog'
        'first image last'
        'resources about2 contact';
    justify-items: center;
    align-items: center;
    text-align: center;
    h1 {
        color: ${props => props.theme.blue};
        font-size: 5vw;
    }
    p {
        font-size: 3vw;
    }
    a {
        color: ${props => props.theme.yellow};
        text-decoration: none;
        font-size: 3vw;
    }
    .first {
        grid-area: first;
    }
    .last {
        grid-area: last;
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
    }
`;

const Home = () => (
    <Layout>
        <StyledHome>
            <h1 className="first">Brandon</h1>
            <h1 className="last">Stinson</h1>
            <p className="about1">Web Developer</p>
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
            <img src={icon} alt="Icon with my initials" width="200" className="image" />
        </StyledHome>
    </Layout>
);

export default Home;
