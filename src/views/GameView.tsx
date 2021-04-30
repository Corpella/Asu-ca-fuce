import React from "react";

import '../css/GameView.scss'

import wood from '../assets/table/Wood.jpg'


import { CardDisplay } from "components/CardDisplay";

import { Game } from "game/game";




const App: React.FC = () => {
    const game = new Game(6)
    console.log('Players:', game.players)

    console.log('Deck:', game.deck)

    return (
        <div id="bg">
            <div className="game-view" >
                <img src={wood} className="table-view" alt="table" />
                <CardDisplay players={game.players} />

            </div>
        </div>

    );
}

export default App;