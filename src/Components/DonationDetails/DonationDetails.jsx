import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredDonation } from '../Utility/LocalStorage';

const DonationDetails = ({}) => {

    const donationCampaigns = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const campaign = donationCampaigns.find(campaign => campaign.id === idInt)
    console.log(campaign, id)

    if (!campaign) {
        return <div>Campaign not found</div>;
    }

    //for toastify
    const handleDonation = () => {
        toast("The Donation is Done");
        // id diye call korte hbe
        saveStoredDonation(idInt); //eta na dile koyta donation deya hoyeche ota count hbe na and display o kora jabe na 
    }

    return (
        <div>
            <h1>This is The donation Details page: {idInt}</h1>
            

<div style={{ backgroundColor: campaign.card_bg }} class="h-max w-max rounded-lg p-2">
    <img class="w-full" src={campaign.picture_link} alt="" />
    <button style={{background: campaign.button_bg}} onClick={handleDonation} href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Donate {campaign.price}
        </button>
    <div class="p-5">
        <h5 style={{ color: campaign.text_color }} class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{campaign.title}</h5>
        <p style={{ color: campaign.text_color }} class="mb-3 font-normal text-gray-700 dark:text-gray-400">{campaign.description}</p>
        
    </div>
</div>
<ToastContainer />
        </div>
    );
};

export default DonationDetails;