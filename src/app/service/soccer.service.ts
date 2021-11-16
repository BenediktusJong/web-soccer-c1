import {Injectable} from "@angular/core";
import {season_schedule, teams} from "../service/scheduleData";

@Injectable({
    providedIn: 'root',
})

export class soccerService{
    getScheduleAsync(){
        return Promise.resolve(season_schedule);
    }

    getSchedule(){
        return season_schedule;
    }

    getTeamAsync(){
        return Promise.resolve(teams);
    }

    getTeams(){
        return teams;
    }

    private computeRanking(){

    }
}