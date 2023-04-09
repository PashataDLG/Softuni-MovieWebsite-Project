import { useAuthContext } from "../../../context/AuthContext";
import { useForm } from "../../../hooks/useForm";

export default function Comments({
    onSubmitComment
}) {
    const { username } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        name: username,
        comment: '',
    }, onSubmitComment);

    return (
        <form className="movie-details__comment-form" onSubmit={onSubmit}>
            <h4 className="movie-details__comment-form-title">Add a comment</h4>
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    required
                    value={values.comment}
                    onChange={changeHandler}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};