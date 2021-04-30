import { PlayerData, SingleCard, Lives } from "../types"
import { Card } from "./deck";

export class Player implements PlayerData {

    public card: SingleCard | null;
    public lives: Lives;
    public position: number

    constructor(lives: Lives, position: number, card?: SingleCard) {

        this.position = position

        if (card) {
            this.card = new Card(card.suit, card.rank)
        }
        else this.card = null
        this.lives = lives
    }

    public removeCard(receivingCard: SingleCard): void {
        this.card = receivingCard
    }
    public removeLife(): void {
        this.lives--
    }

}