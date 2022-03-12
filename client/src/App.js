import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  // }

  state = { users: [], value: "" };
  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = { username: this.state.value };
    console.log("A name was submitted: " + data.username);

    //Post to the server

    fetch("http://localhost:3001/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <div>{`Fetched from server-express`}</div>
        {this.state.users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
