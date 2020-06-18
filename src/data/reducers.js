import initial from './initial';

const saveCompetitorsReducer = (state, { competitors }) => {
    return {
        ...state,
        competitors,
        loaded: true,
    }
}

const addCompetitorDetailsReducer = (state, data) => {
    let newCompetitors = state.competitors;
    if (newCompetitors.find((competitor) => competitor.id === data.competitor.id)) {
        newCompetitors = newCompetitors.map(competitor =>
            competitor.id === data.competitor.id ?
                {
                    ...competitor,
                    ...data.competitor,
                    detailsAdded: true, ///add detailsAdded so track if details previously added from api
                } : competitor)
    } else {
        newCompetitors.push(data.competitor);
    }

    return {
        ...state,
        competitors: newCompetitors,
    }
}

const saveCategoriesReducer = (state, { categories }) => {
    return {
        ...state,
        categories,
    }
}

const saveSportsReducer = (state, { sports }) => {
    return {
        ...state,
        sports,
    }
}

const saveCompetitorReducer = (state) => {
    return {
        ...state,
        name: initial.name,
        bio: initial.bio,
        dob: initial.dob,
        sportId: initial.sportId,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_COMPETITORS": return saveCompetitorsReducer(state, action);
        case "ADD_DETAILS_TO_COMPETITOR": return addCompetitorDetailsReducer(state, action);
        case "SAVE_CATEGORIES": return saveCategoriesReducer(state, action);
        case "SAVE_SPORTS": return saveSportsReducer(state, action);
        case "REGISTER_COMPLETE": return saveCompetitorReducer(state); 
        default: return state;
    }
}

export default reducer;