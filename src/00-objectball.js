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


//Complete
const numPointsScored = (name) => {
    let game = gameObject()
    if (game['home']['players'].hasOwnProperty(name)) {
        return game['home']['players'][name]['points']
    } else if (game['away']['players'].hasOwnProperty(name)) {
        return game['away']['players'][name]['points']
    } else {
        return 'No such player'
    }
}
 
// Complete
const teamNames = () => {
    let teams = gameObject()
    return [`Home:${teams.home.teamName}, Away: ${teams.away.teamName}`]
}


//Complete
const teamColors = (teamName) => {
    let teams = gameObject()
    if (teamName === teams.home.teamName){
        return teams['home'].colors
    } else if (teamName === teams.away.teamName){
        return teams['away'].colors
    } else {
        return "Team not playing"
    }
}

//Still working on! First way that doesn't work
// funciton needs to takes in a argument of a teamName and returns an array of the jersey numbers for that team.
// jerseyNumberArray = []
// const playerNumbers = (obj) => {
//     jerseyNumberArray.push(obj.number)
//     if(!obj.players) {
//         return 
//     }
//     obj.players.forEach(player => playerNumbers(player))
// }
// playerNumbers(gameObject)
// console.log(jerseyNumberArray)


// Still Working on!
const playerNumbers = () => {
    let game = gameObject() // This = {home: {}, away: {}}

    for (let teamName in game) {
        let teamObj = game[teamName]
        debugger
        for (let teamName in teamObj) {
            let data = teamObj[teamName]
    

            for (let players in data) {
                console.log(data[players])
                debugger
               
            }
        }
    }
    
}
console.log(playerNumbers('Charlotte Hornets'))



// Reference Function from advanced-debug
// function goodPractices() {
//     let game = gameObject()

//     for (let gameKey in game) {
//      let teamObj = game[gameKey]

//     for (let teamKey in teamObj) {
//          let data = teamObj.player

//      for (let key in data) {
//          
//         }
//       }
//     }
//   }
  
//   goodPractices()
  
  

// Still working on!
const playerStats = () => {
    let game = gameObject()
    for(const key in game) {
        if (typeof game[key] === 'object') {
            for (const nestedKey in game[key]) {
                if (game[key][nestedKey] === 'object') {
                    for (const deepNestedKey in game[key][nestedKey]) {
                      
                    }
                }
            }
        }
    }
}



