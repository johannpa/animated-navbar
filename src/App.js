import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`side-nav ${isOpen ? 'side-nav--active' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>

        <a href="https://www.google.com">Google</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <a href="/">Privacy Policy</a>
        <div className="divider"></div>
        <a href="/">Dummy Link</a>
        <a href="https://www.amazon.fr">Amazon</a>
        <a href="/">Sign Up</a>
      </div>


      <div className="container">
        <h2>Welcome to my site</h2>
        <p>Example: Closable, animated side drawer navigation</p>

        <button className="open-button" onClick={toggleMenu}>
          &#9776; open menu
        </button>
      </div>
    </>
  );
}

export default App;
