import axios from "axios";
const BASE_URL = "https://restcountries.com/v3.1";
export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`/${BASE_URL}/${url}`, {
    headers: {
      Authorization: token,
    },
  });
  return res;
};
