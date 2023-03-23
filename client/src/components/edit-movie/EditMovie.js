export default function EditMovie() {
    return (
        <div className="add-movie">
            <h2 className="add-movie__title">Edit Movie</h2>
            <form action="#" className="add-movie__form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" name="year" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input type="text" id="genre" name="genre" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="actors">Actors</label>
                    <input type="text" id="actors" name="actors" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Directed By</label>
                    <input type="text" id="director" name="director" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={5}
                        required=""
                        defaultValue={""}
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