import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Header from './layouts/ambiheader/Header';
import Hero_Section from './components/hero_section/Hero_Section'

import NewsCard from './components/cards/NewsCard';
import Video from './components/cards/Video';
import Footer from './layouts/footer/Footer';
import Career from './components/Career/Career';
import NextVision from './components/hero_section/NextVision';
import Home from './layouts/home/Home';
import Contact from './components/contact/Contact';
import Support from './components/Support/Support';
import Who from './layouts/ambiheader/who';
import Register from './components/Auth/Register'
import LoginPage from './components/Auth/Login'
import About from './components/contact/About';
import Feedback from './components/contact/Feedback';
import RequestService from './components/contact/RequesService';
import MediaContact from './components/contact/MediaContact';

function App() {
  return (
    <div className='' > 
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/support' element={<Support />} />
        <Route path='/who' element={<Who />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<About />} /> 
        <Route path="/web-site-feedback" element={<Feedback />} />
        <Route path='/request-service' element={<RequestService />} />
        <Route path='/media-contact' element={<MediaContact />} />
      </Routes>

      {/* <Video videoSrc="section_video.mp4" />
      <NewsCard />
      <Career />
      <Footer /> */}
    </div>
  );
}

export default App;
