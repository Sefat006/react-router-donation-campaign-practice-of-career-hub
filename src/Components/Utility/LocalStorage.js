
const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

// shob kichu shes hole toastify button e saveStoredDonation() call kore diye aste hobe
const saveStoredDonation = id =>{
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find( donationId => donationId === id);
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonation))
    }
}

export {saveStoredDonation, getStoredDonation}