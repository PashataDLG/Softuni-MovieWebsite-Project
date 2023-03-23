export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="index.html">
                    <img
                        src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png"
                        alt="Logo"
                    />
                </a>
            </div>
            <div className="navbar-links">
                <a href="index.html" className="navbar-link">
                    Home
                </a>
                <a href="catalog.html" className="navbar-link">
                    Catalog
                </a>
                <a href="about.html" className="navbar-link">
                    About
                </a>
                <a href="login.html" className="btn btn-primary">
                    Login
                </a>
                <a href="login.html" className="btn btn-primary">
                    Register
                </a>
            </div>
            <button className="navbar-toggle">
                <span />
                <span />
                <span />
            </button>
        </nav>
    );
};