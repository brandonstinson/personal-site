import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCenter = styled.div`
  --border-size: 5vmin;
  --center-size: 35vmin;
  position: absolute;
  top: calc(50vmin - var(--center-size) + var(--border-size));
  left: calc(50vmin - var(--center-size) + var(--border-size));
  width: var(--center-size);
  height: var(--center-size);
  background-color: #c6c6c6;
  border: var(--border-size) solid black;
  border-radius: 50%;
  display: grid;
  grid-gap: 2vmin;
  justify-content: center;
  justify-items: center;
  align-content: center;
  button {
    width: 10vmin;
    height: 5vmin;
    font-size: 3vmin;
    border: 1px solid black;
    border-radius: 1vmin;
  }
  .level {
    width: 7vmin;
    height: 6vmin;
    font-size: 5vmin;
    background-color: #3d0000;
    color: #da3434;
    text-align: center;
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .start-button {
    background-color: #dd4b3e;
  }
  .strict-button {
    background-color: #b2a326;
  }
  .strict-button.strict-on {
    background-color: #ffea37;
  }
`;

const Center = ({ level }) => (
  <StyledCenter>
    <button type="button" className="start-button">
      Start
    </button>
    <div className="level">{level}</div>
    <button type="button" className="strict-button">
      Strict
    </button>
  </StyledCenter>
);

Center.propTypes = {
  level: PropTypes.string.isRequired,
};

export default Center;
