import React, {useState} from 'react'

import './index.css'

const Signup = () => {
  const state = {
    name: '',
    email: '',
    password: '',
    phone: '',
  }
  const [inputData, setInputData] = useState(state)
  const [msg, setMsg] = useState(false)

  const handleInput = event => {
    console.log(event.target.value)
    setInputData({...inputData, [event.target.name]: event.target.value})
  }

  const submit = event => {
    event.preventDefault()
    if (
      !inputData.name ||
      !inputData.email ||
      !inputData.password ||
      !inputData.phone
    ) {
      alert("All Fields are Required!")
    } else {
      setMsg(true)
      setTimeout(() => {
        setMsg(false)
      }, 4000)
    }
  }
  return (
    <div className="main-container">
      <div className="image-continer">
        <h1 className="heading">Welcome to our community</h1>
        <p className="description">
          Syoft helps developers to build organised and well coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
      </div>
      <form onSubmit={submit} className="bg-container">
        {msg ? 'SignUp Successfully!' : null}
        <h1>Sign Up</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputData.name}
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputData.password}
            onChange={handleInput}
          />
          <input
            type="phonenumber"
            placeholder="PhoneNumber"
            name="phone"
            value={inputData.phone}
            onChange={handleInput}
          />
        </div>
        <button type="button" onClick={submit}>
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
