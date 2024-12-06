import React, { useState } from "react";
import Chip from "../images/chip.png";

export default function Card() {
  const [cardInfo, setCardInfo] = useState({
    cardType: "Saving",
    cardNumber: "1234 5678 9101 1121",
    cvvNumber: "374",
    cardHolder: "Gabiro Vladimir",
    issueDate:"03/08/2022",
    expiryDate: "12/25",
    balance:"25000",
    
  });

  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    alert(`New PIN set to: ${pin}`);
  };

  return (
    
    <div className=" d-flex justify-content-center align-items-center">
        
        <div className="row mt-3" style={{width:"100%", maxWidth:"800px", minHeight: "100vh"}}>

            {/* Left Side */}
         <div className="col-md-8 p-3" style={{ border:"2px solid darkblue",borderRadius:"10px", minHeight: "100vh"}}>
         <label>Account No: </label>
         <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>

           {/* Credit Card Display */}
           <div
             className="card border-2  border-dark text-dark mb-3 p-3"
           >
            <div className="d-flex justify-content-between">
                <p>Credit Card</p>
                <p>Visa</p>
            </div>
            <div>
                <img src={Chip} alt="Bank Icon" style={{ width: "50px", height: "auto" }} />
            </div>
             <label>{cardInfo.cardNumber}</label>
             <label>{cardInfo.cardHolder}</label>
           </div>

           {/* Card Information */}
           <div className="mt-4">
             <ul className="list-unstyled mt-3">
               <li className="mt-3">Card Type: {cardInfo.cardType}</li>
               <li className="mt-3">Card Number: {cardInfo.cardNumber}</li>
               <li className="mt-3">Cvv Number: {cardInfo.cvvNumber}</li>
               <li className="mt-3">Issue Date: {cardInfo.issueDate}</li>
               <li className="mt-3">Expiry Date: {cardInfo.expiryDate}</li>
               <li className="mt-3">Balance: {cardInfo.balance}</li>
             </ul>
           </div>
         </div>

        {/* Right Side */}
         <div className="col-md-4">
           <div className="p-4" style={{border:"2px solid darkblue", borderRadius:"10px" ,minHeight: "100vh", backgroundColor:"white"}}>
            <strong className="text-center text-primary">Change Card Pin</strong>
            <hr/>
             <form onSubmit={handlePinSubmit}>
             <div className="mb-3">
                 <label htmlFor="pinInput">
                   Account Number
                 </label>
                 <input
                   type="password"
                   className="form-control"
                   id="pinInput"
                   value={pin}
                   onChange={handlePinChange}
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="pinInput">
                   Enter Old Pin
                 </label>
                 <input
                   type="password"
                   className="form-control"
                   id="pinInput"
                   value={pin}
                   onChange={handlePinChange}
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="confirmPinInput" className="form-label">
                   Enter New Pin
                 </label>
                 <input
                   type="password"
                   className="form-control"
                   id="confirmPinInput"
                 />
               </div>
               <button type="submit" className="btn btn-primary">
                 Change Pin
               </button>
             </form>
           </div>
         </div>



        </div>
    </div>
  );
}
