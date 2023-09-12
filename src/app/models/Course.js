const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String},
    description: { type: String },
    image: { type: String},
    videoId: { type: String },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true}
    // createdAt: { type: Date, default: Date.now },
    // updateAt: {type: Date, default: Date.now}
}, {timestamps: true});

module.exports = mongoose.model('Course', Course);
