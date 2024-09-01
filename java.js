var playing=false;
var score;
var action;
var time;
var correctans;

document.getElementById("startreset").onclick=
    function(){
        if(playing==true){
            
            location.reload();
        }
    else{
        playing=true;
        score=0;
        document.getElementById("scoreval").innerHTML=score;
        show("time");
        time=60;
        document.getElementById("timevalue").innerHTML= time;
        hide("gameover");
        document.getElementById("startreset").innerHTML="Reset game";
        
        startcountdown();
        
        generateqa();
        }
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=
    function(){
    if(playing==true){
        if(this.innerHTML== correctans){
            score++;
            document.getElementById("scoreval").innerHTML=score;
            
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
        
        generateqa();
    }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}

function startcountdown(){
            action=setInterval(function(){
                time-=1;
                document.getElementById("timevalue").innerHTML= time;
                if(time==0){
                    clearInterval(action);
                    stopcountdown();!
                    show("gameover")
                    document.getElementById("gameover").innerHTML="<p>Game Over!</p><p>Your Score is "+ score + " </p>"
                    hide("time");
                    hide("correct");
                    hide("wrong");
                    playing=false;
                    document.getElementById("startreset").innerHTML="Star Game";
                }
            },1000);
    }

function stopcountdown(){
    clearInterval(action);
}

function hide(id){
    document.getElementById(id).style.display= "none";
}

function show(id){
    document.getElementById(id).style.display= "block";
}

function generateqa(){
    var x= 1+ Math.round(9*Math.random());
    var y= 1+ Math.round(9*Math.random());
    correctans=x*y;
    document.getElementById("question").innerHTML= x + "x" + y;
    var correctpos= 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctpos).innerHTML=correctans;
    
    var answer=[correctans];
    
    for(i=1;i<5;i++){
        if(i!=correctpos){
            var wrongans;
            
            do{
                wrongans=(1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            } while(answer.indexOf(wrongans)>-1)
            document.getElementById("box"+i).innerHTML=wrongans;
            answer.push(wrongans);
        }
    }
}