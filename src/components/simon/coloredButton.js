import React from 'react';
import styled from 'styled-components';

const StyledColoredButton = styled.button`
  background: ${props => props.dim};
  width: 35vmin;
  height: 35vmin;
  border: none;
  border-radius: ${props => props.borderRadius};
  .activated {
    background: ${props => props.bright};
  }
  :focus {
    outline: none;
  }
`;

const ColoredButton = props => <StyledColoredButton {...props} />;

export default ColoredButton;
