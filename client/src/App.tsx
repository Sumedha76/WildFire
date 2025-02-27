import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import NavBar from './pages/NavBar';
import ForestFireDetection from "./pages/ForestFireDetection";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forest-fire-detection" element={<ForestFireDetection />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;