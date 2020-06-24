import React, { Component, Fragment } from "react";
import "./Auth.style.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      confirm_password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();

    try {
      let { email, password } = this.state;
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      toast.success("succesfully prime video account created");
      console.log(userData);
    } catch (err) {
      toast.error(err.message);
    }
  }

  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className=" col-md-3 mx-auto">
            <img src="logo1.png" alt="logo" className="inside_logo my-4" />

            <div className="card-body card">
              <h1 className="h4">Create account</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm_password">confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    name="confirm_password"
                    required
                    value={this.state.confirm_password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button className="a-button-primary btn-block my-4">
                    create your amazon account
                  </button>
                </div>
                <hr />
                <p>
                  By creating an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.
                </p>
                <p>
                  Already have an account? <Link to="/login">Sign-In</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Register;