import React from 'react';
import Banner from '../Banner/Banner';
import backgroundImage from '../../assets/Rectangle 4287.png'
import DonationCampaign from '../Donation Campaign/DonationCampaign';


const Home = () => {
    return (
        <div className='mt-16 text-center justify-center'>
            <Banner></Banner>
            <DonationCampaign></DonationCampaign>
        </div>
    );
};

export default Home;