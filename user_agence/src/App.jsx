
import './App.css'
import About from './composants/About';
import Banner from './composants/Banner';
import Footer from './composants/Footer';
import Gallery from './composants/Gallery';
import Home from './composants/Home';
import Mission from './composants/Mission';
import Navbar from './composants/Navbar';
import Service from './composants/Service';
import Tarif from './composants/Tarif';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Mission />
      <Service />
      <Tarif />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
}

export default App
