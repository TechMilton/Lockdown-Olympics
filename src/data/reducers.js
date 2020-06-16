import initial from './initial';

const saveCompetitorsReducer = (state, {competitors}) => {
    return {
        ...state,
        competitors,
        loaded: true,
    }
}

const addCompetitorDetailsReducer = (state, data) => {
    return {
        ...state,
        competitors: state.competitors.map(competitor => competitor.id === data.competitor.id ? 
            {...competitor, 
            bio: data.competitor.bio,
            dob: data.competitor.dob,
            sport_id: data.competitor.sport_id,
            img_pathway: data.competitor.img_pathway
        } : competitor),
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_COMPETITORS": return saveCompetitorsReducer(state, action);
        case "ADD_DETAILS_TO_COMPETITOR": return addCompetitorDetailsReducer(state, action);
        default: return state;
    }
    
}

export default reducer;