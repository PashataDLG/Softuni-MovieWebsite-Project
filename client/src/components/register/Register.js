import { Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export default function Register() {
    const { onRegisterSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        'email': '',
        'username': '',
        'userImg': '',
        'password': '',
        'repeatPassword': '',
    }, onRegisterSubmit);

    return (
        <div className="register-page">
            <form onSubmit={onSubmit}>
                <h2>Create an account</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values['email']}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values['username']}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Profile image</label>
                    <input
                        type="userImg"
                        id="userImg"
                        name="userImg"
                        value={values['userImg']}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values['password']}
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        value={values['repeatPassword']}
                        onChange={changeHandler}
                        required
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