import React, { useState } from 'react';
import './RegisterCredit.css';

const RegisterNewCredits = ({ onAddCredit }) => {
  const [newCredit, setNewCredit] = useState({
    numberOfCredits: '',
    pricePerCredit: '',
    typeOfCredits: '',
    verificationAgency: '',
    verificationDocuments: null
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCredit(newCredit);
    // Reset form fields
    setNewCredit({ 
      numberOfCredits: '', 
      pricePerCredit: '', 
      typeOfCredits: '', 
      verificationAgency: '', 
      verificationDocuments: null 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCredit({ ...newCredit, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewCredit({ ...newCredit, verificationDocuments: e.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="register-credits-form">
      <div className="input-group">
        <label htmlFor="numberOfCredits">Number of credits</label>
        <input
          type="number"
          id="numberOfCredits"
          name="numberOfCredits"
          value={newCredit.numberOfCredits}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="pricePerCredit">Price per credit</label>
        <input
          type="number"
          id="pricePerCredit"
          name="pricePerCredit"
          value={newCredit.pricePerCredit}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="typeOfCredits">Type of credits</label>
        <select
          id="typeOfCredits"
          name="typeOfCredits"
          value={newCredit.typeOfCredits}
          onChange={handleInputChange}
        >
          <option value="">Choose Type of Credits</option>
          {creditTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>
      {/* ...other input fields and the file input... */}
      <button type="submit" className="submit-button">Register Credit</button>
    </form>
  );
};

export default RegisterNewCredits;
