export default function Details() {
    return (
        <div className="movie-details">
            <div className="movie-details__info">
                <div className="movie-details__poster">
                    <img
                        src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                        alt="Movie poster"
                    />
                </div>
                <div className="movie-details__content">
                    <h2 className="movie-details__title">Avengers: Endgame</h2>
                    <p className="movie-details__description">
                        <strong>Description:</strong> Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum fermentum dolor nec tellus
                        consequat consectetur. Vestibulum quis magna nunc.{" "}
                    </p>
                    <p className="movie-details__genre">
                        <strong>Genre:</strong> Action, Fantasic, Thriller
                    </p>
                    <p className="movie-details__genre">
                        <strong>Cast:</strong> Robert Downey, Chris Hemsworth, Chris Evans
                        etc.
                    </p>
                    <p className="movie-details__genre">
                        <strong>Directed By:</strong> Joe Russo and Anthony Russo
                    </p>
                    <p className="movie-details__genre">
                        <strong>Year:</strong> 2020
                    </p>
                </div>
                <a href="#" class="btn-edit">Edit</a>
                <a href="#" class="btn-delete">Delete</a>
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