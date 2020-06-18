import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});

