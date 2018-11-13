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
        background-color: #ffdfba;
    }
    .circle {
        border: 1px solid black;
        border-radius: 50%;
    }
    .controls {
        display: flex;
        align-items: center;
    }
    .rocker {
        width: calc(var(--multiplier) * 50px);
        height: calc(var(--multiplier) * 50px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffba;
    }
    .time {
        margin: 0 10px;
        font-size: calc(2 * var(--text-size));
    }
    button {
        font-size: var(--text-size);
        background-color: inherit;
        border: none;
    }
    button:hover,
    .rocker:hover {
        cursor: pointer;
    }
    @media (min-width: 800px) {
        --multiplier: 1.25;
    }
    @media (min-width: 1400px) {
        --multiplier: 1.5;
    }
`;

const Session = ({ type }) => (
    <StyledSession>
        <div className={`${type} container center circle`}>
            <p>{type}</p>
            <div className="controls">
                <div className="rocker circle">-</div>
                <div className="time">10</div>
                <div className="rocker circle">+</div>
            </div>
            <button type="button">Start</button>
        </div>
    </StyledSession>
);

Session.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Session;
