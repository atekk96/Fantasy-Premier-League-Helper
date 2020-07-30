export class Playermatchdetails {
    id?: number;
    id_match?: number;
    id_player: number;
    id_team: number;
    position: string;
    season: string = '19/20';
    goals: number = 0;
    assists: number = 0;
    ycards: number = 0;
    rcards: number = 0;
    minutesplayed: number = 0;
}
