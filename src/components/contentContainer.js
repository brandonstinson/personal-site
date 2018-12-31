import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  padding: 0 2rem;
`;

const ContentContainer = ({ children }) => (
  <StyledContentContainer>{children}</StyledContentContainer>
);

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;
