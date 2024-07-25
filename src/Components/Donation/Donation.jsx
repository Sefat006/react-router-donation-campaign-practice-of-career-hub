import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../Utility/LocalStorage';
import SingleDonationCampaign from '../Single Donation Campaign/SingleDonationCampaign';


// # for showing how many donation has given:
// 1. local storage e save korte hobe id with null array
// 2. we have to getStoredId and then SaveStoredId and export them
// 3. then we have to go to the page where we can see all the donation and single and plural variable rakhte hbe (Page: Donation)
// 4. then we have to call the getStoredDonation() in Donation page and then call the saveStoredDonation(intId) in the toastify button;


const Donation = () => {
    
    const donations = useLoaderData(); // plural variable;

    const [appliedDonations, setAppliedDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);

    useEffect( () => {
        const storedDonationIds = getStoredDonation();
        if(donations.length > 0) {
            const donated = []; // empty array declare korte hbe;
            for ( const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id);
                if ( donation ) {
                    donated.push(donation); // empty array te single donation tare pass kore dite hobe;
                }

                setAppliedDonations(donated);
                setDisplayDonations(donated);
            }
        }
    }, [donations])

    return (
        <div>
            <h1 className='text-center mt-5 mb-8'>this is donation component: {appliedDonations.length}</h1>
            <div className='grid grid-cols-2 gap-5'>
                {
                    displayDonations.map( donation => <SingleDonationCampaign key={donation.id} donation={donation}></SingleDonationCampaign> )
                }

            </div>
        </div>
    );
};

export default Donation;