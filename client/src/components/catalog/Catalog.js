import { useContext } from "react";

import { useMovieContext } from "../../context/MovieContext";
import CatalogItem from "./catalog-item/CatalogItem";

export default function Catalog() {
    const { movies } = useMovieContext();

    return (
        <>
            <h1 className="movie-ctlg-h1">Movie Catalog</h1>
            <div className="movies-container">
                {movies.map(movie => <CatalogItem key={movie._id} {...movie}/>)}
            </div>

            {/* show if there are no movies */}

            {/* <div class="movie-ctlg">
                <div class="movies-container"></div>
                <h1 class="empty-movies hidden">No movies available at the moment</h1>
            </div> */}
        </>
    );
}