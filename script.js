let player1;
        let player2;
        let flag=1;
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
      
        function manipulateData() {
            // Get the user input value
            player1 = document.getElementById("userInput1").value;
            player2 = document.getElementById("userInput2").value;
            player1=player1.toUpperCase();
            player2=player2.toUpperCase();
           

            // Check if the input is empty
            if (!player1.trim() || !player2.trim()) {
                alert("Please enter a valid players names.");
                         
            }
            else{
                document.getElementById("player_turn").innerHTML=player1+"`s turn";
                document.getElementById("span_p1").innerHTML=player1 +" your coin is X";
                document.getElementById("span_p2").innerHTML=player2 +" your coin is O";
                document.getElementById("b1").disabled=false;
                document.getElementById("b2").disabled=false;
                document.getElementById("b3").disabled=false;
                document.getElementById("b4").disabled=false;
                document.getElementById("b5").disabled=false;
                document.getElementById("b6").disabled=false;
                document.getElementById("b7").disabled=false;
                document.getElementById("b8").disabled=false;
                document.getElementById("b9").disabled=false;

            }

           // Display the manipulated data
            
        }   
        function fun() {
        var b1,b2,b3,b4,b5,b6,b7,b8,b9;
        b1=document.getElementById("b1").value;
        b2=document.getElementById("b2").value;
        b3=document.getElementById("b3").value;
        b4=document.getElementById("b4").value;
        b5=document.getElementById("b5").value;
        b6=document.getElementById("b6").value;
        b7=document.getElementById("b7").value;
        b8=document.getElementById("b8").value;
        b9=document.getElementById("b9").value;
        var btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
         btn1=document.getElementById("b1");
         btn2=document.getElementById("b2");
         btn3=document.getElementById("b3");
         btn4=document.getElementById("b4");
         btn5=document.getElementById("b5");
         btn6=document.getElementById("b6");
         btn7=document.getElementById("b7");
         btn8=document.getElementById("b8");
         btn9=document.getElementById("b9");

        if (b1=="X" && b2=="X" && b3=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn1.style.color="green";
            btn2.style.color="green";
            btn3.style.color="green";
            alert(p1_res);
            btn4.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;
            btn7.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;
            document.getElementById("player_turn").innerHTML="Game Over!";      
            document.getElementById("player_turn").style.color="red";     
        }
        else if(b4=="X" && b5=="X" && b6=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn4.style.color="green";
            btn5.style.color="green";
            btn6.style.color="green";
             
            btn1.disabled=true;
            btn2.disabled=true;
            btn3.disabled=true;
            btn7.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;

            alert(p1_res);
            document.getElementById("player_turn").innerHTML="Game Over!";    
            document.getElementById("player_turn").style.color="red";     
        }
        else if(b7=="X" && b8=="X" && b9=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn7.style.color="green";
            btn8.style.color="green";
            btn9.style.color="green";

            btn1.disabled=true;
            btn2.disabled=true;
            btn3.disabled=true;
            btn4.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;

            alert(p1_res);
            document.getElementById("player_turn").innerHTML="Game Over!";           
            document.getElementById("player_turn").style.color="red";    
        }
        else if(b1=="X" && b4=="X" && b7=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn1.style.color="green";
            btn4.style.color="green";
            btn7.style.color="green";

            btn2.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;
            btn3.disabled=true;
           
             alert(p1_res);
             
             document.getElementById("player_turn").innerHTML="Game Over!";           
             document.getElementById("player_turn").style.color="red";     

        }
        else if(b1=="X" && b5=="X" && b9=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn1.style.color="green";
            btn5.style.color="green";
            btn9.style.color="green";

          
            btn2.disabled=true;
            btn3.disabled=true;
            btn4.disabled=true;
            btn6.disabled=true;
            btn8.disabled=true;
            btn7.disabled=true;
             alert(p1_res);
             document.getElementById("player_turn").innerHTML="Game Over!";
             document.getElementById("player_turn").style.color="red";     

        }
        else if(b2=="X" && b5=="X" && b8=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn2.style.color="green";
            btn5.style.color="green";
            btn8.style.color="green";
            
            btn1.disabled=true;
            btn3.disabled=true;
            btn6.disabled=true;
            btn4.disabled=true;
            btn9.disabled=true;
            btn7.disabled=true;
             alert(p1_res);
             document.getElementById("player_turn").innerHTML="Game Over!";
             document.getElementById("player_turn").style.color="red";     

        }
        else if(b3=="X" && b6=="X" && b9=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn3.style.color="green";
            btn6.style.color="green";
            btn9.style.color="green";

            btn1.disabled=true;
            btn4.disabled=true;
            btn5.disabled=true;
            btn7.disabled=true;
            btn8.disabled=true;
            btn2.disabled=true;

             alert(p1_res);
             document.getElementById("player_turn").innerHTML="Game Over!";
             document.getElementById("player_turn").style.color="red";     

        }   
        else if(b3=="X" && b5=="X" && b7=="X"){
            let p1_res='Congratulations '+player1+' you are the winner!🎉';
            btn3.style.color="green";
            btn5.style.color="green";
            btn7.style.color="green";

            btn1.disabled=true;
            btn8.disabled=true;
            btn6.disabled=true;
            btn4.disabled=true;
            btn9.disabled=true;
            btn2.disabled=true;

             alert(p1_res);
             document.getElementById("player_turn").innerHTML="Game Over!";
             document.getElementById("player_turn").style.color="red";     

        }
        // O starts here
        else if(b1=="O" && b2=="O" && b3=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';
            btn1.style.color="green";
            btn2.style.color="green";
            btn3.style.color="green";

            btn4.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;
            btn7.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;
  
           alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";
            document.getElementById("player_turn").style.color="red";     

        }
        else if(b4=="O" && b5=="O" && b6=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';
            btn4.style.color="green";
            btn5.style.color="green";
            btn6.style.color="green";

            btn1.disabled=true;
            btn2.disabled=true;
            btn3.disabled=true;
            btn7.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";
            document.getElementById("player_turn").style.color="red";     

        }
        else if(b7=="O" && b8=="O" && b9=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn7.style.color="green";
            btn8.style.color="green";
            btn9.style.color="green";


            btn1.disabled=true;
            btn2.disabled=true;
            btn3.disabled=true;
            btn4.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";
            document.getElementById("player_turn").style.color="red";     

        }
        else if(b1=="O" && b4=="O" && b7=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn1.style.color="green";
            btn4.style.color="green";
            btn7.style.color="green";

            btn2.disabled=true;
            btn3.disabled=true;
            btn5.disabled=true;
            btn6.disabled=true;
            btn8.disabled=true;
            btn9.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";  
            document.getElementById("player_turn").style.color="red";     
         

        }
        else if(b1=="O" && b5=="O" && b9=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn1.style.color="green";
            btn5.style.color="green";
            btn9.style.color="green";

            btn2.disabled=true;
            btn3.disabled=true;
            btn6.disabled=true;
            btn8.disabled=true;
            btn4.disabled=true;
            btn7.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";     
            document.getElementById("player_turn").style.color="red";     
      

        }
        else if(b2=="O" && b5=="O" && b8=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn2.style.color="green";
            btn5.style.color="green";
            btn8.style.color="green";

            btn1.disabled=true;
            btn3.disabled=true;
            btn6.disabled=true;
            btn4.disabled=true;
            btn7.disabled=true;
            btn9.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";  
            document.getElementById("player_turn").style.color="red";     
         

            
        }
        else if(b3=="O" && b6=="O" && b9=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn3.style.color="green";
            btn6.style.color="green";
            btn9.style.color="green";

            btn1.disabled=true;
            btn2.disabled=true;
            btn7.disabled=true;
            btn4.disabled=true;
            btn8.disabled=true;
            btn5.disabled=true;

            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";
            document.getElementById("player_turn").style.color="red";     

        }
        else if(b3=="O" && b5=="O" && b7=="O"){
            let p2_res='Congratulations '+player2+' you are the winner!🎉';

            btn3.style.color="green";
            btn5.style.color="green";
            btn7.style.color="green";

            btn1.disabled=true;
            btn2.disabled=true;
            btn6.disabled=true;
            btn8.disabled=true;
            btn4.disabled=true;
            btn9.disabled=true;
            alert(p2_res);
            document.getElementById("player_turn").innerHTML="Game Over!";
            document.getElementById("player_turn").style.color="red";     

        }
        else if((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
            b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
            b8 == 'O') && (b9 == 'X' || b9 == 'O')){
            let text = player1 + " & " + player2+ " your match tied. reset the match and play again.";
            alert(text);
            btn1.style.color="red";
            btn2.style.color="red";
            btn3.style.color="red";
            btn4.style.color="red";
            btn5.style.color="red";
            btn6.style.color="red";
            btn7.style.color="red";
            btn8.style.color="red";
            btn9.style.color="red";
            document.getElementById("player_turn").innerHTML="Game Over!";    
            document.getElementById("player_turn").style.color="red";     
       

        }
        
       else{
        if(flag == 1){
            document.getElementById("player_turn").innerHTML =player1+"`s turn";
            // flag=0;
        }else{
            document.getElementById("player_turn").innerHTML =player2+"`s turn";
            // flag=1;
        }
       }
        }
        function game_reset(){
            window.location.reload();
            b1=b2=b3=b4=b5=b6=b7=b8=b9=" ";
        }
      
        function fun1() {
            if(flag==1){
            document.getElementById("b1").value="X";
            document.getElementById("b1").disabled=true;
            flag=0;
        }
        else{
            document.getElementById("b1").value="O";
            document.getElementById("b1").disabled=true;
            document.getElementById("b1").style.color="red";
            flag=1;
        }

        }
        function fun2() {
            if(flag==1){
            document.getElementById("b2").value="X";
            document.getElementById("b2").disabled=true;
            
            flag=0;
            }
            else{
            document.getElementById("b2").value="O";
            document.getElementById("b2").disabled=true;
            document.getElementById("b2").style.color="red";
            flag=1;}
        }
        function fun3() {
            if(flag==1){
            document.getElementById("b3").value="X";
            document.getElementById("b3").disabled=true;
            flag=0;
            }
            else{
            document.getElementById("b3").value="O";
            document.getElementById("b3").disabled=true;
            document.getElementById("b3").style.color="red";
            flag=1;}
        }
        function fun4() {
            if(flag==1){
            document.getElementById("b4").value="X";
            document.getElementById("b4").disabled=true;
            
            flag=0;
            }
            else{
            document.getElementById("b4").value="O";
            document.getElementById("b4").disabled=true;
            document.getElementById("b4").style.color="red";
            flag=1;}
        }
        function fun5() {
            if(flag==1){
            document.getElementById("b5").value="X";
            document.getElementById("b5").disabled=true;
             
            flag=0;
            }
            else{
            document.getElementById("b5").value="O";
            document.getElementById("b5").disabled=true;
            document.getElementById("b5").style.color="red";
            flag=1;}
        }
        function fun6() {
            if(flag==1){
            document.getElementById("b6").value="X";
            document.getElementById("b6").disabled=true;
            flag=0;
            }
            else{
            document.getElementById("b6").value="O";
            document.getElementById("b6").disabled=true;
            document.getElementById("b6").style.color="red";
            flag=1;}
        }
        function fun7() {
            if(flag==1){
            document.getElementById("b7").value="X";
            document.getElementById("b7").disabled=true;
            flag=0;
            }
            else{
            document.getElementById("b7").value="O";
            document.getElementById("b7").disabled=true;
            document.getElementById("b7").style.color="red";
            flag=1;}
        }
        function fun8() {
            if(flag==1){
            document.getElementById("b8").value="X";
            document.getElementById("b8").disabled=true;
            flag=0;
            }
            else{
            document.getElementById("b8").value="O";
            document.getElementById("b8").disabled=true;
            document.getElementById("b8").style.color="red";
            flag=1;}
        }
        function fun9() {
            if(flag==1){
            document.getElementById("b9").value="X";
            document.getElementById("b9").disabled=true;
            flag=0;
            }
            else{
            document.getElementById("b9").value="O";
            document.getElementById("b9").disabled=true;
            document.getElementById("b9").style.color="red";
            flag=1;}
        }