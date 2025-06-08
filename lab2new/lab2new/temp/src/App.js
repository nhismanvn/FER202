// File: src/App.js
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import MenuSection from './components/MenuSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <MenuSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
