// TODO import axios and create client instance
// TODO import services from ./services
import Axios from "axios";
import services from "./services";

const api = Axios.create({
  baseURL: "http://localhost:3000",
});

// client("reviews/review", { query, params, payload })
const client = ({ service = "", query, params, payload }) => {
  service = service.split("/");
  service = services?.[service?.[0]]?.[service?.[1]];
  if (!service) return;
  return api[service.method](service.path({ query, params }), payload);
};

export default client;
