import React from 'react';
import { useState } from 'react';
import './registerForm.scss';

function RegisterForm(){
  let foodList = []
  const handleCheckbox = (e, s) => {
    if (e.target.checked) {
      foodList.push(s)
    }
    else {
      const index = foodList.indexOf(s)
      foodList.splice(index,1)
    }
  }

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
              
              <div className="input__group">
                <label htmlFor="">Select your Lunch</label>
                <div className='registerForm__food'>
                  <div className='registerForm__food-container'>
                    <div className="registerForm__food-img--one">
                      <img className='registerForm__food-img_block-image'  src="/src/assets/food/pasta_coriander_salad.png" alt="" />
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Pasta Coriander Salad")}/>
                      <div className='registerForm__food-img_block-title'>Pasta Coriander Salad</div>
                      
                    </div>
                    <div className="registerForm__food-img--two">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/pepperoni_pizza.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Pepperoni Pizza")}/>
                      <div className='registerForm__food-img_block-title'>Pepperoni Pizza</div>
                    </div>
                    <div className="registerForm__food-img--three">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/bacon_cheeseburger.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Bacon Cheeseburger")}/>
                      <div className='registerForm__food-img_block-title'>Bacon Cheeseburger</div>
                    </div>
                    <div className="registerForm__food-img--four">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/barbecued_salmon_and_fried_potatoes.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Barbecued Salmon and Fried Potatoes")}/>
                      <div className='registerForm__food-img_block-title'>Barbecued Salmon and Fried Potatoes</div>
                    </div>
                    <div className="registerForm__food-img--five">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/pork_meal.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Pork Meal")}/>
                      <div className='registerForm__food-img_block-title'>Pork Meal</div>
                    </div>
                    <div className="registerForm__food-img--six">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/meat_pasta.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Meat Pasta")}/>
                      <div className='registerForm__food-img_block-title'>Meat Pasta</div>
                    </div>
                    <div className="registerForm__food-img--seven">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/breakfast_feast.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Breakfast Feast")}/>
                      <div className='registerForm__food-img_block-title'>Breakfast Feast</div>
                    </div>
                    <div className="registerForm__food-img--eight">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/tofu_meal.png" alt="" />
                      
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Tofu Meal")}/>
                      <div className='registerForm__food-img_block-title'>Tofu Meal</div>
                    </div>
                    <div className="registerForm__food-img--nine">
                      <img className='registerForm__food-img_block-image' src="/src/assets/food/vegan_sausages.png" alt="" />
                      <input type="checkbox" className="registerForm__food-chkbox" onChange ={(e) => handleCheckbox(e, "Vegan Sausages")}/>
                      <div className='registerForm__food-img_block-title'>Vegan Sausages</div>
                    </div>
                  </div> 
                </div>
              </div>
              <select className='registerForm__input' name="food" />
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