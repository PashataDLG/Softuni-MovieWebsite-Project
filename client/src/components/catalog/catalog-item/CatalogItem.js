import { Link } from "react-router-dom";

export default function CatalogItem(props) {
    return (
        <div className="movie-catalog">
            <img src={props.imageUrl}
                alt="Movie poster" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={`/details/${props._id}`} className="details-link">Details</Link>
        </div>
    );
};