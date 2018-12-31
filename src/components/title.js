import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.div`
  display: grid;
  justify-content: center;
  h1 {
    font-size: 2rem;
    padding: 1rem 0 0.5rem;
  }
  @media (min-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 1400px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const Title = ({ title }) => (
  <StyledTitle>
    <h1>{title}</h1>
  </StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
