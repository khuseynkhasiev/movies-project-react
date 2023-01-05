import Movie from './Movie';
import './Movies.css';
function Movies({movies}) {
    return (
        <div className="movies">
            {movies.map((movie) => {
                return <Movie movie={movie} key={movie.imdbID}/>
            })}
        </div>
    )
}

export default Movies;