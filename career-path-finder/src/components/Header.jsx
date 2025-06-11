import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png' // <-- Correct import

export default function Header() {
  return (
    <header className="bg-teal-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold">Career Path Finder</h1>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/quiz" className="hover:underline">Start Quiz</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
        </nav>
      </div>
    </header>
  );
}
