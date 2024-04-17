import React, { useState } from 'react';
import './RegisterCredit.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { BASE_API_URL } from '../../../config';
const RegisterNewCredits = ({ listingStartState, setActiveTab, isEditingListing, setIsEditingListing }) => {


  console.log(listingStartState)

  const [newListing, setNewListing] = useState(listingStartState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const creditTypes = [
    "Tree Stored Carbon",
    "Renewable Energy Credits",
    "Water Purification Offset",
    "Wind Energy",
    "Solar Energy",
    "Ocean Conservation Efforts",
    "Nature Reserve Projects",
    "Soil Sequestration",
    "Geothermal Energy",
    "Air Purification Projects",
    "Waste Management"
  ];


  async function handleSubmit(event) {
    event.preventDefault();


    let method
    let apiUrl


    isEditingListing ? apiUrl = `portfolio/${newListing._id}` : apiUrl = "portfolio/"
    isEditingListing ? method = "PATCH" : method = "POST"

    try {
      const response = await fetch(`${BASE_API_URL}/${apiUrl}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing)
      })


    } catch (err) {
      console.error(err)
    }
    setIsEditingListing(false)
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing({ ...newListing, [name]: value });
  };

  const handleAddMore = () => {
    setIsModalOpen(false);
  };

  const handleGoToListings = () => {
    setIsModalOpen(false);
    setActiveTab('currentListings');
  };

  return (
    <div>

      <div className='register-credits-form'>
        <form onSubmit={handleSubmit} className="form">

          <div className="input-group">
            <label htmlFor="title">Title of listing</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newListing.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="title">Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={newListing.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="numberOfCredits">Number of credits</label>
            <input
              type="number"
              id="numberOfCredits"
              name="credits"
              value={newListing.credits}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="pricePerCredit">Price per credit</label>
            <input
              type="number"
              id="pricePerCredit"
              name="price"
              value={newListing.price}
              onChange={handleInputChange}
              required
            />
          </div>


          <div className="input-group">
            <label htmlFor="pricePerCredit">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newListing.location}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="image url">Please paste an image URL</label>
            <input
              type="text"
              id="image Url"
              name="imageUrl"
              value={newListing.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>


          <div className="input-group">
            <label htmlFor="typeOfCredits">Type of credits</label>
            <select
              id="typeOfCredits"
              name="type"
              value={newListing.type}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose Type of Credits</option>
              {creditTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>




          <button type="submit" className="submit-button">Save</button>






        </form>

        <div className='imageDiv'>
          <h4> Listing image </h4>
          <img className="image" src={newListing.imageUrl} alt={newListing.imageAlt} />
        </div>
      </div>


      <ConfirmationModal
        isOpen={isModalOpen}
        onAddMore={handleAddMore}
        onGoToListings={handleGoToListings}
      />

    </div>
  );
};

export default RegisterNewCredits;
