import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const { userId } = useContext(AuthContext);

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
                {userId && (<>
                    <Link to="/logout" className="btn btn-primary">
                        Logout
                    </Link>
                </>)}
                {!userId && (<>
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-primary">
                        Register
                    </Link></>
                )}
            </div>
        </nav>
    );
};