export interface schedule{
    id: number;
    playingDate: Date;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    refName: string;
    notes?: string;
}