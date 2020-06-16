import axios from "axios";

export default axios.create({
    baseURL: "https://games/api",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});

