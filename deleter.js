const fs = require('fs');
const path = require('path');

/**
 * https://stackoverflow.com/questions/27072866/how-to-remove-all-files-from-directory-without-removing-directory-in-node-js/42182416
 * @param {*} directory name of directory in app root where in files are to be deleted 
 */
exports.deleter = directory => {
    return new Promise((resolve, reject) => {
        if (!directory) reject('no directory to delete!')
        const dir = path.resolve('./' + directory)
        fs.access(dir, fs.F_OK, (err) => {
            if (err) {
                console.log('creating directory: ', dir)
                fs.mkdir(dir, (err) => {
                    if (err) reject(err)
                    resolve(dir)
                    return
                })
            }
            fs.readdir(dir, (err, files) => {
                if (err) reject(err);
                console.log('deleting files in: ', dir)
                for (const file of files) {
                    fs.unlink(path.join(directory, file), err => {
                        if (err) reject(err);
                    });
                }
                resolve(files)
            });
        })

    })
}
