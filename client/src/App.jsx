import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// import {logo} from './assets'
// import { Home, Resources , Lab } from './page';
import Home from '../page/Home';
import Resources from '../page/Resources';
import Lab from '../page/Lab';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-5 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        {/* <img src={logo} alt="logo" className="w-14 object-contain" /> */}
      </Link>
      <ul>
      <li><Link to="/resources" className="font-inter font-medium bg-[#3BB143] text-white px-4 py-2 rounded-md"> View Resources </Link></li>
      <li><Link to="/lab" className="font-inter font-medium bg-[#3BB143] text-white px-4 py-2 rounded-md"> Lab test </Link></li>
      </ul>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
    </main>
    <footer className='w-full flex justify-between items-center bg-white text-s sm:px-8 px-2 py-3 border-b border-b-[#e6ebf4]'>
    <h6> Team Escape </h6>
    </footer>
  </BrowserRouter>
);

export default App;