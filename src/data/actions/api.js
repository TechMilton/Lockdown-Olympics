import axios from "../../axios";

import { saveCompetitors, addCompetitorDetails } from "./state";

export const getCompetitors = () => {
    return (dispatch) => {
        return axios.get(`/competitors`).then(({ data }) => {
            dispatch(saveCompetitors(data.data));
            })
        }
    }

// export const getCompetitor = (id) => {
//     return (dispatch) => {
//         return axios.get(`/competitors/${id}`).then(({ data }) => {
//             dispatch(addCompetitorDetails(data.data));
//             })
//         }
//     }

///from our discussion with Jack
export const getCompetitor = (id) => (dispatch, getState) => {
    const isComplete = getState().competitors.find(competitor => competitor.id === id && competitor.detailsAdded);

    if (!isComplete) {
        axios.get(`/competitors/${id}`).then(({ data }) => {
            dispatch(addCompetitorDetails(data.data));
            });
        }
};

