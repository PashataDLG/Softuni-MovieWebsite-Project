import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as movieService from '../services/movieService'

export const MovieContext = createContext();

export default function MovieProvider({
    children,
}) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                setMovies(result);
            })
            .catch((err) => {
                alert('There is a problem: ' + err);
            })
    }, []);

    const onCreateMovieSubmit = async (movieData) => {
        try {
            const result = await movieService.create(movieData);

            setMovies(state => [...state, result]);

            navigate('/catalog');
        } catch (err) {
            alert('There is a problem: ' + err);
        }
    };

    const onEditMovieSubmit = async (movieData) => {
        try {
            const result = await movieService.edit(movieData, movieData._id);

            setMovies(state => state.map(movie => movie._id === movieData._id ? result : movie));

            navigate(`/details/${movieData._id}`);
        } catch (err) {
            alert('There is a problem: ' + err);
        }
    };

    const onDelete = async (movieId) => {
        try {
            await movieService.deleteMovie(movieId);

            setMovies(movies => movies.filter(movie => movie._id !== movieId));
        } catch (err) {
            alert('There is a problem: ' + err);
        }
    };

    const contextValues = {
        movies,
        onCreateMovieSubmit,
        onEditMovieSubmit,
        onDelete,
    }

    return (
        <>
            <MovieContext.Provider value={contextValues}>
                {children}
            </MovieContext.Provider>
        </>
    );
};

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    return context;
};