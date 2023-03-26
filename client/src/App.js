import { Routes, Route } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import MovieProvider from './context/MovieContext';

import AddMovie from './components/add-movie/AddMovie';
import Catalog from './components/catalog/Catlog';
import Details from './components/details/Details';
import EditMovie from './components/edit-movie/EditMovie';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';

function App() {
	return (
		<AuthProvider>
			<MovieProvider>
			<>
				<Navbar />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/add-movie' element={<AddMovie />} />
						<Route path='/edit-movie' element={<EditMovie />} />
						<Route path='/details/:id' element={<Details />} />
					</Routes>
				</main>
				<Footer />
			</>
			</MovieProvider>
		</AuthProvider>
	);
}

export default App;
