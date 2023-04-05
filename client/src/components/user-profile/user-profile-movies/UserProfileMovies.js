import { Link } from "react-router-dom";

export default function UserProfileMovies({
    imageUrl,
    title,
    year,
    _id
}) {
    return (
        <div className="movie-user-list">
            <img src={imageUrl} alt="Movie poster" />
            <h3>{title}</h3>
            <p>Year: {year}</p>
            <Link to={`/details/${_id}`} className="profile-details-link ">Details</Link>
        </div>
    );
}