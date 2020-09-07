export class Team {
    idTeam: number;
    name: string;
    season: string;
    goals: number;
    conceded: number;
    points: number;

    constructor(idTeam: number, name: string, season: string, goals: number, conceded: number, points: number) {
        this.idTeam = idTeam;
        this.name = name;
        this.season = season;
        this.goals = goals;
        this.conceded = conceded;
        this.points = points;
    }



}
