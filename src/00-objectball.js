const game = gameObject()
const teams = Object.values(game)

function gameObject(){
    return {
        home: {
            teamName: 'Brookyln Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3, 
                    "blocks": 1,
                    "slamDunks": 1,
                },
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12, 
                    "blocks": 12,
                    "slamDunks": 7,
                },
                'Brook Lopez':{
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3, 
                    "blocks": 1,
                    "slamDunks": 15,
                },
                'Mason Plumlee':{
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3, 
                    "blocks": 8,
                    "slamDunks": 5,
                },
                'Jason Terry':{
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4, 
                    "blocks": 11,
                    "slamDunks": 1,
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien':{
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2, 
                    "blocks": 7,
                    "slamDunks": 2,
                },
                'Bismak Biyombo':{
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7, 
                    "blocks": 15,
                    "slamDunks": 10,
                },
                'DeSagna Diop':{
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4, 
                    "blocks": 5,
                    "slamDunks": 5,
                },
                'Ben Gordon':{
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1, 
                    "blocks": 1,
                    "slamDunks": 0,
                },
                'Brendan Haywood':{
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22, 
                    "blocks": 5,
                    "slamDunks": 12,
                }
            }
        }
        
    } 
    
}
// Home Team
const homeTeam = () => {
  return gameObject().home
}
// Away Team
const awayTeam = () => {
  return gameObject().away
}
// Both Teams
const players = () => {
  return Object.assign ({}, homeTeam().players, awayTeam().players)
}
// Takes in an argument of a player's name and returns the number of points scored for that player.
const numPointsScored = (playerInput) => {
   return players()[playerInput].points
}

// Operates on the game object to return an array of the team names.
const teamNames = () => {
  return teams.map(team => team.teamName)
}
// Takes in an argument of the team name and returns an array of that teams colors.
const teamColors = (teamName) => {
   return findTeamName(teamName).colors
}
// Finds the team name that is passed as the argument.
const findTeamName = (teamName) => {
  return teams.find(team => teamName === team.teamName)
}
// Finds the players shoe size based on the player name that is passed as the argument
const shoeSize = (playerInput) => {
  return players()[playerInput].shoe
}

// Takes in a argument of a players name and returns a object of that players stats. 
const playerStats = (playerInput) => {
    return players()[playerInput]
}

// Takes in an argument of a team name and returns an array of the jersey number's for that team.
const playerNumbers = (playerInput) => {
    // Still trying to figure this code block out!
}


console.log(teamColors('Brookyln Nets'))




// Teams: 'Brookyln Nets'  <=======> 'Charlotte Hornets'


