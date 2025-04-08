const team = {
    _players: [
      {
        firstName: 'John',
        lastName: 'Jacob',
        age: 95
      },
      {
        firstName: 'Jingle',
        lastName: 'Heimer',
        age: 59
      },
      {
        firstName: 'Schmidt',
        lastName: 'Baseballson',
        age: 24
      }
    ],
    _games: [
      {
        opponent: 'Team A',
        teamPoints: 42,
        opponentPoints: 42
      },
      {
        opponent: 'Team B',
        teamPoints: 35,
        opponentPoints: 30
      },
      {
        opponent: 'Team C',
        teamPoints: 28,
        opponentPoints: 31
      }
    ],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game)
    }
  }
  team.addPlayer('Bugs', 'Bunny', 76)
  team.addGame('Titans', 100, 98)
  console.log(team._players)
  console.log(team._games)