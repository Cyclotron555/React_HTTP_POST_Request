import React, { Component } from "react";

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
  };

  render() {
    const { userID, title, body } = this.state;
    return (
      <div>
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
