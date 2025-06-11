// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import Home from './pages/Home';
import Results from './pages/Results';
import CoursesPage from './pages/CoursesPage';
import Dashboard from './pages/Dashboard';
import JobsPage from "./pages/JobsPage";

function App() {
  return (
      <div className="flex flex-col min-h-screen font-sans bg-[#f4f7fa] text-gray-800">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>

  );
}

export default App;

