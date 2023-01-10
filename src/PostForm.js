import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: ""
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: "post",
      url: "https://dummyapi.io/data/v1/",
      data: this.state
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      });
    });
  };

  render() {
    const { firstName, lastName, address, city, zip } = this.state;
    return (
      <div className="formDiv">
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="zip"
              value={zip}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" onClick={this.submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default PostForm;
