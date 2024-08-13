import React from 'react';
import './HomePage.css'; 
import PortfolioList from '../components/PortfolioList';
import portfolioIcon from '../images/portfolio (3).png';

const HomePage = () => {
  return (
    <div className="container">
      <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#333', fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', letterSpacing: '1px' }}>
        Art Portfolio 
        <img src={portfolioIcon} alt='Art Portfolio' style={{ width: '30px', height: '30px', marginLeft: '10px', verticalAlign: 'middle' }} />
      </h1>
      <div className="container2"> <PortfolioList /></div>
    </div>
   
  );
};

export default HomePage;