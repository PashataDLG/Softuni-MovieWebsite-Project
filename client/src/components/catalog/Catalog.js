import { useMovieContext } from "../../context/MovieContext";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const { movies } = useMovieContext();

    return (
        <>
            <h1 className="movie-ctlg-h1">Movie Catalog</h1>
            <div className="movies-container">
                {
                    movies.length > 0
                        ? movies.map(movie => <CatalogItem key={movie._id} {...movie} />)
                        : <div className="movie-ctlg">
                            <div className="movies-container"></div>
                            <h2 className="empty-catalog">No movies available at the moment</h2>
                        </div>
                }
            </div>
        </>
    );
}