import axios from "../../axios";

import { saveCompetitors, addCompetitorDetails } from "./state";

export const getCompetitors = () => {
    return (dispatch) => {
        return axios.get(`/competitors`).then(({ data }) => {
            dispatch(saveCompetitors(data.data));
            })
        }
    }

export const getCompetitor = (id) => {
    return (dispatch) => {
        return axios.get(`/competitors/${id}`).then(({ data }) => {
            dispatch(addCompetitorDetails(data.data));
            })
        }
    }

