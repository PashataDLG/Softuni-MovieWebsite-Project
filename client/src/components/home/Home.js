import { Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { useMovieContext } from "../../context/MovieContext";
import HomeItem from "./home-item/HomeItem";

export default function Home() {
    const { userId } = useAuthContext()
    const { movies } = useMovieContext();

    const latestMovies = movies.slice(-3);

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
                    {latestMovies.map(movie => <HomeItem key={movie._id} {...movie}/>)}
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