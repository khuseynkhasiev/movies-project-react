import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handlerSearchKeyDown = (event) => {
        if(event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handlerFilter = (event) => {
        this.setState({type: event.target.value})
    }

    render () {
        return <div className="row main__search">
            <div className="input-field col s12">
                <input
                    id="search"
                    type="search"
                    className="validate"
                    placeholder="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handlerSearchKeyDown}
                />
                <div className="main__search-radio">
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type-filter"
                                type="radio"
                                value="all"
                                onChange={this.handlerFilter}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type-filter"
                                type="radio"
                                value="movie"
                                onChange={this.handlerFilter}
                            />
                            <span>Movies</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type-filter"
                                type="radio"
                                value="series"
                                onChange={this.handlerFilter}
                            />
                            <span>Series</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="type-filter"
                                type="radio"
                                value="game"
                                onChange={this.handlerFilter}
                            />
                            <span>Game</span>
                        </label>
                    </p>
                </div>
                <button
                    className="btn"
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
                    Search
                </button>
            </div>
        </div>
    }
}
export default Search;