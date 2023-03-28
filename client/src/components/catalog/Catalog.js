import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useMovieContext } from "../../context/MovieContext";

export default function Catalog() {
    const { movies } = useMovieContext();

    return (
        <>
            <h1 className="movie-ctlg-h1">Movie Catalog</h1>
            <div className="movies-container">
                <div class="movie-catalog">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                        alt="Movie poster" />
                    <h2>Movie Title</h2>
                    <p>Movie description</p>
                    <a href="#" class="details-link">Details</a>
                </div>
                <div class="movie-catalog">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                        alt="Movie poster" />
                    <h2>Movie Title</h2>
                    <p>Movie description</p>
                    <a href="#" class="details-link">Details</a>
                </div>
                <div class="movie-catalog">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                        alt="Movie poster" />
                    <h2>Movie Title</h2>
                    <p>Movie description</p>
                    <a href="#" class="details-link">Details</a>
                </div>
                <div class="movie-catalog">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                        alt="Movie poster" />
                    <h2>Movie Title</h2>
                    <p>Movie description</p>
                    <a href="#" class="details-link">Details</a>
                </div>
            </div>

            {/* will be showed if there are no movies */}

            {/* <div class="movie-ctlg">
                <div class="movies-container"></div>
                <h1 class="empty-movies hidden">No movies available at the moment</h1>
            </div> */}
        </>
    );
}