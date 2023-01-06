import './Main.css';
import Movies from "./Movies";
import React from 'react';
import Preloader from "./Preloader";
import Search from "./Search";
class Main extends React.Component{
        state = {
            movies: [],
        };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2fc673cb&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}))
            .catch((date) => console.log(date.error))
    }

    searchMovies = (str, type) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2fc673cb&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search}))
            .catch((date) => console.log(date.error))
    }

    render() {
        return <main className={"main"}>
                <Search searchMovies={this.searchMovies} />
                {
                    this.state.movies.length ?
                        (<Movies movies={this.state.movies}/>) :
                        <Preloader />
                }
            </main>
    }
}

export default Main;