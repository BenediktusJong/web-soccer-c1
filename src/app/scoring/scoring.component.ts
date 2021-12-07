import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewEncapsulation } from '@angular/core';
import { schedule } from '../interface/schedule';
import { soccerService } from '../service/soccer.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {
  private usingAsync: boolean= false;
  private curGame: number= 0;
  public mySchedule: schedule[];
  public leagueName: string;
  public homeTeam: string;
  public awayTeam: string;
  public homeScore: number= 0;
  public awayScore: number= 0;
  public seasonStart: Date= new Date; 
  public currentRole: number= 1;
  
  constructor(private _soccerService: soccerService) {
    this.mySchedule= [];
    this.leagueName= "Over 30 Mens League";
    this.homeTeam= "";
    this.awayTeam= "";
    this.getSchedule();
    this.seasonStart.setTime(this.seasonStart.getTime()+4*86400000);
    if(this.mySchedule.length > 0) {
      this.updVariable(0);
      this.curGame= 1;
    }
  }

  ngOnInit(): void {
  }

  public onSchedChange(gameValue: number){
    if(gameValue > 0){
      this.updVariable(gameValue);
      this.curGame= gameValue;
    }
  }

  public onRecordScores(){
    this.mySchedule[this.curGame-1].awayScore= Number(this.awayScore);
    this.mySchedule[this.curGame-1].homeScore= Number(this.homeScore);
  }

  private updVariable(gameID: number){
    var x: number= 0;
    if(gameID > 0){
      x= gameID-1;
    }
    this.homeTeam= this.mySchedule[x].homeTeam;
    this.awayTeam= this.mySchedule[x].awayTeam;
    this.homeScore= this.mySchedule[x].homeScore;
    this.awayScore= this.mySchedule[x].awayScore;
  }

  private getSchedule(){
    if(this.usingAsync){
      let xx= this._soccerService.getScheduleAsync();
      xx.then((schedule: schedule[])=> this.mySchedule= schedule);
    }
    else{
      this.mySchedule= this._soccerService.getSchedule();
    }
  }
}
