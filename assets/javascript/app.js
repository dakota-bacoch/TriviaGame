$(document).ready(function () {

    var logo = [
        { name: 'java', image: '<img class="imageLoad" src="assets/images/java.png">' },
        { name: 'python', image: '<img class="imageLoad" src="assets/images/python.png">' },
        { name: 'ruby', image: '<img class="imageLoad" src="assets/images/ruby.png">' },
        { name: 'angular', image: '<img class="imageLoad" src="assets/images/angular.png">' },
        { name: 'node', image: '<img class="imageLoad" src="assets/images/node.png">' },
        { name: 'github', image: '<img class="imageLoad" src="assets/images/github.png">' },
        { name: 'jquery', image: '<img class="imageLoad" src="assets/images/jquery.png">' },
        { name: 'slack', image: '<img class="imageLoad" src="assets/images/slack.png">' },
        { name: 'react', image: '<img class="imageLoad" src="assets/images/react.png">' },
        { name: 'mongodb', image: '<img class="imageLoad" src="assets/images/mongodb.png">' }
    ];

    var ranAnswer = ['c', 'c++', 'c#', 'javascript', 'hph', '.net', 'perl', 'delphi', 'swift', 'objective-c', 'matlab', 'groovy', 'visual basic', 'go', 'electron', 'yarn', 'npm', 'scala', 'lua', 'metero', 'ember', 'mithril', 'polymar', 'pixi', 'vue', 'gulp', 'grunt', 'docker', 'jasmine'];
    var options = ["", "", "", ""];
    var question = 0;
    var round = -1;
    var score = 0;
    var choice = 0;
    var time = 30;
    //initiating function
    

    $("#start").click(function () {
        console.log("clicked");
        setInterval(timer, 1000);
        nextRound();
    });

    function nextRound() {
        console.log("nexRound activated")
        if (round<9) {
        time = 31;
        round++;
        createOp();
        overwrite();
        structure();
        timer();

        $("li#one.buttons").click(function () {
            console.log("clicked");
            choice = 0;
            keepScore();
        });
        $("li#two.buttons").click(function () {
            console.log("clicked");
            choice = 1;
            keepScore();
        });
        $("li#three.buttons").click(function () {
            console.log("clicked");
            choice = 2;
            keepScore();
        });
        $("li#four.buttons").click(function () {
            console.log("clicked");
            choice = 3;
            keepScore();
        });
     
    }
    
        else {
            round10();
        }
    }

    function createOp() {
        console.log("createOp activated")
        while (true) {
            options[0] = ranAnswer[Math.floor(Math.random() * ranAnswer.length)];
            options[1] = ranAnswer[Math.floor(Math.random() * ranAnswer.length)];
            options[2] = ranAnswer[Math.floor(Math.random() * ranAnswer.length)];
            options[3] = ranAnswer[Math.floor(Math.random() * ranAnswer.length)];
            if (options[0] !== options[1] && options[0] !== options[2] && options[0] !== options[3] && options[1] !== options[2] && options[1] !== options[3] && options[2] !== options[3]) {
                break;
            }
        }
    }

    function structure() {
        console.log("structure activated")
        $("#questions").empty();
        $("#questions").append("<h2>Time Remaining: " + time + " seconds</h2>");
        $("#questions").append(logo[round].image);
        $("#questions").append("<ul></ul>");
        $("ul").append("<li class= 'buttons' id='one'>" + options[0] + "</li>")
        $("ul").append("<li class= 'buttons' id='two'>" + options[1] + "</li>")
        $("ul").append("<li class= 'buttons' id='three'>" + options[2] + "</li>")
        $("ul").append("<li class= 'buttons' id='four'>" + options[3] + "</li>")
    }

    function overwrite() {
        i = Math.floor(Math.random() * 4);
        options[i] = logo[round].name;
    }

    function keepScore() {
        if (i === choice) {
            score++;
            console.log(score);
            nextRound();
        }
        else {
            nextRound();
        }
    }

    function round10() {
        $("#questions").html('<span id="r10">'+ 'Your final score is: ' + score + '</span');
    }

    function timer() {
        time--;
        $("h2").html("Time Remaining: " + time + " seconds");
        if (time === -1) {
            nextRound();
        }
    }


});