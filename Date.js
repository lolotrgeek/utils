/**
 * 
 * @param {number} days 
 * @returns 
 */
 Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

Date.prototype.addYears = function (years) {
    var date = new Date(this.valueOf())
    return new Date(date.setFullYear(date.getFullYear() + years))
}

/**
 *  Add Hours to date
 * @param {number} hours 
 * @returns 
 */
 Date.prototype.addHours = function (hours) { this.setTime(this.getTime() + (hours * 60 * 60 * 1000)); return this }

 /**
  *  Add Minutes to date
  * @param {number} minutes 
  * @returns 
  */
  Date.prototype.addMinutes = function (minutes) { this.setTime(this.getTime() + minutes*60000); return this }
 