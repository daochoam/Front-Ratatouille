import { FILTER_BY_ORIGIN } from './actionTypes';

const filterByOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: payload
    }
}

export default filterByOrigin