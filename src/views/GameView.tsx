import React from "react";

import 'css/GameView.css'

import table from '../assets/table/Table.png'


import { CardDisplay } from "components/CardDisplay";
import { PlayerData, Suit } from "types";
import { Player } from "game/player";

const players: PlayerData[] = [new Player(3,),
]



const App: React.FC = () => {
    return (
        <div id="bg">
            <div>
                <img src={table} alt="table" />
                <CardDisplay players={players} />

            </div>
        </div>

    );
}

export default App;