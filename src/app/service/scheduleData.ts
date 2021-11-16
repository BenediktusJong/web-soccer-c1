import {schedule} from "../interface/schedule"
import {team} from "../interface/team"

export const season_schedule: schedule[]=[
    {id:1, playingDate:new Date(2021,08,10), homeTeam:'Persija', awayTeam:'Persipon', homeScore:3, awayScore:2, refName:'Joko', notes: 'Overtime'},
    {id:2, playingDate:new Date(2021,08,12), homeTeam:'RRQ', awayTeam:'PERSIPON', homeScore:3, awayScore:2, refName:'Budi', notes: 'Overtime'},
    {id:3, playingDate:new Date(2021,08,10), homeTeam:'RRQ', awayTeam:'Bambang', homeScore:3, awayScore:2, refName:'Joko', notes: 'Overtime'},
    {id:4, playingDate:new Date(2021,08,10), homeTeam:'EVOS', awayTeam:'TODAK', homeScore:3, awayScore:2, refName:'Joko', notes: 'Overtime'},
    {id:5, playingDate:new Date(2021,08,10), homeTeam:'NAVI', awayTeam:'TODAK', homeScore:3, awayScore:2, refName:'Joko', notes: 'Navi mengalami interupsi jaringan'}
]

export const teams:team[]=[
    {id:1, name:'Persija', type:'Klub Lokal'},
    {id:2, name:'Persipon', type:'Klub Lokal'},
    {id:3, name:'BALI', type:'Klub Lokal'},
    {id:4, name:'EVOS', type:'Klub Internasional'},
    {id:5, name:'RRQ', type:'Klub Internasional'},
    {id:6, name:'TODAK', type:'Klub Lokal'},
    {id:7, name:'NAVI', type:'Klub Lokal'},
]