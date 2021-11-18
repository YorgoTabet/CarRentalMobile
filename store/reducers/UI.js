import * as UiActions from '../actions/UI'

const initialState = {
    showRentals: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UiActions.SWITCH_RENTALS:
            return {
                ...state,
                showRentals: !state.showRentals
            }
        default:
            return state
    }
}