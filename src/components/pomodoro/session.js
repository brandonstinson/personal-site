import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSession = styled.div`
  --multiplier: 1;
  --text-size: 1.5rem;
  font-size: calc(var(--text-size) * var(--multiplier));
  .work {
    grid-area: work;
  }
  .break {
    grid-area: break;
  }
  .container {
    width: calc(var(--multiplier) * 200px);
    height: calc(var(--multiplier) * 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffffba;
  }
  .circle {
    border: 1px solid black;
    border-radius: 50%;
  }
  .type {
    font-size: calc(var(--text-size) * 1.3);
  }
  .container input[type='number'] {
    font-size: calc(1.5 * var(--text-size));
    width: 100px;
  }
  button {
    font-size: var(--text-size);
    background-color: inherit;
    border: none;
  }
  button:hover {
    cursor: pointer;
  }
  @media (min-width: 800px) {
    --multiplier: 1.25;
  }
  @media (min-width: 1400px) {
    --multiplier: 1.5;
  }
`;

const Session = ({ type, time, timeChangeFunction, sessionChangeFunction }) => {
  const handleChange = e => {
    timeChangeFunction(type, e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    sessionChangeFunction(type);
  };

  return (
    <StyledSession>
      <div className={type}>
        <form className="container center circle" onSubmit={handleSubmit}>
          <div className="type">{type === `work` ? `Work` : `Break`}</div>
          <input type="number" name="time" min="1" max="60" value={time} onChange={handleChange} />
          <button type="submit">Start</button>
        </form>
      </div>
    </StyledSession>
  );
};

Session.propTypes = {
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sessionChangeFunction: PropTypes.func.isRequired,
  timeChangeFunction: PropTypes.func.isRequired,
};

export default Session;
