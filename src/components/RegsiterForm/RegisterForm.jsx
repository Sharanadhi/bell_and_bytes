import { useState } from 'react';
import './registerForm.scss';
import { offers } from '../../data/offers';
function RegisterForm({courseName, courseDuration}) {
console.log(offers)
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setSelectedOffer(""); // Reset selected offer when product changes
  };

  const handleOfferChange = (e) => {
    setSelectedOffer(e.target.value);
  };

  const filteredOffers = offers.filter(offer => offer.offer_type === selectedProduct);

  const selectedOfferDetails = offers.find(offer => offer.offer_value === selectedOffer);

    

  return (<section className="registerForm">
    <div className='registerForm__card'>
          <div className="registerForm__card-header">
            <h1 className='registerForm__heading'>Register</h1>
          </div>
          <div className="registerForm__card-body">
            <form className="registerForm__form">
              <div className="form__section">
              <div className="input__group">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' name="name" className='registerForm__input'/>
              </div>

              <div className="input__group">
                <label htmlFor="">Email</label>
                <input type="text" name="email" placeholder='Email' className='registerForm__input'/>
              </div>
              
              <div className="input__group-course">
                <label htmlFor="">Course Name:</label>
                <label type="text" name="courseName" className='registerForm__course-details'>{courseName}</label>
              </div>

              <div className="input__group-course">
                <label htmlFor="">Course Duration:</label>
                <label type="text" name="courseDuration" className='registerForm__course-duration'>{courseDuration}</label>
              </div>
              
              <div className="input__group">
              <label htmlFor="">Product</label>
                <select name="product" className="registerForm__input" onChange={handleProductChange}>
                  <option value="">Select a product</option>
                  <option value="Mobility">Mobility</option>
                  <option value="Internet">Internet</option>
                  <option value="Tv">Tv</option>
                </select>
              </div>

              <div className='input__group'>
        <label htmlFor="">Offer</label>
        <select name="offer" className="registerForm__input" onChange={handleOfferChange}>
          <option value="">Select an offer</option>
          {filteredOffers.map((offer) => (
            <option key={offer.id} value={offer.offer_value}>{offer.price}</option>
          ))}
        </select>
      </div>
      
      {selectedOfferDetails && (
        <div className='card__container'>
          <div className='card'>
            <div className='card__header'>
              <h2>{selectedOfferDetails.offer_name}</h2>
              <p><del>{selectedOfferDetails.previous_price}</del></p>
              <h3>{selectedOfferDetails.price}</h3>
              <p>{selectedOfferDetails.additional_info}</p>
              <hr />
            </div>
            <div className='card__body'>
              <div>
                <p><b>{selectedOfferDetails.data}</b></p>
                <p>{selectedOfferDetails.data_description}</p>
              </div>
              <hr />
              <div>
                <ul>
                  {selectedOfferDetails.perks.map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
              </div>
              
            </form>
          </div>
          <div className="registerForm__card-footer">
            <button className='registerForm__button--cancel'>Cancel</button>
            <button className='registerForm__button--save'>Register</button>
          </div>
        </div>
  </section>)
}

export default RegisterForm