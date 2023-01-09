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
    axios
      .post(
        "https://webhook.site/572f95fd-4825-44c0-94e9-b8122af7eed3",
        this.state
      )
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userID, title, body } = this.state;
    return (
      <div className="formDiv">
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              value={userID}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="zip"
              value={body}
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
