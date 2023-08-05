const handlerClearObject = (obj) => {
    for (let prop in obj) {
        if (obj[prop] === null || obj[prop] === "" || obj[prop] === undefined) {
            delete obj[prop];
        }
    }
}

export default handlerClearObject