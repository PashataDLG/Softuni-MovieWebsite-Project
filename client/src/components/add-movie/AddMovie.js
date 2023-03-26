import { useForm } from "../../hooks/useForm";
import { useMovieContext } from "../../context/MovieContext";

const MovieFormKeys = {
    Title: 'title',
    Year: 'year',
    ImageUrl: 'imageUrl',
    Genre: 'genre',
    Actors: 'actors',
    Director: 'director',
    Description: 'description'
};

export default function AddMovie() {
    const { onCreateMovieSubmit } = useMovieContext();
    const { values, changeHandler, onSubmit } = useForm({
        [MovieFormKeys.Title]: '',
        [MovieFormKeys.Year]: '',
        [MovieFormKeys.ImageUrl]: '',
        [MovieFormKeys.Genre]: '',
        [MovieFormKeys.Actors]: '',
        [MovieFormKeys.Director]: '',
        [MovieFormKeys.Description]: '',
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
                        name={MovieFormKeys.Title}
                        value={values[MovieFormKeys.Title]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                        type="text"
                        id="year"
                        name={MovieFormKeys.Year}
                        value={values[MovieFormKeys.Year]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name={MovieFormKeys.ImageUrl}
                        value={values[MovieFormKeys.ImageUrl]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        name={MovieFormKeys.Genre}
                        value={values[MovieFormKeys.Genre]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input
                        type="text"
                        id="actors"
                        name={MovieFormKeys.Actors}
                        value={values[MovieFormKeys.Actors]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Directed By</label>
                    <input
                        type="text"
                        id="director"
                        name={MovieFormKeys.Director}
                        value={values[MovieFormKeys.Director]}
                        onChange={changeHandler}
                        required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        rows={5}
                        name={MovieFormKeys.Description}
                        value={values[MovieFormKeys.Description]}
                        onChange={changeHandler}
                        required=""
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