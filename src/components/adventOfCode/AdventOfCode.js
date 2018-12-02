import React from 'react';
import styled from 'styled-components';

import Title from '../Title';
import DayCard from './DayCard';
import solutions from '../../data/adventOfCode/solutions';

const StyledAdventOfCode = styled.div`
    display: grid;
    grid-gap: 20px;
    justify-content: center;
    background-color: ${props => props.theme.offWhite};
    color: ${props => props.theme.black};
    padding: 40px;
`;

const AdventOfCode = () => (
    <StyledAdventOfCode>
        <Title title="Advent of Code 2018" />
        {solutions.map((solution, index) => (
            <DayCard key={index} solution={solution} />
        ))}
    </StyledAdventOfCode>
);

export default AdventOfCode;
