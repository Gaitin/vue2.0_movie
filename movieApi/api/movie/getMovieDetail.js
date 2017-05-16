const request = require('request');
function getMovieDetail(req, res, params) {
    console.log('movieID',params)
    let movieId ="";
    if (params) {
        movieId = params.id
    } else {
        movieId=345672
    }
    const options = {
        headers: {"Content-Type": "application/json;charset=utf-8"},
        url: 'http://m.maoyan.com/movie/'+movieId+'.json',
        method: 'GET',
        json: true
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.stringify(body));
            res.end(JSON.stringify(body));
        }
    });
}

exports.getMovieDetail = getMovieDetail;