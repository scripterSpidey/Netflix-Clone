export  const netflix_logo = 
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
    
export const user_icon =
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'

export const API_OPTIONS ={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWFjOWI5ZDA5ZTRkNDBiZmU0YWE3MDA3ODlmZDNmMyIsInN1YiI6IjY2MWZkN2M1YTM5ZDBiMDE2MzU1OWY5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VsuYD-l9l5T-VjY4QgCUuQD6-IUaVuh5n-rm7_VHrXc'
    }
  };

export const MOVIE_API={
  now_playing : 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  top_rated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  trending_now:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
  new_releases: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2'
}

export const teaser = {
   url : 'https://api.themoviedb.org/3/movie/823464/videos?language=en-US'
}

export const BACKGROUND_URL = "https://image.tmdb.org/t/p/w500/"