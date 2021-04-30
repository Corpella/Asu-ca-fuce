import { DeckType, GameType, PlayerData } from "types";

import { Deck } from "./deck";
import { Player } from "./player";

export class Game implements GameType {

    public players: PlayerData[];

    public playersNumber: number

    public deck: DeckType

    constructor(playersNumber: number) {
        this.deck = new Deck() as DeckType
        this.deck.shuffle()
        this.playersNumber = playersNumber
        this.players = []
        for (let p = 1; p <= playersNumber; p++) {
            this.players.push(
                new Player(3, p, this.deck.draw())
            )
        }

    }

    public swapCards(playerPosition: number) {
        const firstPlayer = this.players[playerPosition]

        let exitLoop = false

        for (const player of this.players.slice(playerPosition)) {
            switch (player.card?.rank) {
                case 10:
                    exitLoop = true
                    console.log(`Can't swap card`)
                    break
                case 9:
                    console.log('Go to the next player');
                    break

                default:
                    [firstPlayer.card, player.card] = [player.card, firstPlayer.card];
                    exitLoop = true
                    break;
            }
            if (exitLoop) {
                break
            }
        }
    }

}