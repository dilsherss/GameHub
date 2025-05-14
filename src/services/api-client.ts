import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89ee79b0b2d44a26aabaa1e6d2a7d3ba",
  },
});
