import React from 'react';
import PropTypes from 'prop-types';

const ScoreCard = ({ score, level, lines }) => (
    <div>
        <p>{`Score: ${score}`}</p>
        <p>{`Level: ${level}`}</p>
        <p>{`Lines: ${lines}`}</p>
    </div>
);

ScoreCard.propTypes = {
    score: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    lines: PropTypes.number.isRequired,
};

export default ScoreCard;
