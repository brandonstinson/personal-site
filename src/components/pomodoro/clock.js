import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledClock = styled.div`
  --multiplier: 1;
  grid-area: clock;
  width: calc(var(--multiplier) * 360px);
  height: calc(var(--multiplier) * 360px);
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #baffc9;
  > * {
    font-size: calc(5rem * var(--multiplier));
  }
  @media (min-width: 800px) {
    --multiplier: 1.25;
  }
  @media (min-width: 1400px) {
    --multiplier: 1.5;
  }
`;

const Clock = ({ cycle, minutes, seconds }) => (
  <StyledClock>
    <div>{cycle === `work` ? `Work` : `Break`}</div>
    <div>
      {minutes}:{seconds}
    </div>
  </StyledClock>
);

Clock.propTypes = {
  cycle: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired,
};

export default Clock;
