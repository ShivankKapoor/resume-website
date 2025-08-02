import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import LeoImg from '../../Assets/Leo.webp';

const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <div className="notfound-status">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <img src={LeoImg} alt="Leo - My dog" className="notfound-image" />
        <p className="notfound-text">We couldn't fetch that page</p>
        <Link to="/" className="notfound-link">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
