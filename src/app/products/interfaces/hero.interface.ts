
export enum Color{
    Red,
    Blue,
    Green,
    Yellow,
    Purple,
    Black,
    White
}

export interface Hero{
    name:string;
    canFly:boolean;
    color: Color
}