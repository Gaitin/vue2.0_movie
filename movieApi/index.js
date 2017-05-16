/**
 * Created by 143301 on 2017/5/8.
 */
let express = require('express');
let app = express();
let fs = require("fs");
let getMovieList =require( "./api/movie/getMovieList");
let getMovieDetail =require( "./api/movie/getMovieDetail");
let theatreList =require( "./api/theatre/theatreList");
let request = require('request');
let common =require ('./util/common');
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', function (req, res) {
    res.send('aaa')
});

app.get('/getMovieList', function (req, res) {
    console.log(req.query);
    let params=req.query;
    getMovieList.getMovieList(req, res,params);
});

app.get('/getMovieDetail', function (req, res) {
    console.log(req.query);
    let params=req.query;
    getMovieDetail.getMovieDetail(req, res,params)
});

app.get('/getTheatreList', function (req, res) {
    theatreList.theatreList(req, res)
});

// let ipAddress=common.getIPaddress();//本机ip地址
const server = app.listen(8081,function () {
    const host = server.address().address
    const port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
