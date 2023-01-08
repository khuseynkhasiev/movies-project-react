import Movie from './Movie';
import './Movies.css';
function Movies({movies = []}) {
    return (
        <div className="movies">
            {   movies.length ?
                movies.map((movie) => {
                return <Movie movie={movie} key={movie.imdbID}/>
            }) :
                <h4 className={"movies__title"}>Nothing found</h4>
            }
        </div>
    )
}

export default Movies;