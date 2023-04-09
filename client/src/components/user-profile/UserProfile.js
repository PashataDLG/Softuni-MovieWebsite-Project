import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMovieContext } from '../../context/MovieContext';
import * as userService from '../../services/userService';

import UserProfileMovies from './user-profile-movies/UserProfileMovies';

export default function UserProfile() {

	const { movies } = useMovieContext();
	const [user, setUser] = useState({});

	useEffect(() => {
		userService.getUserInfo()
			.then(result => {
				setUser(result);
			})
	}, []);

	const userMovies = user ? movies.filter(movie => movie._ownerId === user._id) : [];

	return (
		<div className="user-profile">
			<div className="user-info">
				<img src={user.userImg} alt="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
				<h1>{user.username}</h1>
				<p>Email: {user.email}</p>
			</div>
			<div className="user-movies">
				<h2>{user.username}'s Movies</h2>
				<div className="movie-user">
					{userMovies.length > 0
						? userMovies.map(movie => <UserProfileMovies key={movie._id} {...movie} />)
						: <div class="movie-ctlg">
							<div class="movies-container"></div>
							<h2 class="empt-movies">You haven't added any movies yet. Click <Link to='/add-movie'>here</Link> to add a movie.</h2>
						</div>
					}
				</div>
			</div>
		</div>
	);
};