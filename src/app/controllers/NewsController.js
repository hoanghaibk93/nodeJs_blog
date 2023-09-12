class NewsController {
    //[GET]/news
    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send("Detail New !!!!");
    }
}
module.exports = new NewsController();