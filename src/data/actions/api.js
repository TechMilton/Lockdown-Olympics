import axios from "../../axios";

export const getCompetitor = (id) => {
    console.log(id)
    return (dispatch) => {
        return axios.get(`/games/api/competitors/${id}`).then(({ data }) => {
            console.log(data)
            dispatch({
                type: "BLAH",
            })
        })
    }
}