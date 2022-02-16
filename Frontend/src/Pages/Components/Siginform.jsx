import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Api } from '../../backend';

const Siginform = () => {
  const [registerdata, setRegisterdata] = useState({
    uid: '',
    password: '',
  });
  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    console.log('Data Submitted');
    const data = {
      uid: registerdata.uid,
      password: registerdata.password,
    };
    const dataposted = await Axios.post(`${Api}login`, data, {
      withCredentials: true,
      crossorigin: true,
    });

    if (dataposted.data.success) {
      console.log('Logged In Successfully');
      localStorage.setItem('token', dataposted.data.token);
      navigate('/dashboard');
      window.location.reload();
    } else {
      console.log('Access Denied');
      setRegisterdata({
        uid: '',
        password: '',
      });
    }
    console.log(dataposted);
  }

  function handelChange(e) {
    const newdata = { ...registerdata };
    newdata[e.target.id] = e.target.value;
    setRegisterdata(newdata);
    console.log(newdata);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <h1>Sign In with your UID and Password</h1>
        <div className='details'>
          <label htmlFor='uid'>User ID : </label>
          <br />
          <input
            type='text'
            name='uid'
            id='uid'
            className='input__field signin__input__field'
            onChange={(e) => handelChange(e)}
            value={registerdata.uid}
            placeholder='Enter User ID'
            required
            autoComplete='off'
          ></input>
        </div>

        <div className='details'>
          <label htmlFor='password'>Password : </label>
          <br />
          <input
            type='password'
            name='password'
            id='password'
            className='input__field signin__input__field'
            onChange={(e) => handelChange(e)}
            value={registerdata.password}
            placeholder='Enter Password'
            required
            autoComplete='off'
          ></input>
        </div>

        <button className='btn login-signup-btn'>Sign In</button>

        <div>
          <p>
            <Link to='/' className='links'>
              Explore More
            </Link>
          </p>
          <p>
            Don't have an account?{' '}
            <Link to='/signup' className='links'>
              Register Here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Siginform;
