export default function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to JustWatch</h1>
                    <p>
                        Discover new movies, create your own list, and share your thoughts
                        with others.
                    </p>
                    <a href="catalog.html" className="btn btn-primary">
                        Explore Now
                    </a>
                </div>
            </section>
            <section className="featured-section">
                <h2>Latest Movies</h2>
                <div className="movie-list">
                    <div className="movie">
                        <a href="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                                alt="Movie Poster"
                            />
                            <h3>The Dark Knight</h3>
                        </a>
                    </div>
                    <div className="movie">
                        <a href="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                                alt="Movie Poster"
                            />
                            <h3>Avengers: Endgame</h3>
                        </a>
                    </div>
                    <div className="movie">
                        <a href="#">
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpgg"
                                alt="Movie Poster"
                            />
                            <h3>Black Panther</h3>
                        </a>
                    </div>
                </div>
            </section>
            <section className="create-section">
                <h2>Create Your Own List</h2>
                <p>Sign up now and start creating your own list of movies.</p>
                <a href="register.html" className="btn btn-secondary">
                    Get Started
                </a>
            </section>
        </>
    );
};