import { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as movieService from '../../services/movieService';
import { useMovieContext } from "../../context/MovieContext";
import { useForm } from "../../hooks/useForm";


export default function EditMovie() {
    const { movieId } = useParams();
    const { onEditMovieSubmit } = useMovieContext();

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        year: '',
        imageUrl: '',
        genre: '',
        actors: '',
        director: '',
        description: '',
    }, onEditMovieSubmit);

    useEffect(() => {
        movieService.getOne(movieId)
            .then(result => {
                changeValues(result);
            });
    }, [movieId])


    return (
        <div className="add-movie">
            <h2 className="add-movie__title">Edit Movie</h2>
            <form action="POST" className="add-movie__form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text"
                        id="year"
                        name="year"
                        value={values.year}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image</label>
                    <input type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input type="text"
                        id="genre"
                        name="genre"
                        value={values.genre}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input type="text"
                        id="actors"
                        name="actors"
                        value={values.actors}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Directed By</label>
                    <input type="text"
                        id="director"
                        name="director"
                        value={values.director}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={values.description}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Edit Movie
                    </button>
                </div>
            </form>
        </div>
    );
}