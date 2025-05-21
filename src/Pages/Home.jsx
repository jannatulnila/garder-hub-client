import React from 'react';
import ExploreGardeners from './ExploreGardeners';
import Banner from '../Components/Banner';
import FeaturedGrdeners from './FeaturedGrdeners';
import TopTrendingTips from './TopTrendingTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <FeaturedGrdeners></FeaturedGrdeners> 
           <TopTrendingTips></TopTrendingTips>
        </div>
    );
};

export default Home;