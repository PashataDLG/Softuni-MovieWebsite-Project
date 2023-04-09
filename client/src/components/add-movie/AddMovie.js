import { useForm } from "../../hooks/useForm";
import { useMovieContext } from "../../context/MovieContext";

// const MovieFormKeys = {
//     Title: 'title',
//     Year: 'year',
//     ImageUrl: 'imageUrl',
//     Genre: 'genre',
//     Actors: 'actors',
//     Director: 'director',
//     Description: 'description'
// };

export default function AddMovie() {
    const { onCreateMovieSubmit } = useMovieContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        year: '',
        imageUrl: '',
        genre: '',
        actors: '',
        director: '',
        description: '',
    }, onCreateMovieSubmit);

    return (
        <div className="add-movie">
            <h2 className="add-movie__title">Add Movie</h2>
            <form action="post" onSubmit={onSubmit} className="add-movie__form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name='title'
                        value={values.title}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        value={values.year}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={values.genre}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input
                        type="text"
                        id="actors"
                        name="actors"
                        value={values.actors}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Directed By</label>
                    <input
                        type="text"
                        id="director"
                        name="director"
                        value={values.director}
                        onChange={changeHandler}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows={5}
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Add Movie
                    </button>
                </div>
            </form>
        </div>
    );
}