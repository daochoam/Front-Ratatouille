
const handlerFilterByFieldOrder = (data, field = 'All', order = 'All') => {
    try {
        if (field === 'All' || order === 'All') return data
        if (order === 'Ascendant') {
            if (field === 'healthScore')
                return data.sort((a, b) => a[field] - b[field]);
            if (field === 'name')
                return data.sort((a, b) => a[field].localeCompare(b[field]))
        }
        if (order === 'Falling') {
            if (field === 'healthScore')
                return data.sort((a, b) => b[field] - a[field]);
            if (field === 'name')
                return data.sort((a, b) => b[field].localeCompare(a[field]))
        }
        return data
    } catch (error) {
        throw Error(error.message)
    }
}

export default handlerFilterByFieldOrder