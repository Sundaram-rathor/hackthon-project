
let player1='O';




for(let i=0; i<9; i++){
    var adEvent=document.getElementById(i.toString());
    adEvent.addEventListener
    ("click", 
    function clicked(){
        this.innerHTML=player1;
        switchplayer();
        checkwin();
       
        
        

       }
    );

}

    

function switchplayer(){
    player1=player1==='O'?'X' : 'O';
}


function checkwin(){
    
    var cell1=document.getElementById('0').innerHTML;
    var cell2=document.getElementById('1').innerHTML;
    var cell3=document.getElementById('2').innerHTML;
    var cell4=document.getElementById('3').innerHTML;
    var cell5=document.getElementById('4').innerHTML;
    var cell6=document.getElementById('5').innerHTML;
    var cell7=document.getElementById('6').innerHTML;
    var cell8=document.getElementById('7').innerHTML;
    var cell9=document.getElementById('8').innerHTML;

    if(cell1!=="" && cell1==cell2 && cell1==cell3 ){
        for(i=0;i<3;i++){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell1);
    }
    if(cell1!=="" && cell1==cell4 && cell1==cell7 ){
        for(i=0;i<8;i+=3){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell1);
    }
    if(cell1!=="" && cell1==cell5 && cell1==cell9 ){
        for(i=0;i<10;i+=4){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell1);
    }
    if(cell2!=="" && cell2==cell5 && cell2==cell8 ){
        for(i=1;i<9;i+=3){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell2);
    }
    if(cell3!=="" && cell3==cell6 && cell3==cell9 ){
        for(i=2;i<10;i+=3){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell3);
    }
    if(cell4!=="" && cell4==cell5 && cell4==cell6 ){
        for(i=3;i<6;i++){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell4);
    }
    if(cell3!=="" && cell3==cell5 && cell3==cell7 ){
        for(i=2;i<8;i+=2){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell3);
    }

    if(cell7!=="" && cell7==cell8 && cell7==cell9 ){
        for(i=6;i<10;i++){
        document.getElementById(i.toString()).style.backgroundColor= "red";
        }
        endGame(cell7);
    }

    function endGame(cell){
        var again =document.getElementById('endgame');
        again.style.display= "block";
        document.getElementById('last').innerHTML= 'player ' + cell + ' has won!!!';
        var restart = document.getElementById('restart');
        restart.onclick = function(){
    
            again.style.display=null;
            for(i=0;i<9;i++){
                document.getElementById(i.toString()).innerHTML="";
                document.getElementById(i.toString()).style.backgroundColor=null;
                
                
            }
    
    
        }  
    }
   
    


}


