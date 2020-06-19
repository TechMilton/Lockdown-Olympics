import axios from "../../axios";
import history from "../../history";

import { saveCompetitors, addCompetitorDetails, saveCategories, saveSports } from "./state";

export const getCompetitors = () => {
    return (dispatch) => {
        return axios.get(`/competitors`).then(({ data }) => {
            dispatch(saveCompetitors(data.data));
        })
    }
}

export const getCompetitor = (id) => (dispatch, getState) => {
    const isComplete = getState().competitors.find(competitor => competitor.id === id && competitor.detailsAdded);

    if (!isComplete) {
        axios.get(`/competitors/${id}`).then(({ data }) => {
            dispatch(addCompetitorDetails(data.data));
        });
    }
};

export const getCategories = () => {
    return (dispatch) => {
        return axios.get(`/categories`).then(({ data }) => {
            dispatch(saveCategories(data.data));
        })
    }
}

export const getSports = (id) => (dispatch, getState) => {
    return axios.get(`/categories/${id}/sports`).then(({ data }) => {
        dispatch(saveSports(data.data));
    });
}

export const postCompetitor = ({ name, bio, dob, sportId }) => {
    return (dispatch) => {
        axios.post("/competitors", {
            name,
            bio,
            dob,
            sport_id: sportId,
            img_pathway: "generic"
        }).then(() => {
            history.push("/");
        })
    };
}