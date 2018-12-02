import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

import '../../css/prism.css';

const StyledDayCard = styled.div`
    display: grid;
    grid-gap: 10px;
    a {
        margin-right: 20px;
        color: ${props => props.theme.blue};
        text-decoration: none;
    }
    .day {
        font-size: 3rem;
        text-align: center;
    }
    .links {
        font-size: 1.5rem;
    }
    .part {
        font-size: 2rem;
    }
    .code {
        background-color: #999;
        border-radius: 3px;
        font-family: courier, monospace;
        padding: 0 3px;
    }
`;

class DayCard extends Component {
    static propTypes = {
        solution: PropTypes.instanceOf(Object).isRequired,
    };

    componentDidMount = () => {
        Prism.highlightAll();
    };

    render() {
        const { solution } = this.props;
        return (
            <StyledDayCard>
                <div className="day">{solution.title}</div>
                <div className="links">
                    <a href={solution.link}>Link</a>
                    <a href={solution.dataLink}>Input</a>
                </div>
                <div className="part">Part 1</div>
                <div className="answer">{`Answer: ${solution.part1.answer}`}</div>
                <pre>
                    <code className="language-javascript">{solution.part1.code}</code>
                </pre>
                <div className="part">Part 2</div>
                <div className="answer">{`Answer: ${solution.part2.answer}`}</div>
                <pre>
                    <code className="language-javascript">{solution.part2.code}</code>
                </pre>
            </StyledDayCard>
        );
    }
}

export default DayCard;
