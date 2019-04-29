import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Header from '../components/header';
import Title from '../components/title';
import ContentContainer from '../components/contentContainer';

import resources from '../data/resources';

const StyledResources = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 500px));
  grid-gap: 2rem;
  justify-content: center;
  text-align: center;
  .full-width {
    grid-column: 1 / -1;
  }
  .sub-title {
    font-size: 1.5rem;
  }
  .resource {
    display: grid;
    grid-template-rows: auto 1fr;
    justify-items: center;
    border-bottom: 3px solid ${props => props.theme.white};
  }
  .name {
    background-color: ${props => props.theme.green};
    color: ${props => props.theme.gray};
    padding: 0.5rem;
    font-weight: 900;
    font-size: 1.5rem;
    transform: rotate(-5deg);
    margin-bottom: 1rem;
  }
  .description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }
`;

const ResourcesPage = () => (
  <Layout>
    <Header />
    <Title title="Resources" />
    <ContentContainer>
      <StyledResources>
        <div className="sub-title full-width">
          These resources really helped me learn and grow as a developer
        </div>
        {resources.map((resource, index) => (
          <div className="resource" key={index}>
            <div className="name">
              {resource.link ? <a href={resource.link}>{resource.name}</a> : resource.name}
            </div>
            <div className="description">{resource.description}</div>
          </div>
        ))}
      </StyledResources>
    </ContentContainer>
  </Layout>
);

export default ResourcesPage;
