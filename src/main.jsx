import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Header from './Components/Header/Header.jsx';
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donated',
        loader: ()=> fetch('donationCampaign.json'),
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id', // here '/{doesn't matter the name, Link er to er sathe match holei hobe}/id'
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('donationCampaign.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
