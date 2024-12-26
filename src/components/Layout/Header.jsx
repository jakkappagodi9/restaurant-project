import React from 'react';
import { IoCartSharp } from 'react-icons/io5';

export default function () {
  return (
    <>
      <header
        className="p-3"
        style={{ backgroundColor: '#A2491C', color: 'white' }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h3>ReactMeals</h3>
            <button
              type="button"
              className="btn text-white ms-auto"
              style={{
                background: 'rgb(70, 28, 7)',
                borderRadius: '10px',
              }}
            >
              <IoCartSharp />
              your cart
              <button
                type="button"
                className="btn ms-auto text-white"
                style={{ background: '#A2491C', borderRadius: '12px' }}
              >
                0
              </button>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
