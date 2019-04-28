import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledScoreCard = styled.div`
  display: grid;
  grid-gap: 1rem;
  p {
    font-size: 1rem;
    text-align: center;
  }
  button {
    font-size: 0.5rem;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.gray};
    padding: 0.25rem;
  }
  @media (min-width: 800px) {
    p {
      font-size: 1.5rem;
    }
    button {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
  @media (min-width: 1200px) {
    p {
      font-size: 2rem;
    }
    button {
      font-size: 1rem;
      padding: 0.75rem;
    }
  }
`;

const ScoreCard = ({ score, level, lines, pauseFunc, newGameFunc }) => (
  <StyledScoreCard>
    <p>
      Score
      <br />
      {score}
      <br />
      <br />
      Level
      <br />
      {level}
      <br />
      <br />
      Lines
      <br />
      {lines}
    </p>
    <button type="button" onClick={pauseFunc}>
      Pause (P)
    </button>
    <button type="button" onClick={newGameFunc}>
      New Game (N)
    </button>
  </StyledScoreCard>
);

ScoreCard.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  lines: PropTypes.number.isRequired,
  pauseFunc: PropTypes.func.isRequired,
  newGameFunc: PropTypes.func.isRequired,
};

export default ScoreCard;
