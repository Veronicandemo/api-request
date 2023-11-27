import { useEffect, useState } from "react";
import { CountryData } from "../utils/constant";
import axios from "axios";
// custom hook
export const useFetchCountry = () => {
  const [country, setCountry] = useState<CountryData[] | null>(null);

  const fetchCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log(res.data);
        const countries = res.data;
        setCountry(countries || null);
      })
      .catch((err) => console.error(err));
  };
  // To mount the data
  useEffect(() => {
    fetchCountries();
  }, []);

  return { country };
};
