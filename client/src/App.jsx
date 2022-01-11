import './App.css';
import { Footer, Navbar, Services, Tranactions, Welcome } from './Components';


function App() {
  return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar></Navbar>
				<Welcome></Welcome>
			</div>
			<Services></Services>
			<Tranactions></Tranactions>
			<Footer></Footer>
		</div>
	);
}

export default App
