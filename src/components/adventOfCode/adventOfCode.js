import React from 'react';
import styled from 'styled-components';

import Title from '../title';
import ContentContainer from '../contentContainer';
import DayCard from './dayCard';
import solutions from './solutions';

const StyledAdventOfCode = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

const AdventOfCode = () => (
  <React.Fragment>
    <Title title="Advent of Code 2018" />
    <ContentContainer>
      <StyledAdventOfCode>
        {solutions.map((solution, index) => (
          <DayCard key={index} solution={solution} />
        ))}
      </StyledAdventOfCode>
    </ContentContainer>
  </React.Fragment>
);

export default AdventOfCode;
