import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  --border-radius: 8px;
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
  box-sizing: content-box;
  width: 100%;
  border: var(--border-radius) solid ${props => props.theme.black};
  border-radius: calc(var(--border-radius) * 2);
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  .title {
    background-color: ${props => props.theme.yellow};
    padding: 10px;
    font-weight: 900;
    font-size: 1.5rem;
    transform: rotate(-7deg);
  }
  .description {
    padding: 40px 20px 20px;
  }
`;

const ProjectCard = ({ cardWidth, project: { title, description, link, image } }) => (
  <StyledCard>
    <Link to={`/projects/${link}`}>
      <img src={image} alt={title} width={cardWidth} />
      <div className="title">{title}</div>
    </Link>
    <div className="description">{description}</div>
  </StyledCard>
);

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
  cardWidth: PropTypes.string.isRequired,
};

export default ProjectCard;
