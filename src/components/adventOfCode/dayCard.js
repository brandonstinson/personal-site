import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

import '../../utils/css/prism.css';

const StyledDayCard = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;
  a {
    margin-right: 1rem;
    color: ${props => props.theme.blue};
    text-decoration: none;
  }
  .day {
    font-size: 2rem;
    text-align: center;
  }
  .links {
    font-size: 1.5rem;
  }
  .part {
    font-size: 1.5rem;
  }
  code,
  code > * {
    font-size: 0.75rem;
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
