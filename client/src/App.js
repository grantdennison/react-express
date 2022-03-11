import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <div>{`Fetched from server-express`}</div>
        {this.state.users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    );
  }
}

export default App;
