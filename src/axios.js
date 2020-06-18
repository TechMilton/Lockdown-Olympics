import axios from "axios";

export default axios.create({
    baseURL: "https://olympics.developme.space/api",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});

