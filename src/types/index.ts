export type CardSuit = "spade" | "heart" | "diamond" | "club";

export type CardLevel =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

export type CardColor = "#000000" | "#b42f03";

export type CardStatus = "opened" | "closed";

export interface ICardData {
  suit: CardSuit;
  level: CardLevel;
  color: CardColor;
  status: CardStatus;
}
