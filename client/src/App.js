import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Home />
			</main>
			<Footer />
		</>
	);
}

export default App;
