import initial from './initial';

const saveCompetitorsReducer = (state, {competitors}) => {
    return {
        ...state,
        competitors,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SAVE_COMPETITORS": return saveCompetitorsReducer(state, action);
        default: return state;
    }
    
}

export default reducer;