import './Movie.css';
function Movie({movie}) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = movie;

    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' ?
                            <img className="activator movie__img" src={'https://via.placeholder.com/468x533?text=Visit+Blogging.com+NowC/O https://placeholder.com/'} />
                            :
                            <img className="activator movie__img" src={poster} />
                    }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Movie;