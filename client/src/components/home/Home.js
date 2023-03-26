import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export default function Home() {
    const { userId } = useContext(AuthContext);
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to JustWatch</h1>
                    <p>
                        Discover new movies, create your own list, and share your thoughts
                        with others.
                    </p>
                    <Link to="/catalog" className="btn btn-primary">
                        Explore Now
                    </Link>
                </div>
            </section>
            <section className="featured-section">
                <h2>Latest Movies</h2>
                <div className="movie-list">
                    <div className="movie">
                        <Link to="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                                alt="Movie Poster"
                            />
                            <h3>The Dark Knight</h3>
                        </Link>
                    </div>
                    <div className="movie">
                        <Link to="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                                alt="Movie Poster"
                            />
                            <h3>Avengers: Endgame</h3>
                        </Link>
                    </div>
                    <div className="movie">
                        <Link to="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpgg"
                                alt="Movie Poster"
                            />
                            <h3>Black Panther</h3>
                        </Link>
                    </div>
                </div>
            </section>
            {!userId &&
                <section className="create-section">
                    <h2>Create Your Own List</h2>
                    <p>Sign up now and start creating your own list of movies.</p>
                    <Link to="/register" className="btn btn-secondary">
                        Get Started
                    </Link>
                </section>
            }

        </>
    );
};