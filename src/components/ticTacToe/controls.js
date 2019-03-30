import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 2rem;
  > * {
    margin: 1rem 0;
  }
  button {
    font-size: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.offWhite};
  }
  .winner {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Controls = ({ winner, newGame }) => (
  <StyledControls>
    <div className="winner">
      {winner ? (winner === `Draw` ? `Draw` : `${winner} Wins!`) : `Play`}
    </div>
    <button type="button" onClick={newGame}>
      New Game
    </button>
  </StyledControls>
);

Controls.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  newGame: PropTypes.func.isRequired,
};

export default Controls;
