import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { searchField, robots } = this.state;
    const filteredRobots = robots.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
            <h1 class="section-title-01">Robot Rolodex</h1>
            <h2 class="section-title-02">Robot Rolodex</h2>
        <SearchBox
        placeholder='search robots'
        handleChange={this.handleChange}
         />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
export default App;
