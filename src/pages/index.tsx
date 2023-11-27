import React from "react";
import { useFetchCountry } from "../hooks/getHooks";

const HomePage = () => {
  const { country } = useFetchCountry();
  console.log(country);
  return (
    <div>
      {country &&
        country?.map((coun, index) => (
          <div key={index}>
            <h1>{coun?.name.common}</h1>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
