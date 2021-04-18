import React from "react"
import "./Tic-tac-toe.css"


const Tictactoe = () =>{
    return(
        <div className="tic-container">
            <h1 className="heading">TIC-TAC-TOE</h1>
            <h1>👨 PLAYER 1 : ❌</h1>
            <h1>👨‍ PLAYER 2 : 🔴</h1>

            <div className="box">
                <div className="flex-box">❌</div>
                <div className="flex-box">❌</div>
                <div className="flex-box">❌</div>
                <div className="flex-box">🔴</div>
                <div className="flex-box">❌</div>
                <div className="flex-box">🔴</div>
                <div className="flex-box">🔴</div>
                <div className="flex-box">🔴</div>
                <div className="flex-box">❌</div>




            </div>


        </div>
    
    );
}

export default Tictactoe;