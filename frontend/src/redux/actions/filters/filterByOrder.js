import { FILTER_BY_ORDER } from './actionTypes';

const filterByOrder = (payload) => {
    return {
        type: FILTER_BY_ORDER,
        payload: payload
    }
}

export default filterByOrder