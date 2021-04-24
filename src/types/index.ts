export enum Suit {
    b, c, d, s
}

export interface SingleCard {
    suit: Suit;
    rank: number
}

export type Lives = 0 | 1 | 2 | 3


export interface PlayerData {
    card?: SingleCard | null,
    lives: Lives
}

