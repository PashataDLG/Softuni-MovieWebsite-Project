import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as commentService from "../../services/commentService";

import { useMovieContext } from "../../context/MovieContext";
import { useAuthContext } from "../../context/AuthContext";

import Comments from "./add-comment/AddComment";

export default function Details() {
    const [comments, setComments] = useState([]);
    const { movies, onDelete } = useMovieContext();
    const { userId } = useAuthContext();

    const { movieId } = useParams();
    const navigate = useNavigate();

    const movie = movies.find(movie => movie._id === movieId);

    useEffect(() => {
        commentService.getComments(movieId)
            .then(res => {
                setComments(res);
            })
            .catch((err) => {
                alert('There is a problem: ' + err);
            })
    }, [movieId]);

    const onClickDelete = async () => {
        const result = window.confirm(`Are you sure you want to delete ${movie.title}`);

        if (result) {
            await onDelete(movieId);
            navigate('/catalog');
        } else {
            navigate(`/details/${movieId}`);
        }
    };

    const onSubmitComment = async (comment) => {
        try {
            const newComment = await commentService.addComment(movieId, comment);
            setComments(prevComments => [...prevComments, newComment]);
        } catch (err) {
            alert('There is a problem: ' + err);
        }
    };

    if (!movie) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    };

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
                {
                    userId === movie._ownerId ? (
                        <div className="movie-details__actions">
                            <Link to={`/edit-movie/${movie._id}`} className="btn-edit">Edit</Link>
                            <button className="btn-delete" onClick={onClickDelete}>Delete</button>
                        </div>
                    ) : null
                }
            </div>
            <div className="movie-details__comments">
                <h3 className="movie-details__comments-title">Comments: </h3>
                <div className="movie-details__comments-list">
                    {comments.length > 0
                        ? comments.map(comment => {
                            return (
                                <div className="movie-details__comment" key={comment._id}>
                                    <p className="movie-details__comment-user">{comment.comment.name}:</p>
                                    <p className="movie-details__comment-text">
                                        {comment.comment.comment}
                                    </p>
                                </div>
                            )
                        })
                        : <h2 className="no-commentsh2">No comments yet</h2>}
                </div>
                {userId && <Comments onSubmitComment={onSubmitComment} />}
            </div>
        </div>


    );
}