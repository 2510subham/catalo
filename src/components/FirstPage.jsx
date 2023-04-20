import React, { useState } from 'react';
import store from '../redux/Reducer';
import { useNavigate } from 'react-router-dom';
const FirstPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Please enter name and email');
      return;
    }
    store.dispatch({ type: 'UPDATE_NAME', payload: { name } });
    store.dispatch({ type: 'UPDATE_EMAIL', payload: { email } });
    navigate('/layout')
  }
  return (
    <div className="container">
     
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Catalogue Management Application</h3>
                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                    <input type="text" className="form-control mt-4" id="username" placeholder='enter name' values={name} onChange={(e) => { setName(e.target.value) }} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control mt-4" id="password" placeholder='enter email' values={email} onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FirstPage;