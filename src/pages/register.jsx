import React, { useState } from 'react';
import Layout from '../components/layout';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch('http://127.0.0.1:8001/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, you can redirect or show a success message
        console.log('Registration successful:', data);
      } else {
        // Registration failed, handle the error
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <Layout title='sample | Register' content='Register page'>
        <div
          style={{
            backgroundColor: 'whitesmoke',
            width: '600px',
            position: 'relative',
            left: '250px',
            alignItems: 'center',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Register</h1>
          <form
            className='mt-5'
            onSubmit={onSubmit}
            style={{ maxWidth: '400px', margin: 'auto' }}
          >
            <div
              className='row'
              style={{ display: 'flex', marginBottom: '1rem' }}
            >
              <div className='col' style={{ flex: '1' }}>
                <div className='form-group'>
                  <label className='form-label' htmlFor='username'>
                    Username
                  </label>
                </div>
              </div>
              <div className='col' style={{ flex: '2' }}>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    name='username'
                    onChange={onChange}
                    value={username}
                    required
                  />
                </div>
              </div>
            </div>
            <div
              className='row'
              style={{ display: 'flex', marginBottom: '1rem' }}
            >
              <div className='col' style={{ flex: '1' }}>
                <div className='form-group'>
                  <label className='form-label' htmlFor='email'>
                    Email
                  </label>
                </div>
              </div>
              <div className='col' style={{ flex: '2' }}>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={email}
                    required
                  />
                </div>
              </div>
            </div>
            <div
              className='row'
              style={{ display: 'flex', marginBottom: '1rem' }}
            >
              <div className='col' style={{ flex: '1' }}>
                <div className='form-group'>
                  <label className='form-label' htmlFor='password'>
                    Password
                  </label>
                </div>
              </div>
              <div className='col' style={{ flex: '2' }}>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={password}
                    required
                  />
                </div>
              </div>
            </div>
            <div
              className='row'
              style={{ display: 'flex', marginBottom: '5px ' }}
            >
              <div className='col' style={{ flex: '1' }}></div>
              <div className='col' style={{ flex: '1' }}>
                {
                  <button
                    className='btn btn-primary mt-4'
                    type='submit'
                  >
                    Register
                  </button>
                }
              </div>
              <div className='col' style={{ flex: '1' }}></div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
