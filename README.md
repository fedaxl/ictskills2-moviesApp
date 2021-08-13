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

#### Firebase setup 

- Create a Firebase account at https://firebase.google.com/
- Log into the Firebase console https://console.firebase.google.com/u/0/
- Click on Add Project
- Enter your project name (e.g. Development-Auth)
- Skip Google Analytics as we don't need it for this project
- Click on Create Project
- Once logged into your project, go to Authentication (from the left menu) and click on Get Started
- Click on Sign-In method
- You can select any Provider, for this project I enabled Email/Password only (click on pencil, toggle Enable on and Save)
![auth-by-email](https://user-images.githubusercontent.com/22814086/128906849-e25959a8-f1a9-4f21-b5f5-dabc8bac220f.PNG)
- Click then on Project Overview and select the Web option to add Firebase to the app 
- Fill up your app name and click on Register App!
![registerappPNG](https://user-images.githubusercontent.com/22814086/128907451-bf20e033-2228-4b8c-827f-7dbb867cf939.PNG)
- Once registered, you will obtain your credentials to copy and paste in your .env file

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_MEASUREMENT_ID=

```

![api key](https://user-images.githubusercontent.com/22814086/128907896-2fb04815-2cdc-4202-b291-edfda89539fc.PNG)
- To create a Database, you can simple create a Firestore Database from the left menu and click on "create database"

To successfully implement this functionality, you can follow then the instructions available at https://www.youtube.com/watch?v=PKwu15ldZ7k by Web Dev Simplified for training purpose on how to integrate successfully Firebase Autentication with React. 

In your app you will have to install Firebase library (https://www.npmjs.com/package/firebase)

```
npm i firebase

```
and if you wish to use Bootstrap:

```
npm i bootstrap
npm i react-bootstrap

```

Once your first user will signup, you will be able to see the account stored into Firebase:
![auth-user-firebase](https://user-images.githubusercontent.com/22814086/128906086-0b21d120-3eb3-4e1b-9648-e875a5a8caf7.PNG)

#### React-Bootstrap ####

For the Login form, follow the instructions at
https://react-bootstrap.github.io/getting-started/introduction/
in order to use Bootstrap for React 

Install React-Boostrap
`npm install react-bootstrap@next bootstrap@5.0.2`


### **Project Build and start**

---

From your terminal you will have to launch the following command to install all the node modules 

`npm install`

To start the App

`npm start` (on local port 3000)

To start the story book

`npm run storybook` (on local port 6006)

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

#### Get Actor Credits in Movies

```http
https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_video=false&page=1`
```
```JSON
{
cast: [
{
vote_average: 5.8,
overview: "Two rival politicians compete to win an election to represent their small North Carolina congressional district in the United States House of Representatives.",
release_date: "2012-08-09",
id: 77953,
adult: false,
backdrop_path: "/ncNKvR7mp0m2B0TxXhYhzR7sTU8.jpg",
genre_ids: [
35
],
vote_count: 1325,
original_language: "en",
original_title: "The Campaign",
poster_path: "/jMWjJ13sFTT07DwjNlqh8VY4sK6.jpg",
title: "The Campaign",
video: false,
popularity: 10.413,
character: "Rose Brady",
credit_id: "52fe4985c3a368484e12fd33",
order: 3,
media_type: "movie"
},
{
adult: false,
backdrop_path: "/fKmTjoV2wXs8U0wXZtys2zC5tEd.jpg",
genre_ids: [
35,
18
],
id: 312796,
original_language: "en",
original_title: "The Squeeze",
overview: "A humble young man with uncommon skills from a small southern town gets caught up in high stakes golf matches between big-time gamblers until the game becomes life and death.",
poster_path: "/slfooToW48qtqEHKr755VjksRWG.jpg",
release_date: "2015-04-17",
title: "The Squeeze",
video: false,
vote_average: 5.1,
vote_count: 7,
popularity: 1.943,
character: "Jessie",
credit_id: "551afbfd9251414aed0005b0",
order: 3,
media_type: "movie"
},
...
```



## App Design.

### Component catalogue.

#### Screenshots from the Storybook

Stories related to Actors Components
![image](https://user-images.githubusercontent.com/22814086/129118483-868f7b68-6df2-4b35-9049-21db369452b2.PNG)
![image](https://user-images.githubusercontent.com/22814086/129118566-3a66c84a-5695-434c-aab9-8bc33aefb26d.png)
![image](https://user-images.githubusercontent.com/22814086/129118628-fbf69d56-4ce1-4573-bf7a-db0d8ed1018a.png)

Filters
![image](https://user-images.githubusercontent.com/22814086/129118651-d18aff73-1a1e-4dbc-a673-4b1d124673cb.png)
![image](https://user-images.githubusercontent.com/22814086/129118676-7d2de9c5-95c7-4c16-b689-b27eae5f9991.png)

Movies components
![image](https://user-images.githubusercontent.com/22814086/129118705-209cdfcc-8886-4477-b952-fcd2b7b6f8e0.png)
![image](https://user-images.githubusercontent.com/22814086/129118714-0eaa8b18-6ed7-42fc-b4d9-bbd0a89ea2b3.png)
![image](https://user-images.githubusercontent.com/22814086/129118733-d2763307-1b18-46cd-901c-30cd53f87855.png)
![image](https://user-images.githubusercontent.com/22814086/129118757-05e51797-9de0-4588-9ae6-b1de5cc0a42d.png)

New Header for the App
![image](https://user-images.githubusercontent.com/22814086/129118786-8be531c3-1b8a-4c8a-b82e-4b636a43be95.png)

### UI Design.

#### Basic Login/Signout functionality - v1 ####
![login](https://user-images.githubusercontent.com/22814086/128782766-8b4d95d5-0e9a-4d0e-81cf-3e1d197af0d6.PNG)
>Authentication: Login functionality

![signout](https://user-images.githubusercontent.com/22814086/128782851-b2dd94d1-6dba-41ff-b630-c612aebdab76.PNG)
>Authentication: Signout functionality

#### Login/Signout authentication functionality with Firebase - v2 ####
![loginv2](https://user-images.githubusercontent.com/22814086/128910936-6f74c13a-1aa2-40da-9d79-dcf287fb5b9b.PNG)
>Authentication: Login functionality with Firebase

![loginORsignup](https://user-images.githubusercontent.com/22814086/128910984-478129ff-d1c9-4ede-a704-5a3d55fa6023.PNG)
>Authentication: User can either Login or SignUp (or reset password)

![userLoggedIn](https://user-images.githubusercontent.com/22814086/128911101-5b378ea4-0bb7-4ffc-b896-bfe8fa380a86.PNG)
>User logged in, view

![Signup](https://user-images.githubusercontent.com/22814086/128911029-728a76e7-68f9-416e-a33d-5e1627d47dfc.PNG)
>SignUp functionality 

![Update](https://user-images.githubusercontent.com/22814086/128911155-35f12f52-7d2f-4419-9bf9-7a9eaa1c061e.PNG)
>Update profile (email or password)

#### Pages ####

![HomePage](https://user-images.githubusercontent.com/22814086/128782896-ebbdaff3-d32a-4adb-9945-af271c1438d4.PNG)
>HomePage: Discover all the movies and contains the movie filter search

![FilterMovies](https://user-images.githubusercontent.com/22814086/128782931-ef30f289-b001-49ac-aac7-d0e7252eaa1f.PNG)
>Movie Filter: by Movie title

![FIlterMoviebyGenre](https://user-images.githubusercontent.com/22814086/128782952-bed29f8a-3ca0-4a76-a6d8-7e8d3f4803f1.PNG)
>Movie Filter: Filter movies by genres

![movieDetails](https://user-images.githubusercontent.com/22814086/129372021-20b9f641-428a-4aa3-9724-79a2cc891b58.PNG)
>Movie Details when click on More Info button

![review](https://user-images.githubusercontent.com/22814086/128783197-a3b136d3-fec4-4e38-bf65-190a9b66f09c.PNG)
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![SimilarMovies](https://user-images.githubusercontent.com/22814086/128782995-94e82283-da5c-4d8f-b7e7-2bdc4f4df5a3.PNG)
>Search a similar movie when the button Search similar is clicked on the movie card

![Favorite1](https://user-images.githubusercontent.com/22814086/128783068-18875a69-81e5-4138-9e6c-88e27c20d44e.PNG)
![Favorite2](https://user-images.githubusercontent.com/22814086/128783089-b9051c9a-cd2d-41e5-9858-62d2d489c33e.PNG)
>Add a movie to the Favorite movie page, user must to be logged in to see the Favorite movies

![Upcoming](https://user-images.githubusercontent.com/22814086/128783135-40badede-be69-4985-b19d-a45e5df64050.PNG)
>Upcoming movies page

![TopRated](https://user-images.githubusercontent.com/22814086/128783152-b96c4c65-07cd-4759-87ff-2a65b9d9a766.PNG)
>Top Rated Movies page

![Popular](https://user-images.githubusercontent.com/22814086/128783169-f0cd89a2-d3e3-4457-845d-324b08586e05.PNG)
>Popular Movies page

![Playlist](https://user-images.githubusercontent.com/22814086/128783221-fe5ff85b-343b-447f-8a2b-8aa21374dea0.PNG)
>Playlist page, you must to be logged in to view all the movies added to the playlist

![Actors](https://user-images.githubusercontent.com/22814086/128783252-a5d2cf4a-f051-4c5f-897d-001116944462.PNG)
>View all the most popular actors

![ActorsDetail](https://user-images.githubusercontent.com/22814086/129367297-7c48b8d8-fd4d-4036-b901-c0845fec06df.PNG)
>Check on the actor card for more details, find out about Popularity, Birthday and in which movies the person acted

![ActorsFilter](https://user-images.githubusercontent.com/22814086/128783296-e351fdf1-aef7-4272-a68f-511b56af5f13.PNG)
>Use the actor filter to search for a particular name

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


## Independent learning.
For this project I decided to focus on a different approach for the user authentication and I explored how to connect Firebase Authentication with the React project and how to setup correctly the routing. The App uses also Firebase Database to store the users details as I chose to use the authentication user/password.
Reference of the material and code used in this project are from: 
- React Authentication Crash Course With Firebase And Routing: https://www.youtube.com/watch?v=PKwu15ldZ7k by Web Dev Simplified
- GitHub code: https://github.com/WebDevSimplified/React-Firebase-Auth 
