//   var resetstart=false,pausestart=false,firststart=false;

        // to get the values of time..
        var work,br,timer,x,startpause1,resetstart=false,firststart=true, workbreakcounter=0;
        work=parseInt(document.getElementById("work").innerHTML);
        br=parseInt(document.getElementById("br").innerHTML);
        startpause1=document.getElementById("startpause");


        // to set the values of time..
        var stime, btime, countdown,session;
        stime= document.getElementById("work");
        btime= document.getElementById("br");
        countdown= document.getElementById("countdown");
        session=document.getElementById("session");
        
        var b1,b2,b3,b4;
        b1=document.getElementById("b1");
        b2=document.getElementById("b2");
        b3=document.getElementById("b3");
        b4=document.getElementById("b4");

        function sessiontime(val){
            val>0? work+=1 : work-=1;
            if(work<0)
            work=0;
            stime.innerHTML=work;
            if(work<10)
            countdown.innerHTML="0"+work+":00";
            else
            countdown.innerHTML=work+":00";
        }
        function breaktime(val){
            val>0? br+=1 : br-=1;
            if(br<0)
            br=0;
            btime.innerHTML=br;
        }


        function reset(){
            timer=1200;
            work=20;
            br=5;
            stime.innerHTML=work;
            btime.innerHTML=br;
            session.innerHTML="Session 1";
            startpause1.innerHTML="Start";
            countdown.innerHTML=work+":00";
            countdown.style.color="skyblue";
            // document.getElementsByClassName("time")[0].style.borderColor="skyblue";
            resetstart=true;
            b1.disabled=false;
            b2.disabled=false;
            b3.disabled=false;
            b4.disabled=false;
            clearInterval(x);
        }

        function startpause(){
            b1.disabled=true;
            b2.disabled=true;
            b3.disabled=true;
            b4.disabled=true;
            if(resetstart===true || firststart===true){
                resetstart=false;
                firststart=false;
                timer=work*60;
            }

            if(startpause1.innerHTML === "Start"){
                startpause1.innerHTML="Pause";
                start(timer/60);
            }
            else {
                startpause1.innerHTML="Start";
                clearInterval(x);
            }
        }

        function start(val){
            console.log("value= "+val);
            timer=val*60;
        x=setInterval(function(){
                
            var minutes=Math.floor(timer/60);
            var seconds=Math.floor(timer%60);

            minutes= minutes>=10? minutes :"0"+minutes;
            seconds= seconds>=10? seconds :"0"+seconds;
            countdown.innerHTML=minutes+":"+seconds;

            if(--timer<0){
              clearInterval(x);
            //   var audio=new Audio("beep-01a.mp3");
            //   audio.play();
              console.log(workbreakcounter+" before");
              if((workbreakcounter++)%2===0){
                  countdown.style.color="#de6834";
                  document.getElementsByClassName("time")[0].style.borderColor="#de6834";
                  session.innerHTML="Break!"
              start(br);
              console.log(workbreakcounter+" br");
              }
              else {
                //   var audio=new Audio("beep-01a.mp3");
                //   audio.play();
                  countdown.style.color="skyblue";
                  document.getElementsByClassName("time")[0].style.borderColor="skyblue";
                start(work);
                console.log(workbreakcounter+" work");
              }
            }
            },1000)
        }        