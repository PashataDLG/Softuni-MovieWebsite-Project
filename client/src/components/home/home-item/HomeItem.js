import { Link } from "react-router-dom";

export default function HomeItem({
    _id,
    imageUrl,
    title,
}) {
    return (
        <div className="movie">
            <Link to={`/details/${_id}`}>
                <img src={imageUrl} alt="Movie Poster" />
            </Link>
            <Link to={`/details/${_id}`}>
                <h3>{title}</h3>
            </Link>
        </div>
    );
};