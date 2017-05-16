const request = require('request');
function getMovieList(req, res, params) {
    // let data=params;
    // console.log(data);
    // var data={
    //     offset:0,
    //     type:"hot",
    //     limit:1000
    // }
    let paramsIn = {};
    if (params) {
        paramsIn = params
    } else {
        paramsIn = {
            offset: 0,
            type: "hot",
            limit: 1000
        }
    }
    var options = {
        headers: {"Content-Type": "application/json;charset=utf-8"},
        url: 'http://m.maoyan.com/movie/list.json?offset='+paramsIn.offset+'&type='+paramsIn.type+'&limit='+paramsIn.limit,
        method: 'GET',
        json: true,
        // body: {data: {offset: 0, type: "hot", limit: 1000}}
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(JSON.stringify(body));
            res.end(JSON.stringify(body));
        }
    });
}

exports.getMovieList = getMovieList;