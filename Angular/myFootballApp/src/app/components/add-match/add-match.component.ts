import { Component, OnInit, Inject, ViewChild, AfterViewInit, forwardRef, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';
import { Subscription, pairs } from 'rxjs';
import { Match } from 'src/app/models/match';
import { Playermatchdetails } from 'src/app/models/playermatchdetails';
import { PlayerserviceService } from 'src/app/services/playerservice.service';
import { Player } from 'src/app/models/player';
import { Grouppositions } from 'src/app/models/grouppositions';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
import { PlayermatchdetailService } from 'src/app/services/playermatchdetail.service';


interface Positions {
  value: string;
}

interface Ratings {
  value: number;
}

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],

})



export class AddMatchComponent implements OnInit {



  
  @ViewChildren("haha") firstChild: QueryList<any>;
  @ViewChildren("haha2") secondChild: QueryList<any>;
  @ViewChildren("haha3") thirdChild: QueryList<any>;
  @ViewChildren("haha4") fourthChild: QueryList<any>;
  @ViewChildren("ownGoalHome") ogHome: QueryList<any>;
  @ViewChildren("ownGoalAway") ogAway: QueryList<any>;

  positions: Positions[] = [
    {value: 'GK'}, {value: 'RB'}, {value: 'LB'}, {value: 'CB'}, {value: 'RM'}, {value: 'CDM'}, {value: 'CM'}, {value: 'CAM'},
    {value: 'LM'}, {value: 'RW'}, {value: 'LW'}, {value: 'ST'}
  ]


  ratings: Ratings[] = [
    {value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}, {value: 7}, {value: 8}, {value: 9}, {value: 10}
  ]

  gameForm: FormGroup;
  items: FormArray;
  itemsSecondTeam: FormArray;
  teams: Team[];
  homeTeam: Team;
  awayTeam: Team;
  match: Match;
  hometeamscore: number;
  homeTeamSubscription: Subscription;
  homeTeamPlayersSubscription: Subscription;
  awayTeamPlayersSubscription: Subscription;
  playerSubscription: Subscription;
  homeTeamPlayers: Playermatchdetails[];
  awayTeamPlayers: Playermatchdetails[];
  homePlayers: Player[];
  awayPlayers: Player[];
  // htPlayers: Player[];
  htPlayers: Grouppositions[];
  atPlayers: Grouppositions[];
  homeTeamIds: Array<number | number>[]



  constructor(private teamService: TeamService, private playerService: PlayerserviceService, private matchService: MatchService,
     private playerMatchDetailService: PlayermatchdetailService, private renderer: Renderer2, private fb: FormBuilder) {
    this.hometeamscore = 0;
    this.homeTeam = new Team(0, '', '', 0, 0, 0)
    this.awayTeam = new Team(0, '', '', 0, 0, 0);
    this.homeTeamPlayers = [];
    this.awayTeamPlayers = [];
    this.homePlayers = []
    this.awayPlayers = []
    this.homeTeamIds = []
    this.htPlayers = [{name: 'GK', players: []}, {name: 'DEF', players: []}, {name: 'MID', players: []}, {name: 'ATT', players: []}];
    this.atPlayers = [{name: 'GK', players: []}, {name: 'DEF', players: []}, {name: 'MID', players: []}, {name: 'ATT', players: []}];
    this.match = new Match();
    for(let i=0;i<11;i++) {
      this.homeTeamPlayers.push(new Playermatchdetails());
      this.awayTeamPlayers.push(new Playermatchdetails());
      this.homePlayers.push(new Player());
      this.awayPlayers.push(new Player());
      this.homeTeamIds.push([null, null]);
    }
    console.log(this.homeTeamPlayers)
   }

  ngOnInit() {
    this.teamService.getTeams().subscribe(result => {
      this.teams = result;
    })
    this.gameForm = this.fb.group({
      teamHomeName: ['', Validators.required],
      teamAwayName: ['', Validators.required],
      fixture: '',
      items: this.fb.array([]),
      itemsSecondTeam: this.fb.array([])
    });
  }

