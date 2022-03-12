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
    alert("A name was submitted: " + this.state.value);
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
