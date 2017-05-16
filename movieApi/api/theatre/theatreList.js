const request = require('request');
function theatreList(req, res) {
    const options = {
        headers: {"Content-Type": "application/json;charset=utf-8"},
        url: 'http://m.maoyan.com/cinemas.json',
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

exports.theatreList = theatreList;