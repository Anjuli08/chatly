import React from 'react'
import Add from '../img/addimg.png'

const Register = () => {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chatly</span>
          <span className="title">Register</span>
          <form>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='passowrd'/>
            <input style={{display:'none'}} type='file' id='file'/>
            <label htmlForm='file'>
              <img src={Add} alt='' />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p>You do have an account? Login</p>
        </div>
      </div>
    )
}

export default Register
