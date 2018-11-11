import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types'; // eslint-disable-line

const StyledCard = styled.div`
    background-color: ${props => props.theme.offWhite};
    color: black;
    width: 100%;
    a {
        color: inherit;
        text-decoration: none;
    }
    .title {
        background-color: ${props => props.theme.yellow};
        padding: 10px;
        font-weight: 900;
        font-size: 30px;
        transform: rotate(-8deg);
    }
    .description {
        padding: 40px 20px;
    }
`;

const ProjectCard = ({ project: { title, description, link, image } }) => (
    <StyledCard>
        <Link to={`/projects/${link}`}>
            <img src={image} alt={title} width="400" />
            <div className="title">{title}</div>
        </Link>
        <div className="description">{description}</div>
    </StyledCard>
);

ProjectCard.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectCard;
