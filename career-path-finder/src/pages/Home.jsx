// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaChartLine, FaRoute } from 'react-icons/fa';
import '../assets/styles/home.css'; // External CSS

export default function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Discover Your <br /> Perfect Career Path with AI</h1>
          <p>Personalized suggestions based on your skills & interests</p>
          <Link to="/quiz" className="start-quiz-btn">Start Quiz</Link>
        </div>
        <div className="hero-image">
          <img src="/images/hero-placeholder.png" alt="Hero" />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <FaProjectDiagram className="icon" />
          <p>AI Matchmaking</p>
        </div>
        <div className="feature">
          <FaChartLine className="icon" />
          <p>Job Market Trends</p>
        </div>
        <div className="feature">
          <FaRoute className="icon" />
          <p>Learning Paths</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-box">
          <p>Coming soon: Real stories from people like you.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>Contact • Terms • Socials</p>
      </footer>

    </div>
  );
}
