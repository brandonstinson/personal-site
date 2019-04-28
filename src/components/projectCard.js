import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.gray};
  border: 5px solid ${props => props.theme.gray};
  border-radius: 5px;
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    width: 100%;
  }
  .title {
    background-color: ${props => props.theme.yellow};
    padding: 0.5rem;
    font-weight: 900;
    font-size: 1.5rem;
    transform: rotate(-7deg);
  }
  .description {
    padding: 2rem 1rem 1rem;
  }
`;

const ProjectCard = ({ cardWidth, project: { title, description, link, image } }) => (
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
    <div className="description">{description}</div>
  </StyledCard>
);

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
  cardWidth: PropTypes.number.isRequired,
};

export default ProjectCard;
