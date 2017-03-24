import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      pw: '',
      pwConfirm: '',
      valid: true
      }
    }
    handleEmail (e) {
    this.setState({email: e.target.value})
    }

    handlePw (e) {
      this.setState({pw: e.target.value })
    }
    handlePwConfirm (e) {this.setState({pwConfirm: e.target.value})
    }

    handleSubmit (e) {
      e.preventDefault()
      this.validity()
    }



    validity () {
      if (this.state.pw === this.state.pwConfirm){
          this.setState({ valid: true})
      } else { this.setState({valid: false})
      }
    }

  render() {
    let message = this.state.valid ? "Passwords match son!" : "Passwords do not match, try again homie!"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" onChange={(e) => this.handleEmail(e)} placeholder="Email" />
        <input type="password" onChange={(e) => this.handlePw(e)}  placeholder="Password" />
        <input type="password" onChange={(e) => this.handlePwConfirm(e)}  placeholder="Confirm Password" />
        <input type="submit" onClick={(e) => this.handleSubmit(e)}value="Submit" />
        <p>{message}</p>
      </div>
    );
  }
}

export default Validator;
