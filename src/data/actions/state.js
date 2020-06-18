export const saveCompetitors = (data) => {
    return {
        type: "SAVE_COMPETITORS",
        competitors: data,
    };
};

export const addCompetitorDetails = (data) => {
    return {
        type: "ADD_DETAILS_TO_COMPETITOR",
        competitor: data,
    };
};

export const saveCategories = (data) => {
    return {
        type: "SAVE_CATEGORIES",
        categories: data,
    };
};

export const saveSports = ( data ) => {
    return {
        type: "SAVE_SPORTS",
        sports: data,
    };
};