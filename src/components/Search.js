import React, {useState} from 'react';

class Search extends React.Component {
    state = {
        search: '',
    }

    handleSearchKeyDown = (event) => {
        if(event.key == 'Enter') {
            this.props.searchMovies(this.state.search);
        }
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
                    onKeyDown={this.handleSearchKeyDown}
                />
                <button
                    className="btn"
                    onClick={event => this.props.searchMovies(this.state.search)}>
                    Search
                </button>
            </div>
        </div>
    }
}
export default Search;