export class Match {
    id_match?: number;
    season: string;
    teamhome: string;
    teamaway: string;
    teamhomegoals: number;
    teamawaygoals: number;
    winner: string;
    fixture: number;

    setTeamHome(teamHome: string) {
        this.teamhome = teamHome;
    }
}
