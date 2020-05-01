import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const dataFetch = async (country) => {
  let dynamicURL = URL;

  if (country) {
    dynamicURL = `${URL}/countries/${country}`;
  }
  try {
    //double destructuring
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const dailyDataFetch = async () => {
  try {
    //deconstruct the response from the axios request
    const { data } = await axios.get(`${URL}/daily`);

    //map through the data from the axios response and gets 'confirmed', 'deaths', and the 'date'
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const countryFetch = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
