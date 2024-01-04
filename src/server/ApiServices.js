import axios from "axios";

const create = (baseUrl = "https://restcountries.com/v3.1/all") => {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });
  const detailsData = async () => {
    return api.get("");
  };

  return {
    detailsData,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create };
