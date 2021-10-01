import {Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import View from './pages/view';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/view" element={<View/>}/>
    </Routes>
  );
}