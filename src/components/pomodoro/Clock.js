import React from 'react';
import styled from 'styled-components';

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

const Clock = () => (
    <StyledClock>
        <div className="cycle">Break</div>
        <div className="clock">25:00</div>
    </StyledClock>
);

export default Clock;
