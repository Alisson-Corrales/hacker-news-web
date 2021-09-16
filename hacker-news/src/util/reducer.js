export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING': return {
        ...state,
        loading: true,
    }
    case 'SET_HITS': return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
    };

    case 'HANDLE_SEARCH':
      return { ...state, query: action.payload, page:0 }

    case 'HANDLE_PAGE':{
      if(action.payload === "inc"){
        let newPage = state.page + 1;
        if (newPage + 1 > state.nbPages){
          newPage = 0;
        }
        return { ...state, page: newPage }
      }else if (action.payload === "dec"){
        let newPage = state.page - 1;
        if (newPage - 1 < state.nbPages){
          newPage = state.nbPages - 1;
        }
        return { ...state, page: newPage }
      }
    }
      
    default:
        //if it breaks, this'll show why
        throw new Error(`Now Matching ${action.type} action type`)
  }
};

export default reducer;
