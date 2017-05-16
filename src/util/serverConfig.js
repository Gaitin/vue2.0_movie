/**
 * Created by 143301 on 2017/5/9.
 */

const rootUrl = 'http://127.0.0.1:8081';
export const AppConfig = {
  url: {
    getMovieList: `${rootUrl}/getMovieList`,
    getTheatreList: `${rootUrl}/getTheatreList`,
    getMovieDetail: `${rootUrl}/getMovieDetail`,
  },
  postOption: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {}
  }
};
