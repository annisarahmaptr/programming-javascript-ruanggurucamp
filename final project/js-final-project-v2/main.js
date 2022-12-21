function findMovies(favoriteGenre) {

    let result = []

    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

       

    if(movies.length > 0){
        // console.log(movies)
        // console.log(favoriteGenre)
        for(let i=0; i<favoriteGenre.length; i++){
            for(let j=0; j<movies.length; j++){
                if(favoriteGenre[i] === movies[j].genre){
                    result.push(movies[j])
                }
            }  
        }
    }

    return result
    
}

// let favoriteGenre = ["Action", "Musical"] 
// console.log(findMovies(favoriteGenre))

function findTicketAvailability(movie, user) {

      if(movie.capacity - movie.soldTicket >= user.ticket){
        return true
      }else{
        return false
      }

}

// user = {
//     name: "Aditira",
//     ticket: 10,
//     favoriteGenre: ["Action", "Musical"],
//   }
  
//   movie = {
//     id: 7,
//     name: "Dear Evan Hansen",
//     genre: "Musical",
//     soldTicket: 150,
//     capacity: 200,
//   }

// console.log(findTicketAvailability(movie, user))

function findRecommendation(user) {

    let userMovieRecommendations  = []

    let find = findMovies(user.favoriteGenre)
    for(let i=0; i<find.length; i++){
        if(find[i].capacity - find[i].soldTicket >= user.ticket){
            userMovieRecommendations.push(find[i])
          }
    }
    
    return userMovieRecommendations
}

// user = {
//     name: "Aditira",
//     ticket: 10,
//     favoriteGenre: ["Action", "Musical"],
// };

// console.log(findRecommendation(user))

function generateRecommendation(user) {
    let priceList = [
        {
            genre : 'Action',
            price : 100000
        },
        {
            genre : 'Musical',
            price : 80000
        },
        {
            genre : 'Romance',
            price : 40000
        },
        {
            genre : 'Horror',
            price : 75000
        },
    ]

    let result = []
    let userMovieRecommendations = findRecommendation(user)
    let total = 0

    
    for(let i=0; i<userMovieRecommendations.length; i++){
        for(let j=0; j<priceList.length; j++){
            if(priceList[j].genre === userMovieRecommendations[i].genre){
                total = user.ticket * priceList[j].price 
            }
        }

        result.push({
            id: userMovieRecommendations[i].id,
            name: userMovieRecommendations[i].name,
            genre: userMovieRecommendations[i].genre,
            totalPrice: total,
        })
    }

    if(userMovieRecommendations < 1){
        return "Tidak ada film yang sesuai kriteria"
    }else{
        return result
    }
   
}

// user = {
//     name: "Aditira",
//     ticket: 10,
//     favoriteGenre: ["Action", "Musical"],
//   };

// console.log(generateRecommendation(user))

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}