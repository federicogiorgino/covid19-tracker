import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountriesSelector from "./components/CountriesSelector/CountriesSelector";

import styles from "./App.module.css";
//import the function from the index file of the API
import { dataFetch } from "./api";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    //gets the data from the api call
    const fetchedData = await dataFetch();
    //setting the initial empty state to what the data fetched from the API call
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        {/* <CountriesSelector />
        <Charts /> */}
        <Charts />
      </div>
    );
  }
}

export default App;
