const initialState = {
    count: 0
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return {...state, count: state.count+1}
        case 'MINUS':
            return {...state, count: state.count > 0 ? state.count-1 : state.count = 0}
        default: return state
    }
}