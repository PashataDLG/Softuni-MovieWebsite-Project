import { Link, useParams } from "react-router-dom";

import { useMovieContext } from "../../context/MovieContext";

export default function Details() {
    const { movieId } = useParams();
    const { movies } = useMovieContext();

    const movie = movies.find(movie => movie._id === movieId);

    return (
        <div className="movie-details">
            <div className="movie-details__info">
                <div className="movie-details__poster">
                    <img
                        src={movie.imageUrl}
                        alt="Movie poster"
                    />
                </div>
                <div className="movie-details__content">
                    <h2 className="movie-details__title">{movie.title}</h2>
                    <p className="movie-details__description">
                        <strong>Description:</strong> {movie.description}
                    </p>
                    <p className="movie-details__genre">
                        <strong>Genre:</strong> {movie.genre}
                    </p>
                    <p className="movie-details__genre">
                        <strong>Cast:</strong> {movie.actors}
                    </p>
                    <p className="movie-details__genre">
                        <strong>Directed By:</strong> {movie.director}
                    </p>
                    <p className="movie-details__genre">
                        <strong>Year:</strong> {movie.year}
                    </p>
                </div>
                <Link href="#" className="btn-edit">Edit</Link>
                <Link href="#" className="btn-delete">Delete</Link>
            </div>
            <div className="movie-details__comments">
                <h3 className="movie-details__comments-title">Comments</h3>
                <div className="movie-details__comments-list">
                    <div className="movie-details__comment">
                        <p className="movie-details__comment-user">User 1:</p>
                        <p className="movie-details__comment-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque id aliquet ex.
                        </p>
                    </div>
                    <div className="movie-details__comment">
                        <p className="movie-details__comment-user">User 2:</p>
                        <p className="movie-details__comment-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque id aliquet ex.
                        </p>
                    </div>
                </div>
                <form className="movie-details__comment-form">
                    <h4 className="movie-details__comment-form-title">Add a comment</h4>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}