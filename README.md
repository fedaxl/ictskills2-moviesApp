# Assignment - ReactJS app.

- Name: Federica Fiorenza
- WIT Id: 20091413

## Overview.

The concept of this project was to expand the Movie App for movie fans in order to view all the most recent, top rated and popular movies from the [TMDB] database ('https://www.themoviedb.org/') and, once logged in, the user can also save their favorite movies and add them also to a playlist. The user can use the many searches to filter movies by generes, find similar movies and view all the most popular actors and details.

App features:  
 + Authentication: simple login/signout functionality
 + HomePage: discover all the latest movies and find more, filter by genres
 + Upcoming movies: view all the most recent movies
 + Popular: view all the most popular movies of the moment
 + Top Rated: view all the top rated movies of all time
 + Actors: view a list of of all the most popular actors and view more
 + Favorites: once logged in, a user can add, view and remove all the favorite movies
 + Playlist: once logged in, a user can add and view all the movies added to the playlist page
 + Reviews: a user can leave a review for a particular movie

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

### **Project Build and start**

---

Back in the terminal
`npm install`

To start the App
`npm start`

---

## API Data Model

![][model]

TMDB endpoints used in the project. 

In order to test this functionality, you will need to request an API key by logging in to your account on TMDB and clicking the "API" link in the left hand side bar of your account page. (Ref https://developers.themoviedb.org/3/getting-started/authentication)

Once you have obtained your api key, plase insert in your .env file the following REACT_APP_TMDB_KEY=yourapikeysgoeshere

#### Get Movies

```http
  GET https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1
```
```JSON

results: [
{
adult: false,
backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
genre_ids: [
28,
12,
53,
878
],
id: 497698,
original_language: "en",
original_title: "Black Widow",
overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
popularity: 5992.437,
poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
release_date: "2021-07-07",
title: "Black Widow",
video: false,
vote_average: 7.9,
vote_count: 3919
},
{
adult: false,
backdrop_path: "/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg",
genre_ids: [
12,
14,
35,
28
],
id: 451048,
original_language: "en",
original_title: "Jungle Cruise",
overview: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
popularity: 5812.972,
poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
release_date: "2021-07-28",
title: "Jungle Cruise",
video: false,
vote_average: 8,
vote_count: 1286
},
{
adult: false,
backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
genre_ids: [
28,
80,
53
],
id: 385128,
original_language: "en",
original_title: "F9",
overview: "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
popularity: 4973.593,
poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
release_date: "2021-05-19",
title: "F9",
video: false,
vote_average: 7.7,
vote_count: 2315
},
{
adult: false,
backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
genre_ids: [
28,
12,
35,
878
],
id: 436969,
original_language: "en",
original_title: "The Suicide Squad",
overview: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
popularity: 4168.234,
poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
release_date: "2021-07-28",
title: "The Suicide Squad",
video: false,
vote_average: 8.2,
vote_count: 1203
}

```
#### Get a specific movie by id

```http
https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
```

#### Get genres

```http
https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
```

```JSON
{
genres: [
{
id: 28,
name: "Action"
},
{
id: 12,
name: "Adventure"
},
{
id: 16,
name: "Animation"
},
{
id: 35,
name: "Comedy"
},
{
id: 80,
name: "Crime"
},
{
id: 99,
name: "Documentary"
},
{
id: 18,
name: "Drama"
},
{
id: 10751,
name: "Family"
},
{
id: 14,
name: "Fantasy"
},
{
id: 36,
name: "History"
},
{
id: 27,
name: "Horror"
},
{
id: 10402,
name: "Music"
},
{
id: 9648,
name: "Mystery"
},
{
id: 10749,
name: "Romance"
},
{
id: 878,
name: "Science Fiction"
},
{
id: 10770,
name: "TV Movie"
},
{
id: 53,
name: "Thriller"
},
{
id: 10752,
name: "War"
},
{
id: 37,
name: "Western"
}
]
}
```

#### Get Movie Images based on movie's id
```http
https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
```

#### Get Movie Reviews

```http
https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
```

#### Get Upcoming Movies

```http
https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

```JSON
{
dates: {
maximum: "2021-09-04",
minimum: "2021-08-08"
},
page: 1,
results: [
{
adult: false,
backdrop_path: "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
genre_ids: [
28,
80,
53
],
id: 385128,
original_language: "en",
original_title: "F9",
overview: "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
popularity: 4973.593,
poster_path: "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
release_date: "2021-05-19",
title: "F9",
video: false,
vote_average: 7.7,
vote_count: 2315
},
{
adult: false,
backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
genre_ids: [
28,
12,
35,
878
],
id: 436969,
original_language: "en",
original_title: "The Suicide Squad",
overview: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
popularity: 4168.234,
poster_path: "/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
release_date: "2021-07-28",
title: "The Suicide Squad",
video: false,
vote_average: 8.2,
vote_count: 1203
},
{
adult: false,
backdrop_path: "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
genre_ids: [
16,
35,
12,
10751
],
id: 459151,
original_language: "en",
original_title: "The Boss Baby: Family Business",
overview: "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
popularity: 3102.827,
poster_path: "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
release_date: "2021-07-01",
title: "The Boss Baby: Family Business",
video: false,
vote_average: 7.9,
vote_count: 1081
},
{
adult: false,
backdrop_path: "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
genre_ids: [
12,
53,
28,
27,
37
],
id: 602223,
original_language: "en",
original_title: "The Forever Purge",
overview: "All the rules are broken as a sect of lawless marauders decides that the annual Purge does not stop at daybreak and instead should never end as they chase a group of immigrants who they want to punish because of their harsh historical past.",
popularity: 2650.991,
poster_path: "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
release_date: "2021-06-30",
title: "The Forever Purge",
video: false,
vote_average: 7.7,
vote_count: 849
}
...

```
#### Get Top Rated Movies

```http
https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

```JSON
{
page: 1,
results: [
{
adult: false,
backdrop_path: "/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg",
genre_ids: [
35,
18,
10749
],
id: 19404,
original_language: "hi",
original_title: "दिलवाले दुल्हनिया ले जायेंगे",
overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
popularity: 15.998,
poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
release_date: "1995-10-20",
title: "Dilwale Dulhania Le Jayenge",
video: false,
vote_average: 8.7,
vote_count: 3076
},
{
adult: false,
backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
genre_ids: [
18,
80
],
id: 278,
original_language: "en",
original_title: "The Shawshank Redemption",
overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
popularity: 56.226,
poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
release_date: "1994-09-23",
title: "The Shawshank Redemption",
video: false,
vote_average: 8.7,
vote_count: 19394
},
{
adult: false,
backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
genre_ids: [
18,
80
],
id: 238,
original_language: "en",
original_title: "The Godfather",
overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
popularity: 56.413,
poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
release_date: "1972-03-14",
title: "The Godfather",
video: false,
vote_average: 8.7,
vote_count: 14618
},
{
adult: false,
backdrop_path: "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
genre_ids: [
10749
],
id: 724089,
original_language: "en",
original_title: "Gabriel's Inferno Part II",
overview: "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
popularity: 7.936,
poster_path: "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
release_date: "2020-07-31",
title: "Gabriel's Inferno Part II",
video: false,
vote_average: 8.7,
vote_count: 1291
},
```
#### Get Popular Movies

```http
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

```JSON
{
page: 1,
results: [
{
adult: false,
backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg",
genre_ids: [
28,
12,
53,
878
],
id: 497698,
original_language: "en",
original_title: "Black Widow",
overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
popularity: 5992.437,
poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
release_date: "2021-07-07",
title: "Black Widow",
video: false,
vote_average: 7.9,
vote_count: 3919
},
{
adult: false,
backdrop_path: "/bwBmo4I3fqMsVvVtamyVJHXGnLF.jpg",
genre_ids: [
12,
14,
35,
28
],
id: 451048,
original_language: "en",
original_title: "Jungle Cruise",
overview: "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.",
popularity: 5812.972,
poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
release_date: "2021-07-28",
title: "Jungle Cruise",
video: false,
vote_average: 8,
vote_count: 1286
},
```
#### Get Similar Movies by selecting a movie id

```http
https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

#### Get Similar Movies by selecting a movie id

```http
https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

#### Get Cast by movie id

```http
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}
```

#### Get Movie Credits by movie ID

```http
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}
```

#### Get Actor by Id

```http
https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
```

#### Get Actors list

```http
https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
```

```JSON
{
page: 1,
results: [
{
adult: false,
gender: 1,
id: 234352,
known_for: [
{
adult: false,
backdrop_path: "/cWUOv3H7YFwvKeaQhoAQTLLpo9Z.jpg",
genre_ids: [
80,
18,
35
],
id: 106646,
media_type: "movie",
original_language: "en",
original_title: "The Wolf of Wall Street",
overview: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
poster_path: "/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
release_date: "2013-12-25",
title: "The Wolf of Wall Street",
video: false,
vote_average: 8,
vote_count: 18048
},
{
adult: false,
backdrop_path: "/dpoIQ9MN54cxuLZxDABEUOSFGY3.jpg",
genre_ids: [
28,
12,
14
],
id: 297761,
media_type: "movie",
original_language: "en",
original_title: "Suicide Squad",
overview: "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
poster_path: "/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
release_date: "2016-08-03",
title: "Suicide Squad",
video: false,
vote_average: 5.9,
vote_count: 17677
},
{
adult: false,
backdrop_path: "/nGJpQCAn2NKeDoEflLI5DIvsqoQ.jpg",
genre_ids: [
35,
18,
53
],
id: 466272,
media_type: "movie",
original_language: "en",
original_title: "Once Upon a Time… in Hollywood",
overview: "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
poster_path: "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
release_date: "2019-07-24",
title: "Once Upon a Time… in Hollywood",
video: false,
vote_average: 7.5,
vote_count: 9055
}
],
known_for_department: "Acting",
name: "Margot Robbie",
popularity: 84.384,
profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg"
},
```
#### Get Actor Images by id

```http
https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
```

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

+ POST /reviews/form - submit a review
+ GET /reviews/:id - get a review
+ GET /movies/:id - get a movie by id
+ GET /movies/upcoming - displays all upcoming movies.
+ GET /movies/popular - displays all the popular movies.
+ GET /movies/toprated - displays all top rated movies.
+ GET /movies/:id/similar - get all the movies similar to the selected by id.
+ GET /movies/playlist (private route) - view all the movies added to the playlist
+ GET /movies/favorites (private route) - view all the movies added to the favorite page
+ GET /actors - retrieve all the actors
+ GET /actors/:id - get an actor by id
+ POST /login - login page for authentication


## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png