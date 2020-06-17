import initial from './initial';

const saveCompetitorsReducer = (state, {competitors}) => {
    return {
        ...state,
        competitors,
        loaded: true,
    }
}

const addCompetitorDetailsReducer = (state, data) => {
    let newCompetitors = state.competitors;
    if(newCompetitors.length === 0) {
        newCompetitors = data.competitor;
    } else {
        newCompetitors = newCompetitors.map(competitor => 
        competitor.id === data.competitor.id ? 
            {...competitor, 
            name: data.competitor.name,
            bio: data.competitor.bio,
            dob: data.competitor.dob,
            sport_id: data.competitor.sport_id,
            img_pathway: data.competitor.img_pathway,
            detailsAdded: true, ///add detailsAdded so track if details previously added from api
        } : competitor)
    }
    return {
        ...state,
        competitors: [newCompetitors],
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