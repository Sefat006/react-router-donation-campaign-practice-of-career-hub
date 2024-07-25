import React from 'react';
import { Link } from 'react-router-dom';

const SingleDonationCampaign = ({donation}) => {

    const {picture_link, id, text_color, category, card_bg, category_bg, title} = donation;
    return (
        <Link to={`/donation/${id}`} style={{
            backgroundColor: card_bg,
        }} className="card bg-base-100 shadow-xl">
  <figure>
    <img className='h-full w-full'
      src={picture_link}
      alt={title} />
  </figure>
  
  <div className="m-3">
  <p style={{background: category_bg, color: text_color}} className='text-left w-max px-2 rounded-md text-lg font-semibold'>{category}</p>
    <h2 style={{color: text_color}} className="card-title font-bold">{title}</h2>
  </div>
</Link>
    );
};

export default SingleDonationCampaign;