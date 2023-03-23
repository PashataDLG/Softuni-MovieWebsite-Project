import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register-page">
            <form>
                <h2>Create an account</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required="" />
                </div>
                <div className="form-group">
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input
                        type="password"
                        id="repeat-password"
                        name="repeat-password"
                        required=""
                    />
                </div>
                <button type="submit">Register</button>
                <p className="register-p">
                    <span>You have an account?</span>{" "}
                    <Link to="/login" className="hovered">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};