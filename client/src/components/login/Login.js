import { Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Login() {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        'email': '',
        'password': '',
    }, onLoginSubmit);

    return (
        <div className="login-page">
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="your_email@gmail.com"
                    value={values['email']}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values['password']}
                    onChange={changeHandler}
                    required />
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