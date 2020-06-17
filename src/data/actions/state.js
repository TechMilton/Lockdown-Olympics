export const saveCompetitors  = ( data ) => {
    return {
        type: "SAVE_COMPETITORS",
        competitors: data,
    };
}

export const addCompetitorDetails = ( data ) => {
    return {
        type: "ADD_DETAILS_TO_COMPETITOR",
        competitor: data,
    }
}