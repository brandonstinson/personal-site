import React from 'react';
import styled from 'styled-components';

const StyledClock = styled.div`
    grid-area: clock;
    width: 80vw;
    height: 80vw;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 5rem;
    background-color: #baffc9;
`;

const Clock = () => (
    <StyledClock>
        <div className="cycle">Break</div>
        <div className="clock">25:00</div>
    </StyledClock>
);

export default Clock;
