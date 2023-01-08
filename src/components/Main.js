import './Main.css';
import Movies from "./Movies";
import React from 'react';
import Preloader from "./Preloader";
import Search from "./Search";

const APP_KEY = process.env.REACT_APP_APP_KEY;
class Main extends React.Component{
        state = {
            movies: [],
            loading: true,
        };
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${APP_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading: false}))
            .catch((date) => {
                console.log(date.error);
                this.setState({loading: false})
            })
    }

    searchMovies = (str, type) => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${APP_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading: false}))
            .catch((date) => {
                console.log(date.error);
                this.setState({loading: false})
            })
    }

    render() {
        return <main className={"main"}>
                <Search searchMovies={this.searchMovies} />
                {
                    this.state.loading ?
                        <Preloader />
                        :
                        (<Movies movies={this.state.movies}/>)
                }
            </main>
    }
}

export default Main;
