import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import logo from '../assets/logo'
// import { Home, Resources , Lab } from './page';
import Home from '../page/Home';
import Resources from '../page/Resources';
import Lab from '../page/Lab';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-5 py-4 border-b border-gray-300">
      <Link to="/">
        <h1 className="font-bold text-lg">Escape</h1>
      </Link>
      <nav>
        <ul className="flex items-center">
          <li>
            <Link to="/" className="font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resources" className="font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              View Resources
            </Link>
          </li>
          <li>
            <Link to="/lab" className="font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Lab Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8 bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
    </main>
    <footer className="w-full flex justify-between items-center bg-white text-sm sm:px-8 px-2 py-3 border-t border-gray-300">
      <p className="text-gray-700">© 2023 My Website. All rights reserved.</p>
      <p className="text-gray-700">Made by Team Escape</p>
    </footer>
  </BrowserRouter>
);

export default App;
