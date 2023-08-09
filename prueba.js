const isObjectEmpty = (obj) => {
    if (obj === null || obj === undefined) return true;
    if (typeof obj !== 'object') return false;

    for (const key in obj) {
        const value = obj[key];

        if (Array.isArray(value)) {
            if (!value.every(item => item === "")) {
                return false;
            }
        } else if (typeof value === 'object') {
            if (!isObjectEmpty(value)) {
                return false;
            }
        } else if (value !== "" && value !== null && value !== undefined) {
            return false;
        }
    }

    return true;
}

function cleanObject(obj) {
    for (const key in obj) {
        const value = obj[key];

        if (Array.isArray(value)) {
            obj[key] = value.filter(item => item !== "");
            if (obj[key].length === 0) {
                delete obj[key];
            }
        } else if (typeof value === 'object') {
            if (isObjectEmpty(value)) {
                delete obj[key];
            } else {
                cleanObject(value);
                if (isObjectEmpty(value)) {
                    delete obj[key];
                }
            }
        } else if (value === "" || value === null || value === undefined) {
            delete obj[key];
        }
    }
}

const exampleObject = {
    "name": "The name is required.",
    "image": "The image is required.",
    "healthScore": "",
    "diets": "You must select at least one type diet.",
    "summaryOfDish": "The summary must contain 10 to 300 characters.",
    "stepByStep": [
        "Please write a minimum of 10 characters.",
        "Please write a minimum of 10 characters.",
        ""
    ]
};

const isEmpty = isObjectEmpty(exampleObject);
console.log(isEmpty); // Output: false

cleanObject(exampleObject);
console.log(exampleObject);