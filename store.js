const fs = require('fs').promises
const Keyv = require('keyv')
const KeyvFile = require('keyv-file').KeyvFile

const filename = `store.json`
const store = new Keyv({
    store: new KeyvFile({
        filename, // the file path to store the data
        encode: JSON.stringify, // serialize function
        decode: JSON.parse // deserialize function
    }),
})

const store_local = {
    store: {},
    set: (key, value) => store[key] = value,
    get: key => store[key]
}

const removed = () => fs.access(filename).then(err => err ? true : false).catch(err => err ? true : false)

const remove = () => {
    fs.access(filename).then(error => {
        if (!error) fs.unlink(filename).then(console.log("removed store")).catch(console.error)
    }
    ).catch(console.error)
}

const check = async () => {
    try {
        let data = await fs.readFile(filename)
        let valid = JSON.parse(data.toString('utf-8'))
        if (typeof valid === 'object' && valid.cache && valid.lastExpire) return true
        return false
    } catch (error) {
        return false
    }
}

const cleared = async () => {
    try {
        let data = await fs.readFile(filename)
        let valid = JSON.parse(data.toString('utf-8'))
        if (typeof valid === 'object' && Array.isArray(valid.cache) && valid.cache.length === 0) return true
        return true
    } catch (error) {
        return true
    }    
}
store.cleared = cleared
store.check = check
store.remove = remove
store.removed = removed

module.exports = { store, store_local, check, remove, removed, cleared }