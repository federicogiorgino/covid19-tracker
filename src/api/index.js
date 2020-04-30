import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const dataFetch = async () => {
  try {
    //double destructuring
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};
