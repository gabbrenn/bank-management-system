import React from 'react';

export default function Transfer() {
  return (
    <div>
        <label className='ms-5 p-4'>ToDay</label>
        <hr className='ms-5'/>
    <div className="p-4 d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-header bg-dark text-white text-left">
          <label className="mb-0">Kota Bank</label>
        </div>
        <div className="card-body " style={{backgroundColor:"darkblue"}}>
          <form>
            <div className="mb-3">
              <label htmlFor="toAccount" className="form-label text-light">Enter Account Number</label>
              <input type="text" className="form-control" id="toAccount" />
            </div>
            <div className="mb-3 d-flex">
              <div className="flex-grow-1 me-2">
                <label htmlFor="amount" className="form-label text-light">Enter Amount</label>
                <input type="number" className="form-control" id="amount" />
              </div>
              <div className="align-self-end">
                <button type="submit" className="btn btn-light text-dark">Deposit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
