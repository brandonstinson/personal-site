import React from 'react';
import styled from 'styled-components';

const StyledSession = styled.div`
    --bgc: #ffdfba;
    .work {
        grid-area: work;
    }
    .break {
        grid-area: break;
    }
    .container {
        width: 20vw;
        height: 20vw;
        display: grid;
        justify-items: center;
        align-items: center;
        background-color: var(--bgc);
        color: ${props => props.theme.black};
    }
    .circle {
        border: 1px solid black;
        border-radius: 50%;
    }
    .controls {
        display: flex;
    }
    .rocker {
        width: 5vw;
        height: 5vw;
    }
`;

const Session = ({ type }) => (
    <StyledSession>
        <div className={`${type} container center circle`}>
            <p>{type.toUpperCase()}</p>
            <div className="controls">
                <div className="rocker circle">-</div>
                <div className="rocker circle">+</div>
            </div>
            <button type="button">START</button>
        </div>
    </StyledSession>
);

export default Session;
