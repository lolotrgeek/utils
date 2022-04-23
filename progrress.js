const { statSync } = require('fs')


const getFilesizeInBytes = (filename) => {
    var stats = statSync(filename);
    var fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}
const percentage = (total, current) => (current/total)*100

function progress(file, current) {
    let total = getFilesizeInBytes(file)
    return percentage(total, current)
}

module.exports = {
    progress : progress
}