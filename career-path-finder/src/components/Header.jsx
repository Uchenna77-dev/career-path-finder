import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png' // <-- Correct import

export default function Header() {
  return (
    <header className="bg-teal-600 text-white p-4 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Site Logo" className="h-10 mr-2" />
          <h1 className="text-xl font-bold">Career Path Finder</h1>
        </div>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/quiz">Start Quiz</Link>
        </nav>
      </div>
    </header>
  )
}
