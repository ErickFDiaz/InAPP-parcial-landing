import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import VehicleDetails from './components/VehicleDetails';
import QuoteResult from './components/QuoteResult';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/quote-result" element={<QuoteResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;