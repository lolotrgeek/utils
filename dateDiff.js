function dateDiff(dateold, datenew) {
    var ynew = datenew.getFullYear()
    var mnew = datenew.getMonth()
    var dnew = datenew.getDate()
    var yold = dateold.getFullYear()
    var mold = dateold.getMonth()
    var dold = dateold.getDate()
    var diff = ynew - yold
    if (mold > mnew) diff--
    else {
        if (mold == mnew) {
            if (dold > dnew) diff--
        }
    }
    return diff
}

console.log(dateDiff(new Date("01-01-2000"), new Date()))