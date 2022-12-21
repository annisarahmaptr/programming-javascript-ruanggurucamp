function mostRecommended(games) {

  let obj ={}

    const genreFighting = {}
    const genreActionadventure = {}
    const genreFirstPS = {}
    const genreSimulation = {}
    const genreRacing = {}

    const ratingFighting = []
    const ratingActionadventure = []
    const ratingFirstPS = []
    const ratingSimulation = []
    const ratingRacing = []

  if(games.length < 2){
    return "Data cannot be compared"
  }else{
    for(let i=0; i<games.length; i++){
      if(games[i].genre === "fighting"){
        ratingFighting.push(games[i].rating)
        ratingFighting.sort()
        ratingFighting.reverse()

        if(games[i].rating === ratingFighting[0]){
          genreFighting.title = games[i].title
          genreFighting.genre = games[i].genre
          genreFighting.developer = games[i].developer
          genreFighting.rating = games[i].rating
        }
        obj.fighting=genreFighting
      }

      if(games[i].genre === "actionAdventure"){
        ratingActionadventure.push(games[i].rating)
        // ratingActionadventure.sort()
        ratingActionadventure.reverse()

        if(games[i].rating === ratingActionadventure[0]){
          genreActionadventure.title = games[i].title
          genreActionadventure.genre = games[i].genre
          genreActionadventure.developer = games[i].developer
          genreActionadventure.rating = games[i].rating
        }
        obj.actionAdventure=genreActionadventure
      }

      if(games[i].genre === "firstPersonShooter"){
        ratingFirstPS.push(games[i].rating)
        ratingFirstPS.sort()
        ratingFirstPS.reverse()

        if(games[i].rating === ratingFirstPS[0]){
          genreFirstPS.title = games[i].title
          genreFirstPS.genre = games[i].genre
          genreFirstPS.developer = games[i].developer
          genreFirstPS.rating = games[i].rating
        }
        obj.firstPersonShooter=genreFirstPS
      }

      if(games[i].genre === "simulation"){
        ratingSimulation.push(games[i].rating)
        ratingSimulation.sort()
        ratingSimulation.reverse()

        if(games[i].rating === ratingSimulation[0]){
          genreSimulation.title = games[i].title
          genreSimulation.genre = games[i].genre
          genreSimulation.developer = games[i].developer
          genreSimulation.rating = games[i].rating
        }
        obj.simulation=genreSimulation
      }

      if(games[i].genre === "racing"){
        ratingRacing.push(games[i].rating)
        ratingRacing.sort()
        ratingRacing.reverse()

        if(games[i].rating === ratingRacing[0]){
          genreRacing.title = games[i].title
          genreRacing.genre = games[i].genre
          genreRacing.developer = games[i].developer
          genreRacing.rating = games[i].rating
        }
        obj.racing=genreRacing
      }
      
    }

     


  }
  return obj; 
}

const allGames = [
  {
    title: "The Last of Us Part I",
    genre: "actionAdventure",
    developer: "Naughty Dog",
    rating: 9.6,
  },
  {
    title: "WWE 2K22",
    genre: "fighting",
    developer: "Visual Concepts",
    rating: 7.5,
  },
  {
    title: "Tom Clancy's Ghost Recon: Wildlands",
    genre: "firstPersonShooter",
    developer: "Ubisoft Belgrade",
    rating: 7.9,
  },
  { title: "The Sims 4", genre: "simulation", developer: "Maxis", rating: 9.2 },
  {
    title: "Tekken 7",
    genre: "fighting",
    developer: "BANDAI NAMCO Studios",
    rating: 9.5,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "actionAdventure",
    developer: "CD Projekt Red",
    rating: 10,
  },
  {
    title: "Cities: Skylines",
    genre: "simulation",
    developer: "Colossal Order",
    rating: 9.4,
  },
  {
    title: "Far Cry 5",
    genre: "firstPersonShooter",
    developer: "Ubisoft Montreal",
    rating: 8.9,
  },
  {
    title: "Project CARS 3",
    genre: "racing",
    developer: "Slightly Mad Studios",
    rating: 6.8,
  },
  {
    title: "Hot Wheels Unleashed",
    genre: "racing",
    developer: "Milestone",
    rating: 9.2,
  },
];

console.log(mostRecommended(allGames));
console.log(
  mostRecommended([
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
  ])
);

module.exports = mostRecommended;
