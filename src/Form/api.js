import axios from "axios";

const URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_c4E1584oaVlL2X9XvyBmbCvhHsno7pcjIpaITNlF";

export const getApi = async () => {
  const response = await axios.get(URL);
  if (response.status !== 200) {
    throw new Error();
  }
  return response.data;
};
