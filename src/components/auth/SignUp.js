import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
  render() {
    return (
      <div className="container">
          <div className="card">
              <div className="card-content">
              <form onSubmit={this.handleSubmit} className="white">
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange = {this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange = {this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
              </div>
          </div>          
      </div>
    )
  }
}

export default SignUp
