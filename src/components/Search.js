import React, { useState } from 'react';

function Search ({searchMovies}) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handlerSearchKeyDown = (event) => {
        if(event.key === 'Enter') {
            searchMovies(search, type);
        }
    }
    const handlerFilter = (event) => {
        setType(event.target.value)
    }
    return <div className="row main__search">
        <div className="input-field col s12">
            <input
                id="search"
                type="search"
                className="validate"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handlerSearchKeyDown}
            />
            <div className="main__search-radio">
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="type-filter"
                            type="radio"
                            value="all"
                            onChange={handlerFilter}
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
                            onChange={handlerFilter}
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
                            onChange={handlerFilter}
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
                            onChange={handlerFilter}
                        />
                        <span>Game</span>
                    </label>
                </p>
            </div>
            <button
                className="btn"
                onClick={() => searchMovies(search, type)}>
                Search
            </button>
        </div>
    </div>
}
export default Search;