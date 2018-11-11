import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSession = styled.div`
    --bgc: #ffdfba;
    --text-size: 4vw;
    font-size: var(--text-size);
    .work {
        grid-area: work;
    }
    .break {
        grid-area: break;
    }
    .container {
        width: 40vw;
        height: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: var(--bgc);
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
        width: 10vw;
        height: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffba;
    }
    .time {
        margin: 0 2vw;
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
