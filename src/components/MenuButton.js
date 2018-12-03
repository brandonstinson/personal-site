import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMenuButton = styled.div`
    --button-size: ${props => props.size};
    --line-size: calc(var(--button-size) / 15);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: var(--button-size);
    height: var(--button-size);
    padding: var(--line-size) 0;
    border: solid var(--line-size) ${props => props.theme.offWhite};
    border-radius: calc(var(--line-size) * 2);
    .hamburger-line {
        width: 70%;
        height: var(--line-size);
        background-color: ${props => props.theme.offWhite};
    }
`;

const MenuButton = ({ size, id }) => (
    <StyledMenuButton size={size} id={id}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
    </StyledMenuButton>
);

MenuButton.propTypes = {
    size: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default MenuButton;
