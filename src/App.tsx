
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import IndoCatering from './pages/IndoCatering';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/indo-catering" element={<IndoCatering />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;