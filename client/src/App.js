import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/style.css'
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Books from './pages/Books';
import Contribute from './pages/Contribute';
import Notes from './pages/Notes';
import PYQs from './pages/PYQs';

// Notes and books - Post request and form 
// Search functionality - basic, specific
// specific -> / all, /Books, books, /Notes, notes, /PYQs, pyqs... data: word
// user registration and login - code
// basic ui changes and add-on fuctionalities
// coins/token system initally +5, -1 for download, +1 for upload

function App() {
  console.log(window.location.pathname);
  return (
    <div>
      {/* Using BrowserRouter instead of HashRouter */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/PYQs" element={<PYQs />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Contribute" element={<Contribute />} />
          {/* <Route path="/Contribute" element={<Contribute/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
