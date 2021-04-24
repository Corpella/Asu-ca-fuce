import React from 'react'
import { PlayerData } from 'types'

interface Props {
    players: PlayerData[];
}

const layout = (playersArray: PlayerData[]): string => {
    switch (playersArray.length) {
        case 2:
            return 'two-players'
        case 3:
            return 'three-players'
        default:
            return 'two-players'
    }
}

export const CardDisplay: React.FC<Props> = ({ players }) => {
    return <div className={layout(players)}>

        {players.map((p) => {
            return <div key={p.lives}>
                { }
            </div>

        })}


    </div>
}
