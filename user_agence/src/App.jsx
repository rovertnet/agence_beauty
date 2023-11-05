
import './App.css'
import About from './composants/About';
import Banner from './composants/Banner';
import Footer from './composants/Footer';
import Gallery from './composants/Gallery';
import Home from './composants/Home';
import Mission from './composants/Mission';
import Navbar from './composants/Navbar';
import Tarif from './composants/Tarif';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Mission />
      <Tarif />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
}

export default App
