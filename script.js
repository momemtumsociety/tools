var countdown1;
var countdown2;
var countdown3;

function startTimer1() {
    var selectedTime = document.getElementById("time1").value;
    var timeRemaining = selectedTime * 60;
    document.getElementById("time1").disabled = true;
    document.getElementById("start-button1").disabled = true;
    countdown1 = setInterval(function() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
        document.getElementById("countdown1").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timeRemaining--;
        updateProgress1(timeRemaining, selectedTime);
        if (timeRemaining < 0){
            clearInterval(countdown1);
            playSound1();
            document.getElementById("countdown1").innerHTML = "Times Up";
            document.getElementById("countdown1").style.color = "#fff";
            document.getElementById("progress1").style.background = "#d4343c";
            document.getElementById("stop-button1").classList.add("show");
            document.getElementById("reset-button1").disabled = true;
        }
    }, 1000)
}

function updateProgress1(timeRemaining, selectedTime){
    var progress = document.getElementById("progress1");
    var width = (1 - timeRemaining / (selectedTime * 60)) * 100;
    progress.style.width = width + "%";
}

function stopTimer1() {
    clearInterval(countdown1);
    stopSound1();
    document.getElementById("countdown1").innerHTML = "Timer Stopped";
    document.getElementById("stop-button1").classList.remove("show");
    document.getElementById("reset-button1").disabled = false;
}

function resetTimer1() {
    clearInterval(countdown1);
    var progress = document.getElementById("progress1");
    progress.style.width = "0%"
    document.getElementById("time1").value = "1";
    document.getElementById("countdown1").innerHTML = "0:00";
    document.getElementById("progress1").style.background = "#ffd85a";
    document.getElementById("time1").disabled = false;
    document.getElementById("start-button1").disabled = false;
    document.getElementById("countdown1").style.color = "#1d1d1f";
    stopSound1();
}

function startTimer2() {
    var selectedTime = document.getElementById("time2").value;
    var timeRemaining = selectedTime * 60;
    document.getElementById("time2").disabled = true;
    document.getElementById("start-button2").disabled = true;
    countdown2 = setInterval(function() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
        document.getElementById("countdown2").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timeRemaining--;
        updateProgress2(timeRemaining, selectedTime);
        if (timeRemaining < 0){
            clearInterval(countdown2);
            playSound2();
            document.getElementById("countdown2").innerHTML = "Times Up";
            document.getElementById("countdown2").style.color = "#fff";
            document.getElementById("progress2").style.background = "#d4343c";
            document.getElementById("stop-button2").classList.add("show");
            document.getElementById("reset-button2").disabled = true;
        }
    }, 1000)
}

function updateProgress2(timeRemaining, selectedTime){
    var progress = document.getElementById("progress2");
    var width = (1 - timeRemaining / (selectedTime * 60)) * 100;
    progress.style.width = width + "%";
}

function stopTimer2() {
    clearInterval(countdown2);
    stopSound2();
    document.getElementById("countdown2").innerHTML = "Timer Stopped";
    document.getElementById("stop-button2").classList.remove("show");
    document.getElementById("reset-button2").disabled = false;
}

function resetTimer2() {
    clearInterval(countdown2);
    var progress = document.getElementById("progress2");
    progress.style.width = "0%"
    document.getElementById("time2").value = "1";
    document.getElementById("countdown2").innerHTML = "0:00";
    document.getElementById("progress2").style.background = "#ffd85a";
    document.getElementById("time2").disabled = false;
    document.getElementById("start-button2").disabled = false;
    document.getElementById("countdown2").style.color = "#1d1d1f";
    stopSound2();
}

function startTimer3() {
    var selectedTime = document.getElementById("time3").value;
    var timeRemaining = selectedTime * 60;
    document.getElementById("time3").disabled = true;
    document.getElementById("start-button3").disabled = true;
    countdown3 = setInterval(function() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
        document.getElementById("countdown3").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timeRemaining--;
        updateProgress3(timeRemaining, selectedTime);
        if (timeRemaining < 0){
            clearInterval(countdown3);
            playSound3();
            document.getElementById("countdown3").innerHTML = "Times Up";
            document.getElementById("countdown3").style.color = "#fff";
            document.getElementById("progress3").style.background = "#d4343c";
            document.getElementById("stop-button3").classList.add("show");
            document.getElementById("reset-button3").disabled = true;
        }
    }, 1000)
}

function updateProgress3(timeRemaining, selectedTime){
    var progress = document.getElementById("progress3");
    var width = (1 - timeRemaining / (selectedTime * 60)) * 100;
    progress.style.width = width + "%";
}

function stopTimer3() {
    clearInterval(countdown3);
    stopSound3();
    document.getElementById("countdown3").innerHTML = "Timer Stopped";
    document.getElementById("stop-button3").classList.remove("show");
    document.getElementById("reset-button3").disabled = false;
}

function resetTimer3() {
    clearInterval(countdown3);
    var progress = document.getElementById("progress3");
    progress.style.width = "0%"
    document.getElementById("time3").value = "1";
    document.getElementById("countdown3").innerHTML = "0:00";
    document.getElementById("progress3").style.background = "#ffd85a";
    document.getElementById("time3").disabled = false;
    document.getElementById("start-button3").disabled = false;
    document.getElementById("countdown3").style.color = "#1d1d1f";
    stopSound3();
}

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");

function playSound1() {
    audio1.loop = true;
    audio1.play();
}

function stopSound1() {
    audio1.pause();
    audio1.currentTime = 0;
}

function playSound2() {
    audio2.loop = true;
    audio2.play();
}

function stopSound2() {
    audio2.pause();
    audio2.currentTime = 0;
}

function playSound3() {
    audio3.loop = true;
    audio3.play();
}

function stopSound3() {
    audio3.pause();
    audio3.currentTime = 0;
}