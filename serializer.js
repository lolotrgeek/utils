
const deserialize = data => {
    try {
        return JSON.parse(data)
        //TODO: could type check and convert string to that type
    } catch (error) {
        return data
    }
}

const serialize = data => {
    try {
        return JSON.stringify(data)
    } catch (error) {
        return data
    }
}

module.exports = {serialize, deserialize}