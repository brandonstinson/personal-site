import React, { Component } from 'react';
import styled from 'styled-components';

import SearchResult from './SearchResult';
import logo from '../../images/projects/blue-wiki-logo.png';

const StyledWikiViewer = styled.div`
    --multiplier: 0.5;
    --text-size: calc(2rem * var(--multiplier));
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-gap: 20px;
    padding: 40px;
    background-color: ${props => props.theme.offWhite};
    color: ${props => props.theme.black};
    h1 {
        font-size: calc(var(--text-size) * 3);
    }
    .search-container {
        display: flex;
    }
    .search-item {
        font-size: var(--text-size);
        padding: 5px;
        border: solid 1px black;
        border-radius: 5px;
        margin: 0 5px;
    }
    .results {
        display: grid;
        grid-gap: 20px;
        > * {
            font-size: var(--text-size);
        }
    }
    @media (min-width: 700px) {
        --multiplier: 0.6;
    }
    @media (min-width: 1000px) {
        --multiplier: 0.7;
    }
`;

class WikiViewer extends Component {
    state = {
        inputText: '',
        resultsReturned: false,
        data: [],
    };

    componentDidMount = () => {
        const locallyStoredValue = sessionStorage.getItem('wikiSearchInput');
        if (locallyStoredValue) {
            this.setState({ inputText: locallyStoredValue }, this.handleSearch);
        }
    };

    handleChange = e => {
        this.setState({
            inputText: e.target.value,
        });
    };

    handleSearch = () => {
        const { inputText } = this.state;
        fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${inputText}&origin=*`)
            .then(results => results.json())
            .then(json => {
                const data = [];
                for (let i = 0; i < json[1].length; i++) {
                    data.push({
                        title: json[1][i],
                        text: json[2][i],
                        link: json[3][i],
                    });
                }
                sessionStorage.setItem('wikiSearchInput', inputText);
                this.setState({ data, resultsReturned: true });
            });
    };

    render() {
        const { inputText, resultsReturned, data } = this.state;
        return (
            <StyledWikiViewer>
                <h1>WikiViewer</h1>
                <img src={logo} alt="Wikipedia Logo" />
                <div className="search-container">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="search-item"
                        placeholder="What are you interested in learning about?"
                        size="30"
                        value={inputText}
                        onChange={this.handleChange}
                    />
                    <button type="button" className="search-item" onClick={this.handleSearch}>
                        Search
                    </button>
                </div>
                <div className="results">
                    {resultsReturned &&
                        data.map((item, index) => <SearchResult key={index} item={item} />)}
                </div>
            </StyledWikiViewer>
        );
    }
}

export default WikiViewer;
