import { Component, OnInit, Inject, ViewChild, AfterViewInit, forwardRef, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';
import { Subscription } from 'rxjs';
import { Match } from 'src/app/models/match';
import { Playermatchdetails } from 'src/app/models/playermatchdetails';
import { PlayerserviceService } from 'src/app/services/playerservice.service';
import { Player } from 'src/app/models/player';
import { Grouppositions } from 'src/app/models/grouppositions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],

})
export class AddMatchComponent implements OnInit {

  
  @ViewChildren("haha") firstChild: QueryList<any>;
  @ViewChildren("haha2") secondChild: QueryList<any>;

  teams: Team[];
  homeTeam: Team;
  awayTeam: Team;
  match: Match;
  hometeamscore: number;
  homeTeamSubscription: Subscription;
  homeTeamPlayersSubscription: Subscription;
  homeTeamPlayers: Playermatchdetails[];
  // htPlayers: Player[];
  htPlayers: Grouppositions[]

  constructor(private teamService: TeamService, private playerService: PlayerserviceService, private renderer: Renderer2) {
    this.hometeamscore = 0;
    this.homeTeam = new Team();
    this.awayTeam = new Team();
    this.homeTeamPlayers = [];
    this.htPlayers = [{name: 'GK', players: []}, {name: 'DEF', players: []}, {name: 'MID', players: []}, {name: 'ATT', players: []}];
    this.match = new Match();
    for(let i=0;i<11;i++) {
      this.homeTeamPlayers.push(new Playermatchdetails());
    }
    console.log(this.homeTeamPlayers)
   }

  ngOnInit() {
    this.teamService.getTeams().subscribe(result => {
      this.teams = result;
    })
  }

  ngOnDestroy(): void {
    this.homeTeamSubscription.unsubscribe();
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  homeTeamz(event: any) {
    this.match.teamhome = event.value.name
    this.match.teamhomegoals = 0;
    this.homeTeam =  null
    this.htPlayers[0].players = []
    this.htPlayers[1].players = []
    this.htPlayers[2].players = []
    this.htPlayers[3].players = []
    for(let i=0;i<11;i++) {
      this.homeTeamPlayers[i] = new Playermatchdetails();
    }
    // for(let i=0;i<11;i++) {
    //   this.homeTeamPlayers[0] = new Playermatchdetails();
    // }
    this.homeTeamSubscription = this.teamService.getTeam(event.value.idTeam).subscribe(result => {
      this.homeTeam = result;
      console.log(result)
    })
    // this.homeTeamPlayersSubscription = this.playerService.getPlayersForTeam(event.value.idTeam).subscribe(result => {
    //   this.htPlayers = result;
    //   console.log(result)
    // })
    this.homeTeamPlayersSubscription = this.playerService.getPlayersForTeam(event.value.idTeam).subscribe(result => {
      result.forEach(record => {
        if(record.position == 'GK') {
          this.htPlayers[0].players.push(record)
        } else if(record.position == 'RB' || record.position == 'LB' || record.position == 'CB') {
          this.htPlayers[1].players.push(record)
        } else if(record.position == 'RM' || record.position == 'LM' || record.position == 'CM') {
          this.htPlayers[2].players.push(record)
        } else {
          this.htPlayers[3].players.push(record)
        }
      })
    })
    console.log(this.htPlayers)
  }

  test() {
    console.log(this.match)
  }

  setPlayer(event: any, id: number) {
    this.homeTeamPlayers[id].id_team = event.value.idTeam;
    this.homeTeamPlayers[id].id_player = event.value.idPlayer;
    console.log(this.homeTeamPlayers)
  }

  addGoal(pd: Playermatchdetails, id: number, xd: QueryList<any>) {
    pd.goals = pd.goals+1
    this.match.teamhomegoals = this.match.teamhomegoals+1;
    const img = this.renderer.createElement('img');
    const str = 'a' + pd.id_player.toString() + pd.goals.toString();
    console.log(str)
    const array = xd.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/goal.png")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20')
    this.renderer.setAttribute(img, 'width', '20')
    console.log(array)
    this.renderer.appendChild(array[id].nativeElement, img)
    console.log(this.homeTeamPlayers)
    
  }

  addAssist(pd: Playermatchdetails, id: number, list: QueryList<any>) {
    pd.assists = pd.assists+1;
    const img = this.renderer.createElement('img')
    const str = 'b' + pd.id_player.toString() + pd.assists.toString();
    const array = list.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/assist.jpg")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20');
    this.renderer.setAttribute(img, "width", '20');
    this.renderer.appendChild(array[id].nativeElement, img);
  }

  deleteAssist(pd: Playermatchdetails, id: number, list: QueryList<any>) {
    pd.assists = pd.assists-1;
    const img = this.renderer.createElement('img');
    const str = 'b' + pd.id_player.toString() + (pd.assists+1).toString();
    const array = list.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/assist.jpg")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20');
    this.renderer.setAttribute(img, "width", '20');
    this.renderer.removeChild(array[id].nativeElement, img);
    const test = this.renderer.selectRootElement('#'+str);
    this.renderer.removeChild(array[id].nativeElement, test);
  }

  deleteGoal(pd: Playermatchdetails, id: number, list: QueryList<any>) {
    pd.goals = pd.goals-1;
    this.match.teamhomegoals = this.match.teamhomegoals-1;
    console.log(pd.goals)
    const img = this.renderer.createElement('img');
    const str = 'a' + pd.id_player.toString() + (pd.goals+1).toString();
    console.log("do usuniecia " + str)
    const array = list.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/goal.png")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20')
    this.renderer.setAttribute(img, 'width', '20')
    const test = this.renderer.selectRootElement('#'+str)
    console.log(test)
    this.renderer.removeChild(array[id].nativeElement, test)


  }
  
  yellowCard(pd: Playermatchdetails) {
    // pd.ycards == 0 ? pd.ycards = pd.ycards+1 : pd.ycards = pd.ycards-1;
    if(pd.ycards == 0 && pd.rcards == 0) {
      pd.ycards = pd.ycards+1;
    } else if(pd.ycards == 1 && pd.rcards == 0) {
      pd.ycards = pd.ycards-1;
    } else if(pd.ycards == 2 && pd.rcards == 1) {
      pd.ycards = pd.ycards-2;
    } else if(pd.ycards == 0 && pd.rcards == 1) {
      pd.ycards = pd.ycards+2;
    }
    console.log(pd)
  }

  redCard(pd: Playermatchdetails) {
    // pd.rcards == 0 ? pd.rcards = pd.rcards+1 : pd.rcards = pd.rcards-1;
    if(pd.rcards == 0 && pd.ycards == 0) {
      pd.rcards = pd.rcards+1;
    } else if(pd.rcards == 1 && pd.ycards == 0) {
      pd.rcards = pd.rcards-1;
    } else if(pd.ycards == 1 && pd.rcards == 0){
      pd.rcards = pd.rcards+1;
      pd.ycards = pd.ycards+1;
    } else if(pd.ycards == 2 && pd.rcards == 1) {
      pd.rcards = pd.rcards-1;
      pd.ycards = pd.ycards-1;
    }
    console.log(pd)
  }

  



}
