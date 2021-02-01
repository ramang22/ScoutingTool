import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="container justify-content-center">


        <div className="row ">
          <div className="form-group">
            TOP
          </div>
          <div className="input-group form-group">
            <input type="text" placeholder="Top laner username" aria-label="Top laner username" />
            <div className="input-group-append">
              <select className="form-select" aria-label="Default select example">
                <option value="eun1">EUNE</option>
                <option value="euw1">EUW</option>
                <option value="na1">NA</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            TOP
          </div>
          <div className="input-group form-group">
            <input type="text" placeholder="Top laner username" aria-label="Top laner username" />
            <div className="input-group-append">
              <select className="form-select" aria-label="Default select example">
                <option value="eun1">EUNE</option>
                <option value="euw1">EUW</option>
                <option value="na1">NA</option>
              </select>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default App;
