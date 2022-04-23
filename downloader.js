const fs = require('fs');
const http = require('http');
const https = require('https');


/**
 * 
 * @param {string} filename to save file
 * @param {string} url to download from
 * @reference https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries 
 */
const downloadNaive = (filename, url) => {
    const extension = '.mp4'
    const file = fs.createWriteStream(filename + extension)
    const request = http.get(url, function (response) {
        response.pipe(filename);
    });
}


/**
 * Downloads file from remote HTTP[S] host and puts its contents to the
 * specified location.
 * https://stackoverflow.com/questions/27483090/how-to-download-a-file-with-node-js-using-https
 */
async function download(url, filePath) {
  const proto = !url.charAt(4).localeCompare('s') ? https : http;
  
  return new Promise((resolve, reject) => {
    console.log('Downloading '+ filePath + '...')
    const file = fs.createWriteStream(filePath);
    let fileInfo = null;

    const request = proto.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      fileInfo = {
        mime: response.headers['content-type'],
        size: parseInt(response.headers['content-length'], 10),
      };

      response.pipe(file);
    });

    // The destination stream is ended by the time it's called
    file.on('finish', () => {
      console.log('Done.')
      resolve(fileInfo)
    });

    request.on('error', err => {
      fs.unlink(filePath, () => reject(err));
    });

    file.on('error', err => {
      fs.unlink(filePath, () => reject(err));
    });

    request.end();
  });
}

module.exports = {
    download : download
}