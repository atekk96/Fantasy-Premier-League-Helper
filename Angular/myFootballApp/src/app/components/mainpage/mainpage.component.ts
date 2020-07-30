import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { Router } from '@angular/router';
import { PlayerserviceService } from 'src/app/services/playerservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  players: Player[];
  player: Player;

  constructor(private playerService: PlayerserviceService,
              private router: Router) { 
    this.player = new Player();
  }

  ngOnInit() {
    this.playerService.getAll().subscribe(data => {
      this.players = data;
      console.log(data)
    })
    this.addPlayer()
  }

  lol() {
    this.router.navigate(['/add-match']);
  }

  addPlayer() {
    // this.player.appearances = 0;
    // this.player.assists = 0;
    // this.player.averagerating = 0;
    // this.player.cleansheet = 0;
    // this.player.goals = 0;
    // this.player.isactive = true;
    // this.player.jerseynumber = 57;
    // this.player.name = "Armando";
    // this.player.surname = 'Broja';
    // this.player.position = 'ST';
    // this.player.nationality = 'Albania';
    // this.player.minutesplayed = 0;
    // this.player.redcard = 0;
    // this.player.season = '19/20';
    // this.player.yellowcard = 0;
    // this.player.idTeam = 6;
    // console.log(this.player);
    // this.playerService.save(this.player).subscribe(result => console.log(result));
  }

}
