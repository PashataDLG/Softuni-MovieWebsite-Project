import { createContext, useContext, useState } from "react";

import * as movieService from '../services/movieService'

export const MovieContext = createContext();

export default function MovieProvider({
    children,
}) {
    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        const result = await movieService.getAll();

        setMovies(result);
    };

    const contextValues = {
        movies,
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