import React, { useState } from "react";
import BankIcon from "../images/bank-flat.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Account() {
  let navigate = useNavigate();
  const [account, setAccount] = useState({
    acType: "",
    panNumber: "",
    acNumber: "",
    customerName: "",
    address: "",
    adharNumber: "",
    phoneNumber: "",
    email: "",
    ifsc: "",
    amount: "",
  });

  const {
    acType,
    panNumber,
    acNumber,
    customerName,
    address,
    adharNumber,
    phoneNumber,
    email,
    ifsc,
    amount,
  } = account;

  const onInputChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/account", account);
    navigate("/");
  };

  return (
    <div>
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div className="mt-3" style={{width:"100%", maxWidth:"800px"}}>Today:</div>
      </div>
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div className="p-2 fw-bold" style={{width:"100%", maxWidth:"800px", border: "2px solid black"}}>
          Account Panel || Create New Account
        </div>
      </div>
    <div className="p-4 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="p-3" style={{ width: "100%", maxWidth: "800px", border: "2px solid black" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-cark">Pass Book</h5>
            <img src={BankIcon} alt="Bank Icon" style={{ width: "50px", height: "auto" }} />
            <h5 className="text-dark">Kota Bank</h5>
          </div>
          <form onSubmit={onSubmit}>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="acType" className="form-label">Account Type</label>
                  <input type="text" name="acType" value={acType} onChange={onInputChange} className="form-control form-control-sm" id="acType" placeholder="Enter account type" />
                </div>
                <div className="mb-3">
                  <label htmlFor="panNumber" className="form-label">PAN Number</label>
                  <input type="number" name="panNumber" value={panNumber} onChange={onInputChange} className="form-control form-control-sm" id="panNumber" placeholder="Enter PAN number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="acNumber" className="form-label">Account Number</label>
                  <input type="number" name="acNumber" value={acNumber} onChange={onInputChange} className="form-control form-control-sm" id="acNumber" placeholder="Enter account number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="customerName" className="form-label">Customer Name</label>
                  <input type="text" name="customerName" value={customerName} onChange={onInputChange} className="form-control form-control-sm" id="customerName" placeholder="Enter customer name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="paddress" className="form-label">Permanent Address</label>
                  <input type="text" name="address" value={address} onChange={onInputChange} className="form-control form-control-sm" id="paddress" placeholder="Enter permanent address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="adharNumber" className="form-label">Adhar Number</label>
                  <input type="number" name="adharNumber" value={adharNumber} onChange={onInputChange} className="form-control form-control-sm" id="adharNumber" placeholder="Enter Aadhar number" />
                </div>
              </div>
              {/* Right Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <input type="tel" name="phoneNumber" value={phoneNumber} onChange={onInputChange} className="form-control form-control-sm" id="phoneNumber" placeholder="Enter phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" value={email} onChange={onInputChange} className="form-control form-control-sm" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="ifsc" className="form-label">IFSC Code</label>
                  <input type="text" name="ifsc" value={ifsc} onChange={onInputChange} className="form-control form-control-sm" id="ifsc" placeholder="Enter IFSC code" />
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">Amount</label>
                  <input type="number" name="amount" value={amount} onChange={onInputChange} className="form-control form-control-sm" id="amount" placeholder="Enter amount" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary fw-bold btn-sm mt-3 form-control">Create Account</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
