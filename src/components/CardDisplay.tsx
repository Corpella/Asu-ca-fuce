import { CSSProperties } from '@material-ui/styles'
import React from 'react'
import { PlayerData } from 'types'

import '../css/CardDisplay.scss'
interface Props {
    players: PlayerData[];
}





export const CardDisplay: React.FC<Props> = ({ players }) => {

    const calcRotation = (index: number): CSSProperties => {
        const itemsCount = players.length,
            itemAngle = 360 / itemsCount,
            itemWidth = 88,
            uniqueAngle = (index + 1) * itemAngle;

        // return { transform: 'rotate(-' + uniqueAngle + 'deg) translate(' + itemWidth*3.5  + 'px) rotate(' + -itemAngle + 90 + 'deg)' }

        return { transform: `rotate(-${uniqueAngle}deg) translate(${itemWidth * 3.5}px) rotate(${90}deg)` }

    }


    return <div className="card-display">

        {
            players.map((p, i) => {
                return <img key={i} className="card-image" src={p.card?.cardImage!} alt={`card${i}`} style={calcRotation(i)} />


            })}


    </div>
}
