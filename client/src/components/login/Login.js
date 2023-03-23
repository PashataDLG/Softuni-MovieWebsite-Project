import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login-page">
            <form>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required="" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit">Login</button>
                <p className="login-p">
                    <span>Don't have an account?</span>{" "}
                    <Link to="/register" className="hovered">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}