import { FILTER_BY_NAME } from './actionTypes';

const filterByName = (payload) => {
    return {
        type: FILTER_BY_NAME,
        payload: payload
    }
}

export default filterByName