import React, { useEffect, useState } from 'react';
import SingleDonationCampaign from '../Single Donation Campaign/SingleDonationCampaign';

const DonationCampaign = () => {

    const [donationCampaign, setDonationCampaign] = useState([]);

    useEffect(()=>{
        fetch('donationCampaign.json')
        .then(res => res.json())
        .then(data => setDonationCampaign(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl mt-8'>This is Donation Campaign: {donationCampaign.length}</h1>
            <div className='grid mt-8 md:grid-cols-3 gap-3 lg:grid-cols-4'>
                {
                    donationCampaign.map( donation => 
                        <SingleDonationCampaign 
                            key={donation.id} 
                            donation={donation}
                        ></SingleDonationCampaign>)
                }
            </div>
        </div>
    );
};

export default DonationCampaign;