import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ranking } from '../interface/ranking';
import { schedule } from '../interface/schedule';
import { team } from '../interface/team';
import { teams } from '../service/scheduleData';
import { soccerService } from '../service/soccer.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  public usingAsync:boolean = false;
  public myTeam:team[];
  public leagueName:string;
  public mySchedule:schedule[];
  public standing:ranking[];

  constructor(private _titleService:Title, private _soccerService:soccerService) {
    this._titleService.setTitle('Pertandingan Sepakbola Negara Akoeh');
    this.myTeam= [];
    this.mySchedule= [];
    this.standing= [];
    this.getTeam();
    this.leagueName= "Ligaku";
    this.getSchedule();
    this.computeRanking();
  }

  ngOnInit(): void {
  }

  getTeam() {
    if (this.usingAsync) {
      let xx = this._soccerService.getAllTeamAsync();
        xx.then((teams:team[])=> this.myTeam = teams);
    }
    else {
      this.myTeam = this._soccerService.getAllTeam();
    }
  }

  private getSchedule() {
    if (this.usingAsync) {
      let xx = this._soccerService.getScheduleAsync();
        xx.then((schedule:schedule[])=> this.mySchedule = schedule);
    }
    else {
      this.mySchedule = this._soccerService.getSchedule();
    }
  }

  public computeRanking() {
    var curDate: Date= new Date();
    var teamAt: number;
    this.standing= [];
    this.mySchedule.forEach(element=> {
      if (element.playingDate < curDate && element.homeScore >= 0) {
        teamAt= this.findTeam(element.homeTeam);
        if (teamAt < 0) {
          this.standing.push({
            teamName: element.awayTeam,
            gamePlayed: 0, win: 0, tie: 0, goalFor: 0, goalAgainst: 0
          })
          teamAt= this.standing.length-1;
        }
        this.updCurrentRow(element, teamAt, "A")
      }
    })
  }

  private updCurrentRow(element: schedule, teamAt: number, homeAway: string) {
    this.standing[teamAt].gamePlayed++;
    if (homeAway == 'H') {
      this.standing[teamAt].goalFor += element.homeScore;
      this.standing[teamAt].goalAgainst += element.awayScore;
      //win menang
      if (element.homeScore > element.awayScore) {
        this.standing[teamAt].win++;
      }
    }
    if (homeAway == 'A') {
      this.standing[teamAt].goalFor += element.awayScore;
      this.standing[teamAt].goalFor += element.homeScore;
      if (element.awayScore > element.homeScore) {
        this.standing[teamAt].win++;
    }
    if (element.homeScore == element.awayScore) {
      this.standing[teamAt].tie++;
    }
  }
}

  private findTeam(teamName: string): number {
    var foundAt: number= -1;
    for (var _x= 0; _x < this.standing.length; _x++) {
      if (this.standing[_x].teamName == teamName) {
        return _x;
      }
    }
    return foundAt;
  }
}