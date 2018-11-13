import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledClock = styled.div`
    --multiplier: 1;
    grid-area: clock;
    width: calc(var(--multiplier) * 400px);
    height: calc(var(--multiplier) * 400px);
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: calc(5rem * var(--multiplier));
    background-color: #baffc9;
    @media (min-width: 800px) {
        --multiplier: 1.25;
    }
    @media (min-width: 1400px) {
        --multiplier: 1.5;
    }
`;

const Clock = ({ time, cycle }) => (
    <StyledClock>
        <div className="cycle">{cycle === 'work' ? 'Work' : 'Break'}</div>
        <div className="clock">{time}</div>
    </StyledClock>
);

Clock.propTypes = {
    time: PropTypes.number.isRequired,
    cycle: PropTypes.string.isRequired,
};

export default Clock;
