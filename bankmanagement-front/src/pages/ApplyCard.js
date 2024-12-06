import React from 'react';
import Chip from "../images/chip.png";

export default function ApplyCard() {
  return (
    <div className="container mt-3">
      {/* Header Section */}
      <label className="ms-5 p-4 fw-bold fs-4">ToDay</label>
      <hr className="ms-5" />

      {/* Application Form */}
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div
          className="p-3 fw-bold text-light"
          style={{
            width: "100%",
            maxWidth: "800px",
            border: "1px solid black",
            backgroundColor: "darkblue",
            borderRadius: "10px",
          }}
        >
          <form className="p-3">
            <div className="row g-3 align-items-end">
              {/* Account Number Field */}
              <div className="col-md-5">
                <label htmlFor="accountNumber" className="form-label">
                  Enter Account Number
                </label>
                <input
                  type="number"
                  id="accountNumber"
                  name="accountNumber"
                  className="form-control"
                  placeholder="e.g., 123456789"
                />
              </div>

              {/* Account Type Field */}
              <div className="col-md-5">
                <label htmlFor="accountType" className="form-label">
                  Account Type
                </label>
                <input
                  type="text"
                  id="accountType"
                  name="accountType"
                  className="form-control"
                  placeholder="e.g., Savings"
                />
              </div>

              {/* Submit Button */}
              <div className="col-md-2 text-center">
                <button type="submit" className="btn btn-secondary w-100">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Credit Card Display */}
      <div className="pb-2 d-flex justify-content-center align-items-center">
        <div className="row mt-5" style={{ width: "100%", maxWidth: "800px" }}>
          {/* Credit Card Front */}
          <div className="col">
            <div
              className="card shadow border-2 border-dark text-dark mb-3 p-4"
              style={{
                backgroundColor: "",
                color: "#ecf0f1",
                borderRadius: "15px",
              }}
            >
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Credit Card</p>
                <p className="fw-bold">Visa</p>
              </div>
              <div className="">
                <img
                  src={Chip}
                  alt="Chip Icon"
                  style={{ width: "50px", height: "auto" }}
                />
              </div>
              <h4 className="">Gab Vlad</h4>
              <h5>1234 5678 9876 5432</h5>
              <p>VALID THRU: 12/26</p>
            </div>
          </div>

          {/* Credit Card Back */}
          <div className="col">
            <div
              className="card shadow border-2 border-dark text-dark mb-3"
              style={{ borderRadius: "15px" }}
            >
              <div className="mt-2">
                <p className="text-center">Authorized Use Only</p>
              </div>
              <div className="p-3 bg-dark" style={{ height: "30px" }}></div>
              <div className="p-1 border m-3 ms-5 me-5 border-1 border-dark text-center">
                CVV: ***
              </div>
              <div className="px-3">
                <p className="small">
                  AUTHORIZED SIGNATURE - NOT TRANSFERABLE
                </p>
                <p className="small">
                  Not valid for payment in foreign countries without prior
                  approval. Use subject to terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
