import React from 'react'
import "./Delivery.css"

const Delivery = () => {
  return (
    <div className="popup">
        <div className="top_section">
            <button className="close-btn">×</button>
            <h3 className="location">Choose your location</h3>
        </div>
        <p>
            Delivery options and delivery speeds may vary for different locations
        </p>
        <a href="https://www.amazon.co.za/a/addresses" className="manage-link">Manage address book</a>
        <hr />
        {/* <label htmlFor="city">Select a city nearest to you</label> */}
        <div className="select_secion">
        <select id="city">
        <option>Select a city nearest to you</option>
        <option>Johannesburg</option>
        <option>Cape Town</option>
        <option>Pretoria</option>
        <option>East London</option>
        <option>Bloemfontein</option>
        <option>Pietermaritzburg</option>
        <option>Durban</option>
        <option>Gqeberha</option>
        <option>Vereeniging</option>
        </select>
        </div>
        <div className="done_section">
            <button className="done-btn">Done</button>
        </div>
    
  </div>
  )
}

export default Delivery
