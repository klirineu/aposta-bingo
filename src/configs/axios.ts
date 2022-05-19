import axios from "axios";

export const pagarme = axios.create({
  baseURL: "https://api.pagar.me/core/v5",
});
