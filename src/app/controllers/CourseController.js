const Course = require('../models/Course');
const { mutipleMongooseObject, mongooseToObject } = require('../../util/mongoose')
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('course/show', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('course/create');
    }

    async store(req, res, next) {
        try {
            const formData = {...req.body};
            formData.image = 'https://inkythuatso.com/uploads/thumbnails/800/2021/10/vector-con-buom-inkythuatso-18-10-42-06.jpg'
            const course = new Course(formData);
            await course.save()
            res.redirect('/')
            res.send('OK')
        } catch {next};
    }
}
module.exports = new CourseController();