import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Wishlist from './pages/Wishlist';
import Footer from './Components/Footer';
import About from './pages/About';
import RoomDetails from './pages/Roomdetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<Book />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/room-details' element={<RoomDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
