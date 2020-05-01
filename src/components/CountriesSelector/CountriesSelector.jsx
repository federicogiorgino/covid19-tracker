import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountriesSelector.module.css";

import { countryFetch } from "../../api";

const CountriesSelector = ({ countryChangeHandler }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await countryFetch());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => {
          countryChangeHandler(e.target.value);
        }}
      >
        <option value='global'>Global</option>
        {/* we map over all the countries we get from the api and we create an <option> </option> with  each country values, index and name  */}
        {fetchedCountries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountriesSelector;
