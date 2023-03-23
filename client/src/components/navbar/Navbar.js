import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img
                        src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">
                    Home
                </Link>
                <Link to="/catalog" className="navbar-link">
                    Catalog
                </Link>
                <Link to="/add-movie" className="navbar-link">
                    Add movie
                </Link>
                <Link to="/login" className="btn btn-primary">
                    Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                    Register
                </Link>
                <Link to="/#" className="btn btn-primary">
                    Logout
                </Link>
            </div>           
        </nav>
    );
};