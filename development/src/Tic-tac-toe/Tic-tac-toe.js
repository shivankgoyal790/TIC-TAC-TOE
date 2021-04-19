
import React from "react"
import "./Tic-tac-toe.css"

var count= 0;

class Tictactoe extends React.Component{

  

    render(){
    return(

        <>

        <div id="who-won">
                        <h1 id="win1">PLAYER 1 WON 💥</h1>
                        <h1 id="win2">PLAYER 2 WON 💥</h1>
                        <button id="btn" onClick={() => this.playagain()}>PLAY AGAIN</button> 
        </div>
        <div className="tic-container">
          
            <h1 className="heading"> TIC-TAC-TOE</h1>
            <h1>👨 PLAYER 1 : ❌ </h1>
            <h1>👨‍ PLAYER 2 : 🔴 </h1>
            <div className="box">
                <div id="0" className="flex-box" onClick = {() => this.shoot("0")}>2</div>
                <div id="1" className="flex-box" onClick = {() => this.shoot("1")}>2</div>
                <div id="2" className="flex-box" onClick = {() => this.shoot("2")}>1</div>
                <div id="3" className="flex-box" onClick = {() => this.shoot("3")}>3</div>
                <div id="4" className="flex-box" onClick = {() => this.shoot("4")}>3</div>
                <div id="5" className="flex-box" onClick = {() => this.shoot("5")}>3</div>
                <div id="6" className="flex-box" onClick = {() => this.shoot("6")}>3</div>
                <div id="7" className="flex-box" onClick = {() => this.shoot("7")}>4</div>
                <div id="8" className="flex-box" onClick = {() => this.shoot("8")}>4</div>




            </div>


        </div>

      </>  
    
    );
}

    shoot(a){

        if(count % 2 === 0){
            document.getElementById(a).innerHTML = "❌";
            this.check();
            
            count++;
        }
        else{
            document.getElementById(a).innerHTML = "🔴";  
            count++;
            this.check();
        }   

    }


    playagain = () => {

        document.getElementById("who-won").style.display = "none";
        document.getElementById("win2").style.display = "none";
        document.getElementById("win1").style.display = "none";
        document.getElementById("0").innerHTML = "";
        document.getElementById("1").innerHTML = "";
       document.getElementById("2").innerHTML = "";
       document.getElementById("3").innerHTML = "";
        document.getElementById("4").innerHTML = "";
        document.getElementById("5").innerHTML = "";
        document.getElementById("6").innerHTML = "";
       document.getElementById("7").innerHTML = "";
        document.getElementById("8").innerHTML = "";
        count = 0;



    }


    check(){
        const a = document.getElementById("0");
        const b = document.getElementById("1");
        const c = document.getElementById("2");
        const d = document.getElementById("3");
        const e = document.getElementById("4");
        const f = document.getElementById("5");
        const g = document.getElementById("6");
        const h = document.getElementById("7");
        const i = document.getElementById("8");

        if(a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML)
        {
            if(a.innerHTML === "🔴"){
                document.getElementById("who-won").style.display = "block";
                document.getElementById("win2").style.display = "block";
            }
            else{
            document.getElementById("who-won").style.display = "block";
            document.getElementById("win1").style.display = "block";
            }
        }

        else if(a.innerHTML === e.innerHTML && e.innerHTML === i.innerHTML){
            if(a.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(a.innerHTML === d.innerHTML && d.innerHTML === g.innerHTML){
            if(a.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(b.innerHTML === e.innerHTML && e.innerHTML === f.innerHTML){
            if(b.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(g.innerHTML === h.innerHTML && h.innerHTML === i.innerHTML){
            if(g.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(g.innerHTML === e.innerHTML && e.innerHTML === c.innerHTML){
            if(g.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(b.innerHTML === e.innerHTML && e.innerHTML === h.innerHTML){
            if(b.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }

        else if(c.innerHTML === f.innerHTML && f.innerHTML === i.innerHTML){
            if(c.innerHTML === "🔴")
            document.getElementById("win2").style.display = "inline";
            else
            document.getElementById("win1").style.display = "inline";
        
        }
}

}

export default Tictactoe;