function showValue(){
    // console.log("i am here");
    // console.log(inp.value);
    var songToplay1 = new Audio("audio/make.mp3")
    var songToplay2 = new Audio("audio/shout.mp3")
    var songToplay3 = new Audio("audio/pity.mp3")
    var songToplay4 = new Audio("audio/No Evidence.mp3")
    var songToplay5 = new Audio("audio/play.mp3")
    var songToplay6 = new Audio("audio/clap.wav")

    var score = inp1.value
    if(score>=70 && score<=100){
       result.innerHTML='A- EXCELLENT😎'
    //    console.log('A'); 
       result.style.color ='green'
       console.log(score)
     songToplay1.pause() 
     songToplay2.pause()   
     songToplay3.pause()   
     songToplay4.pause()  
     songToplay5.pause()  
     songToplay6.play()  
       
    }else if(score>=60 && score <70){
       result.innerHTML='B- VERY GOOD😉'
       result.style.color ='blue'
    //    console.log('B')
    songToplay1.pause() 
    songToplay2.pause()   
    songToplay3.pause()   
    songToplay4.pause()  
    songToplay5.play()  
    songToplay6.pause()
    }else if(score>=50 && score<60){
        result.innerHTML='C -GOOD😊'
       result.style.color ='yellow'
       songToplay1.pause() 
       songToplay2.pause()   
       songToplay3.pause()   
       songToplay4.play()  
       songToplay5.pause()  
       songToplay6.pause()

    }else if(score>=45 && score<50){
        result.innerHTML='D-FAIR🙄'
       result.style.color ='orange'
       songToplay1.pause() 
       songToplay2.pause()   
       songToplay3.play()   
       songToplay4.pause()  
       songToplay5.pause()  
       songToplay6.pause()

    }else if(score>=40 && score<45){
        result.innerHTML='E-BAD😅😂'
       result.style.color ='orangered'
       songToplay1.pause() 
       songToplay2.play()    
       songToplay3.pause()   
       songToplay4.pause()  
       songToplay5.pause()  
       songToplay6.pause()

    }else if(score>=0.1 && score<39){
        result.innerHTML='F-FAIL😂😭'
       result.style.color ='red'
       songToplay1.play() 
       songToplay2.pause()   
       songToplay3.pause()   
       songToplay4.pause()  
       songToplay5.pause()  
       songToplay6.pause()

    }
    else{
       console.log(score);
       result.innerHTML= "invalid input"
    } 
    inp1.value=''
  }