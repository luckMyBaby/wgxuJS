var express = require('express'),
    router  = express.Router(),
    tables  = require('../data');

//教程数据
var renderData = {
    cardData: tables.cardData
};




router.get('/',function(req,res,next){
    //验证登录信息
    var user = req.session.user ? req.session.user : {};

    //组装数据
    renderData['user'] = user;

    res.render('share',renderData);
});



module.exports = router;