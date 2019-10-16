import React, { Component } from "react"
import { Link } from "react-router-dom"
class Login extends Component {
  render() {
    return (
      <div>
        <h1>MLB Info Tracker</h1>
        <Link to='/teams'>
          <button>Login</button>
        </Link>
      </div>
    )
  }
}

export default Login
