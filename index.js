
// GetDayToday -- returns the the current time of the day in UTC in this format H:M:S:ms
var x = setInterval(function getUTCTime(){
    const now = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    

    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();

    var current_day = weekday[now.getDay()];
    var current_time = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    document.querySelector("[data-testid='currentUTCTime']").innerHTML = current_time;

    document.querySelector("[data-testid='currentDayOfTheWeek']").innerHTML = current_day;
}, 1);
