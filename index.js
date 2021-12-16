var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("H").innerHTML = "00";
    document.getElementById("M").innerHTML = "00";
    document.getElementById("S").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
function stopwatch() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        document.getElementById("H").innerHTML = hr;
        document.getElementById("M").innerHTML = min;
        document.getElementById("S").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10)
    }
}