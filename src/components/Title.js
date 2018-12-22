import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.div`
  display: grid;
  justify-content: center;
  h1 {
    font-size: 2rem;
    @media (min-width: 700px) {
      font-size: 3rem;
    }
    @media (min-width: 1000px) {
      font-size: 4rem;
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
