const handlerObjToArray = (database, attribute, key) => {
    return database.map((data) => ({
        ...data.toJSON(),
        [attribute]: data[attribute].map((item) => item[key])
    }));
}

export default handlerObjToArray