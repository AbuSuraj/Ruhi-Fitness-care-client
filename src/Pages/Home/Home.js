import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Services from './Services.js/Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Services></Services>
          <div className='text-center my-10'>
          <Link to={'/allservices'} className='btn btn-primary '>See All Services</Link>
          </div>
        </div>
    );
};

export default Home;