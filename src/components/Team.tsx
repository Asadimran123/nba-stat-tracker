export default interface Team {
    league: string,
        season: number,
        team: {
            id: number,
            name: string,
            nickname: string,
            code: string,
            logo: string
        },
        conference: {
            name: string,
            rank: number,
            win: number,
            loss: number
        },
        division: {
            name: "southeast",
            rank: number,
            win: number,
            loss: number,
            gamesBehind: string
        },
        win: {
            home: number,
            away: number,
            total: number,
            percentage: string,
            lastTen: number
        },
        loss: {
            home: number,
            away: number,
            total: number,
            percentage: string,
            lastTen: number
        },
        gamesBehind: string,
        streak: number,
        winStreak: boolean,
        tieBreakerPoints: any,
        isFavorite: boolean, 
  }