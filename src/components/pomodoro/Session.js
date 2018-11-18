import React, { Component } from 'react';
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

class Session extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        timeChangeFunction: PropTypes.func.isRequired,
    };

    state = {
        time: '',
    };

    componentDidMount = () => {
        const { type } = this.props;
        const time = type === 'work' ? '25' : '10';
        this.setState({ time });
    };

    handleChange = e => {
        this.setState({
            time: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { time } = this.state;
        const { type, timeChangeFunction } = this.props;
        timeChangeFunction(time, type);
    };

    render() {
        const { time } = this.state;
        const { type } = this.props;
        return (
            <StyledSession>
                <div className={type}>
                    <form className="container center circle" onSubmit={this.handleSubmit}>
                        <p>{type === 'work' ? 'Work' : 'Break'}</p>
                        <input
                            type="number"
                            name="time"
                            min="1"
                            max="60"
                            value={time}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Start</button>
                    </form>
                </div>
            </StyledSession>
        );
    }
}

export default Session;
