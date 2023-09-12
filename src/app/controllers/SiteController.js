const Course = require('../models/Course');
const { mutipleMongooseObject } = require('../../util/mongoose')
class SiteController {
    //[GET]/news
    async index(req, res, next) {

        try {
            let courses = await Course.find({})
            // courses = courses.map(course => course.toObject())
            res.render('home', {
                courses: mutipleMongooseObject(courses)
            });
        } catch (err) {
            next(err);
        }
    }

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();