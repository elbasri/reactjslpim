import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Me from './pages/me';
import Httpreq from './pages/httprequests';
//import Logo from './logo.svg';

//const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to React Tutorial</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/me'} className="nav-link">Profile</Link></li>
            <li><Link to={'/httpreq'} className="nav-link">Profile</Link></li>
          </ul>
        </nav>
        <hr />
      </div>
        <Routes>
          <Route path="/"> 
            <Route index element={<Home />} />
            <Route path="me" element={<Me />} />
            <Route path="httpreq" element={<Httpreq />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//export default root;