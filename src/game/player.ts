import { PlayerData, SingleCard, Lives } from "../types"
import { Card } from "./deck";

export class Player implements PlayerData {

    public card: SingleCard | null;
    public lives: Lives;

    constructor(lives: Lives, card?: SingleCard) {
        if (card) {
            this.card = new Card(card.suit, card.rank)
        }
        else this.card = null
        this.lives = lives
    }

    public assignCard(card: SingleCard): void {
        this.card = card
    }

    public get remainingLives(): number {
        return this.lives
    }
    public get currentCard(): SingleCard | null {
        return this.card
    }
    public swapCard(receivingCard: SingleCard): void {
        this.card = new Card(receivingCard.suit, receivingCard.rank)
    }
    public removeLife(): void {
        this.lives--
    }

}