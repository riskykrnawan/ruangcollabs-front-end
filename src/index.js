/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import App from './App';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Setting from './components/setting';
import Profile from './components/profile';
import Upload from './components/upload';
import Project from './components/project';

fetch('http://localhost:5000/register')
  .then((response) => response.json())
  .then((data) => console.log(data));

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="setting" element={<Setting />} />
      <Route path="profile" element={<Profile />} />
      <Route path="upload" element={<Upload />} />
      <Route path="project" element={<Project />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