  ngOnDestroy(): void {
    // this.homeTeamSubscription.unsubscribe();
    this.homeTeamPlayersSubscription.unsubscribe();
    this.awayTeamPlayersSubscription.unsubscribe();
    this.playerSubscription.unsubscribe();
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  test(player: any) {
    if(player.isSelected) {
      console.log('xd')
    }
  }

  pickTeam(event: any, team: Team, players: Grouppositions[], playerDetails: Playermatchdetails[], teamSubscription: Subscription, formArr: FormArray) {
    console.log(this.homeTeam.name + ' : ' + team.name)
    if(team == this.homeTeam) {
      this.match.teamHome = event.value.idTeam
      this.match.teamHomeGoals = 0;
    } else {
      this.match.teamAway = event.value.idTeam;
      this.match.teamAwayGoals = 0;
    }
    if(this.items != undefined && team == this.homeTeam) {
      this.items.clear()
    }
    if(this.itemsSecondTeam != undefined && team == this.awayTeam) {
      this.itemsSecondTeam.clear()
    }

    for(let i=0;i<11;i++) {
      playerDetails[i] = new Playermatchdetails();
      this.addItem(team);
    }
    team =  null
    players[0].players = []
    players[1].players = []
    players[2].players = []
    players[3].players = []
    // for(let i=0;i<11;i++) {
    //   this.homeTeamPlayers[0] = new Playermatchdetails();
    // }
    // this.homeTeamSubscription = this.teamService.getTeam(event.value.idTeam).subscribe(result => {
    //   this.homeTeam = result;
    //   console.log(result)
    // })
    // this.homeTeamPlayersSubscription = this.playerService.getPlayersForTeam(event.value.idTeam).subscribe(result => {
    //   this.htPlayers = result;
    //   console.log(result)
    // })
    teamSubscription = this.playerService.getPlayersForTeam(event.value.idTeam).subscribe(result => {
      result.forEach(record => {
        record.enabled = true;
        if(record.position == 'GK') {
          players[0].players.push({player: record, enabled: true})
        } else if(record.position == 'RB' || record.position == 'LB' || record.position == 'CB') {
          players[1].players.push({player: record, enabled: true})
        } else if(record.position == 'RM' || record.position == 'LM' || record.position == 'CM') {
          players[2].players.push({player: record, enabled: true})
        } else {
          players[3].players.push({player: record, enabled: true})
        } 
      })
    })
  }


  setPlayer(team: Team, id: number, whichPosition: number, whichPlayer: number, playerDetails: Playermatchdetails[], formName: string, group: Grouppositions[]) {
    if(this.homeTeamIds[id][0] != null) {
      let whichPos = this.homeTeamIds[id][0];
      let whichPlay = this.homeTeamIds[id][1];
      group[whichPos].players[whichPlay].enabled = true;
    }
    playerDetails[id].id_team = team.idTeam
    playerDetails[id].id_player = group[whichPosition].players[whichPlayer].player.idPlayer
    group[whichPosition].players[whichPlayer].enabled = false;
    this.homeTeamIds[id][0] = whichPosition
    this.homeTeamIds[id][1] = whichPlayer
    this.playerService.getPlayerById(group[whichPosition].players[whichPlayer].player.idPlayer).subscribe(result => {
      this.homePlayers[id] = result;
    })

    
  }

  addGoal(pd: Playermatchdetails, player: Player, id: number, xd: QueryList<any>, team: Team) {
    if(team == this.homeTeam) {
      this.match.teamHomeGoals = this.match.teamHomeGoals+1;
    } else {
      this.match.teamAwayGoals = this.match.teamAwayGoals+1;
    }
    pd.goals = pd.goals+1 
    player.goals = player.goals+1
    const img = this.renderer.createElement('img');
    const str = 'c' + pd.id_player.toString() + pd.goals.toString();
    console.log(str)
    const array = xd.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/goal.png")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20')
    this.renderer.setAttribute(img, 'width', '20')
    console.log(array)
    this.renderer.appendChild(array[id].nativeElement, img)
    
  }

  addOwnGoal(pd: Playermatchdetails, player: Player, id: number, xd: QueryList<any>, team: Team) {
    if(team == this.homeTeam) {
      this.match.teamAwayGoals = this.match.teamAwayGoals+1;
    } else {
      this.match.teamHomeGoals = this.match.teamHomeGoals+1;
    }
    pd.owngoals = pd.owngoals+1 
    player.owngoals = player.owngoals+1
    const img = this.renderer.createElement('img');
    const str = 'c' + pd.id_player.toString() + pd.owngoals.toString();
    console.log(str)
    const array = xd.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/goal.png")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20')
    this.renderer.setAttribute(img, 'width', '20')
    console.log(array)
    this.renderer.appendChild(array[id].nativeElement, img)
    
  }

  addAssist(pd: Playermatchdetails, player: Player, id: number, list: QueryList<any>) {
    pd.assists = pd.assists+1;
    player.assists = player.assists+1
    const img = this.renderer.createElement('img')
    const str = 'b' + pd.id_player.toString() + pd.assists.toString();
    const array = list.toArray();
    this.renderer.setAttribute(img, "src", "assets/img/assist.jpg")
    this.renderer.setAttribute(img, "id", str);
    this.renderer.setAttribute(img, "height", '20');
    this.renderer.setAttribute(img, "width", '20');
    this.renderer.appendChild(array[id].nativeElement, img);
  }

  deleteAssist(pd: Playermatchdetails, player: Player, id: number, list: QueryList<any>) {
    pd.assists = pd.assists-1;
    player.assists = player.assists-1;
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

  deleteGoal(pd: Playermatchdetails, player: Player, id: number, list: QueryList<any>, team: Team, item) {
    console.log(item)
    if(team == this.homeTeam) {
      this.match.teamHomeGoals = this.match.teamHomeGoals-1;
    } else {
      this.match.teamAwayGoals = this.match.teamAwayGoals-1;
    }
    pd.goals = pd.goals-1;
    player.goals = player.goals-1;
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

  deleteOwnGoal(pd: Playermatchdetails, player: Player, id: number, list: QueryList<any>, team: Team, item) {
    console.log(item)
    if(team == this.homeTeam) {
      this.match.teamAwayGoals = this.match.teamAwayGoals-1;
    } else {
      this.match.teamHomeGoals = this.match.teamHomeGoals-1;
    }
    pd.owngoals = pd.owngoals-1;
    player.owngoals = player.owngoals-1;
    console.log(pd.goals)
    const img = this.renderer.createElement('img');
    const str = 'c' + pd.id_player.toString() + (pd.owngoals+1).toString();
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
  
  yellowCard(pd: Playermatchdetails, player: Player) {
    // pd.ycards == 0 ? pd.ycards = pd.ycards+1 : pd.ycards = pd.ycards-1;
    if(pd.ycards == 0 && pd.rcards == 0) {
      pd.ycards = pd.ycards+1;
      player.yellowcard = player.yellowcard+1;
    } else if(pd.ycards == 1 && pd.rcards == 0) {
      pd.ycards = pd.ycards-1;
      player.yellowcard = player.yellowcard-1;
    } else if(pd.ycards == 2 && pd.rcards == 1) {
      pd.ycards = pd.ycards-2;
      player.yellowcard = player.yellowcard-2;
    } else if(pd.ycards == 0 && pd.rcards == 1) {
      pd.ycards = pd.ycards+2;
      player.yellowcard = player.yellowcard+2;
    }
    console.log(pd)
  }

  redCard(pd: Playermatchdetails, player: Player) {
    // pd.rcards == 0 ? pd.rcards = pd.rcards+1 : pd.rcards = pd.rcards-1;
    if(pd.rcards == 0 && pd.ycards == 0) {
      pd.rcards = pd.rcards+1;
      player.redcard = player.redcard+1;
    } else if(pd.rcards == 1 && pd.ycards == 0) {
      pd.rcards = pd.rcards-1;
      player.redcard = player.redcard-1;
    } else if(pd.ycards == 1 && pd.rcards == 0){
      pd.rcards = pd.rcards+1;
      pd.ycards = pd.ycards+1;
      player.redcard = player.redcard+1;
      player.yellowcard = player.yellowcard+1;
    } else if(pd.ycards == 2 && pd.rcards == 1) {
      pd.rcards = pd.rcards-1;
      pd.ycards = pd.ycards-1;
      player.redcard = player.redcard-1;
      player.yellowcard = player.yellowcard-1;
    }
    console.log(pd)
  }

  addSubstitutePlayer(players: Playermatchdetails[], team: Team, player: Player[]) {
    players.push(new Playermatchdetails());
    player.push(new Player());
    this.addItem(team);
  }

  deleteSubstitutePlayer(players: Playermatchdetails[], player: Player[]) {
    players.pop();
    player.pop();
    this.items.removeAt(this.items.length-1)
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      minutes: ['', Validators.required],
      position: ['', Validators.required]
    })
  }

  addItem(team: Team): void {
    if(team == this.homeTeam) {
      this.items = this.gameForm.get('items') as FormArray
      this.items.push(this.createItem())
    } else if(team == this.awayTeam) {
      this.itemsSecondTeam = this.gameForm.get('itemsSecondTeam') as FormArray
      this.itemsSecondTeam.push(this.createItem())
    }

  }

  convertMinutesToInt(event: any, player: Playermatchdetails) {
    player.minutesplayed = parseInt(event.target.value)  
  }

  convertFixtureToInt(event: any) {
    this.match.fixture = parseInt(event.target.value);

  }

  onSubmit() {
    let addedMatch;
    let tAway;
    let tHome;
    console.log(this.homePlayers)
    if(this.gameForm.invalid) {
      console.log("TRY AGAIN")
    } else {
      if(this.match.teamHomeGoals > this.match.teamAwayGoals) {
        this.match.winner = this.match.teamHome
        tHome = new Team(this.homeTeam.idTeam, this.homeTeam.name, this.homeTeam.season, this.homeTeam.goals + this.match.teamHomeGoals, 
          this.homeTeam.conceded + this.match.teamAwayGoals, this.homeTeam.points + 3);
          tAway = new Team(this.awayTeam.idTeam, this.awayTeam.name, this.awayTeam.season, this.awayTeam.goals + this.match.teamAwayGoals, 
            this.awayTeam.conceded + this.match.teamHomeGoals, this.awayTeam.points + 0);
      } else if(this.match.teamHomeGoals == this.match.teamAwayGoals) {
        this.match.winner = null;
        tHome = new Team(this.homeTeam.idTeam, this.homeTeam.name, this.homeTeam.season, this.homeTeam.goals + this.match.teamHomeGoals, 
          this.homeTeam.conceded + this.match.teamAwayGoals, this.homeTeam.points + 1);
          tAway = new Team(this.awayTeam.idTeam, this.awayTeam.name, this.awayTeam.season, this.awayTeam.goals + this.match.teamAwayGoals, 
            this.awayTeam.conceded + this.match.teamHomeGoals, this.awayTeam.points + 1);
      } else {
        this.match.winner = this.match.teamAway;
        tHome = new Team(this.homeTeam.idTeam, this.homeTeam.name, this.homeTeam.season, this.homeTeam.goals + this.match.teamHomeGoals, 
          this.homeTeam.conceded + this.match.teamAwayGoals, this.homeTeam.points + 0);
          tAway = new Team(this.awayTeam.idTeam, this.awayTeam.name, this.awayTeam.season, this.awayTeam.goals + this.match.teamAwayGoals, 
            this.awayTeam.conceded + this.match.teamHomeGoals, this.awayTeam.points + 3);
      }
      for(let i=0;i<this.homePlayers.length;i++) {
        if(this.awayTeam.goals == 0) {
          this.homePlayers[i].cleansheet = this.homePlayers[i].cleansheet+1;
        }
      for(let i=0;i<this.awayPlayers.length;i++) {
        if(this.homeTeam.goals == 0) {
          this.awayPlayers[i].cleansheet = this.awayPlayers[i].cleansheet+1;
        }
      }
      }
      this.matchService.save(this.match).subscribe()
      setTimeout(() => {
        this.matchService.getLastMatch().subscribe(result => {
          addedMatch = result.idMatch
          for(let i=0;i<this.homeTeamPlayers.length;i++) {
            this.homeTeamPlayers[i].id_match = addedMatch;
            this.playerMatchDetailService.save(this.homeTeamPlayers[i]).subscribe();
            this.playerService.save(this.homePlayers[i]).subscribe()
          }
          for(let i=0;i<this.awayTeamPlayers.length;i++) {
            this.awayTeamPlayers[i].id_match = addedMatch;
            this.playerMatchDetailService.save(this.awayTeamPlayers[i]).subscribe();
            this.playerService.save(this.awayPlayers[i]).subscribe()
          }
        })
      }, 5000)
    // if(this.match.teamhomegoals > this.match.teamawaygoals) {this.match.winner = this.match.teamhome} 
    // else if (this.match.teamhomegoals == this.match.teamawaygoals) {this.match.winner == null}
    // else {this.match.winner == this.match.teamaway}
    // console.log(this.match)
  }}



}
