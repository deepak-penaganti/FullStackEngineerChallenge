import { FETCH_EMPLOYEES_SUCCESS } from '../action-types';
import { StoreActionType } from '../action.types';

export const rootReducer = (state = {}, action: StoreActionType) => {
    switch (action.type) {
        case FETCH_EMPLOYEES_SUCCESS:
            return { ...state, employees: action.payload };
        default:
            break;
    }
    return state;
}