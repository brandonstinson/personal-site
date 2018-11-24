import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSearchResult = styled.div`
    background-color: #77aaff;
    color: black;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    a {
        color: inherit;
        text-decoration: none;
    }
    .title {
        color: ${props => props.theme.yellow};
        text-shadow: 1px 1px 0 rgb(0, 0, 0);
        font-size: 200%;
    }
`;

const SearchResult = ({ item }) => {
    const { title, text, link } = item;
    return (
        <StyledSearchResult>
            <a href={link}>
                <p className="title">{title}</p>
                <p className="text">{text}</p>
            </a>
        </StyledSearchResult>
    );
};

SearchResult.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
};

export default SearchResult;
