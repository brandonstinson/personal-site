import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import github from '../images/icons/github.svg';

const StyledCard = styled.div`
  --border-radius: 0rem;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.gray};
  border: 3px solid ${props => props.theme.white};
  border-radius: var(--border-radius);
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    width: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  .title {
    background-color: ${props => props.theme.red};
    padding: 0.5rem;
    border-radius: 50px;
    font-weight: 900;
    font-size: 1.5rem;
    transform: rotate(-7deg);
  }
  .description {
    padding: 1rem;
  }
  .icon img {
    width: 40px;
    margin-top: 1rem;
  }
`;

const ProjectCard = ({ cardWidth, project: { title, description, link, image, repo } }) => (
  <StyledCard>
    {link.startsWith(`http`) ? (
      <a href={link}>
        <img src={image} alt={title} width={cardWidth} />
        <div className="title">{title}</div>
      </a>
    ) : (
      <Link to={`/projects/${link}`}>
        <img src={image} alt={title} width={cardWidth} />
        <div className="title">{title}</div>
      </Link>
    )}
    <div className="icon">
      <a href={repo}>
        <img src={github} alt="GitHub icon" width={25} />
      </a>
    </div>
    <div className="description">{description}</div>
  </StyledCard>
);

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
  cardWidth: PropTypes.number.isRequired,
};

export default ProjectCard;
