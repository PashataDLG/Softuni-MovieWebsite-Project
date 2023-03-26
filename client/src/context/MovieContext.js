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
                alert(err);
            })
    }, []);

    const onCreateMovieSubmit = async (movieData) => {
        const result = await movieService.create(movieData);

        setMovies(state => [...state, result]);

        navigate('/catalog');
    };

    const contextValues = {
        movies,
        onCreateMovieSubmit,
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