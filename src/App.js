import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountriesSelector from "./components/CountriesSelector/CountriesSelector";

import Logo from "./images/logo1.jpg";

import styles from "./App.module.css";
//import the function from the index file of the API
import { dataFetch } from "./api";

class App extends Component {
  state = {
    data: {},
    countries: "",
  };

  async componentDidMount() {
    //gets the data from the api call
    const fetchedData = await dataFetch();
    //setting the initial empty state to what the data fetched from the API call
    this.setState({ data: fetchedData });
  }

  countryChangeHandler = async (country) => {
    // fetch data
    const fetchedData = await dataFetch(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={Logo} alt='Covid19 Logo' />
        <Cards data={data} />
        <CountriesSelector countryChangeHandler={this.countryChangeHandler} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
