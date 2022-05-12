const { parse } = require("csv-parse")
const fs = require("fs")

/**
 * 
 * @param {string} file  path
 * @docs https://csv.js.org/parse
 * @source https://csv.js.org/parse/recipes/async_iterator/
 */
const processFile = async file => {
    try {
        const records = []
        const parser = fs
            .createReadStream(file)
            .pipe(parse({ from_line: 2 }))
        for await (const record of parser) {
            records.push(record)
        }
        return records
    } catch (error) {
        console.log(error)
    }
}

module.exports = { processFile }