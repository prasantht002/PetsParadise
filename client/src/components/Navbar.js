import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Login from './Login';
import Logout from './Logout';

export default function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const navItems = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/allpets'>All Pets</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/about'>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/contact'>Contact</Link>
      </li>
    </>
  );

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${sticky ? 'shadow-sm' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Paws</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <button className="btn btn-primary ms-2" onClick={() => { document.getElementById('my_modal_3').showModal() }}>Login</button>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
