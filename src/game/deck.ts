// type Suit = "b" | "c" | "d" | "s"

// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10


// interface SingleCard {
//     suit: Suit;
//     rank: Rank
//     assetURL: String
// }

import { SingleCard, Suit } from "../types"


export class Card implements SingleCard {
    public readonly suit: Suit;
    public readonly rank: number;

    constructor(suit: Suit, rank: number) {
        this.suit = suit
        this.rank = rank
    }

    public get suitName(): string {
        return Suit[this.suit];
    }

    public get fullCard(): string {
        return `${this.suitName}${this.rank}`
    }
    public get cardImage(): string {
        return `assets/cards/${this.suit}${this.rank}`
    }
}

export class Deck {
    private deck: Card[]
    constructor() {
        this.deck = []
        for (let s = 0; s < 4; s++) {
            for (let r = 1; r < 11; r++) {
                this.deck.push(new Card(s, r))
            }
        }
    }
    public shuffle(): void {
        this.deck.sort(() => Math.floor(Math.random() * 3 - 1));
    }
    public draw(): Card {
        return this.deck.shift() as Card
    }
}


