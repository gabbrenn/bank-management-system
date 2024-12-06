import React, { useState } from "react";
import axios from "axios";
import BankIcon from "../images/bank-flat.png";

export default function Profile() {
  const [accountNumber, setAccountNumber] = useState(""); // For search input
  const [accountDetails, setAccountDetails] = useState(null); // For fetched account details
  const [error, setError] = useState(null); // To handle errors

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.get(`http://localhost:8080/accounts/${accountNumber}`);
      setAccountDetails(response.data);
    } catch (err) {
      setError("Account not found or an error occurred.");
      setAccountDetails(null);
    }
  };

  return (
    <div>
      <div className="pb-2 d-flex justify-content-center align-items-center mb-4">
        <div className="mt-3" style={{ width: "100%", maxWidth: "800px" }}>Today:</div>
      </div>

      {/* Search Section */}
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="row">
            <div className="col-3">
              <label className="me-3">Account Number: </label>
            </div>
            <div className="col-9">
              <form onSubmit={handleSearch}>
                <div className="row">
                  <div className="col">
                    <input
                      type="search"
                      name="search"
                      className="form-control form-control-sm"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      placeholder="Enter account number"
                    />
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Account Details Section */}
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div
          className="mt-3 p-5 text-light"
          style={{ width: "100%", maxWidth: "800px", border: "1px solid black", backgroundColor: "darkblue" }}
        >
          <div className="d-flex justify-content-center">
            <img src={BankIcon} alt="Bank Icon" style={{ width: "50px", height: "auto" }} />
          </div>

          {error && (
            <div className="mt-3 text-danger text-center">
              <strong>{error}</strong>
            </div>
          )}

          {accountDetails ? (
            <div>
              <div>
                <h4>{accountDetails.customer_name}</h4>
                <hr />
              </div>
              <div className="mt-4 ms-5">
                <ul className="list-unstyled mt-3">
                  <li className="mt-3"><strong>Account Number:</strong> {accountDetails.acNumber}</li>
                  <li className="mt-3"><strong>Amount:</strong> {accountDetails.amount}</li>
                  <li className="mt-3"><strong>Adhar Number:</strong> {accountDetails.adharNumber}</li>
                  <li className="mt-3"><strong>Pan Number:</strong> {accountDetails.panNumber}</li>
                  <li className="mt-3"><strong>Account Type:</strong> {accountDetails.acType}</li>
                  <li className="mt-3"><strong>Email:</strong> {accountDetails.email}</li>
                  <li className="mt-3"><strong>Address:</strong> {accountDetails.address}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="mt-4 text-center">
              <h5>No account details to display</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
