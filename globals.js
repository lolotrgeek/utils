global.random = function (min, max) {
    let rand = Math.random();
    if (typeof min === 'undefined') {
        return rand;
    } else if (typeof max === 'undefined') {
        if (min instanceof Array) {
            return min[Math.floor(rand * min.length)];
        } else {
            return rand * min;
        }
    } else {
        if (min > max) {
            const tmp = min;
            min = max;
            max = tmp;
        }

        return rand * (max - min) + min;
    }
};

global.randint = function randint(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

global.log = function log(msg) {
    if (LOGGING === true) {
        let entry = '\n' + `[${new Date().toLocaleString()}] - ${msg}`
        fs.appendFile('./logs/serverlog.txt', entry, (err) => {
            if (err) console.log(err);
        });
    } else {
        console.log(msg)
    }
}

global.isObject = function isObject(string) {
    try {
        return JSON.parse(string)
    } catch (error) {
        return false
    }
}

global.getObject = function getObject(string) {
    try {
      return JSON.parse(string)
    } catch (error) {
      return false
    }
  }
  
  global.len = function len(object) {
    return Object.keys(object).length
  }
  
  global.clone = function clone(object) {
    return v8.deserialize(v8.serialize(object))
  }