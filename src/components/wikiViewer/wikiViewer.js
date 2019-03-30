import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchResult from './searchResult';

import logo from '../../utils/images/projects/blue-wiki-logo.png';

const StyledWikiViewer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: 1rem;
  img {
    width: 300px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    > * {
      width: 300px;
      font-size: 1.25rem;
      padding: 0.5rem;
      border: 1px solid black;
      border-radius: 0.5rem;
    }
  }
  .results {
    display: grid;
    grid-gap: 1rem;
    > * {
      font-size: var(--text-size);
    }
  }
  @media (min-width: 800px) {
    form {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const WikiViewer = () => {
  const [searchText, setSearchText] = useState(``);
  const [data, setData] = useState([]);

  const handleChange = e => {
    setSearchText(e.target.value);
    sessionStorage.setItem(`wikiSearchText`, e.target.value);
  };

  const handleSearch = () => {
    if (!searchText) return;
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchText}&origin=*`)
      .then(results => results.json())
      .then(json => {
        const results = [];
        for (let i = 0; i < json[1].length; i++) {
          results.push({
            title: json[1][i],
            text: json[2][i],
            link: json[3][i],
          });
        }
        setData(results);
        sessionStorage.setItem(`wikiSearchResults`, JSON.stringify(results));
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch();
  };

  useEffect(() => {
    setSearchText(sessionStorage.getItem(`wikiSearchText`));
    setData(JSON.parse(sessionStorage.getItem(`wikiSearchResults`)));
  }, []);

  return (
    <StyledWikiViewer>
      <img src={logo} alt="Wikipedia Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Wikipedia"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        {data && data.map((item, index) => <SearchResult key={index} item={item} />)}
      </div>
    </StyledWikiViewer>
  );
};

export default WikiViewer;
