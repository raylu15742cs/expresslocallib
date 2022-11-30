const { SchemaType } = require('mongoose');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GenreScheme = new SchemaType( {
    name : {type: String,required: true, min: 3, max: 100},
});

GenreScheme.virtual('url').get(function() {
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model('Genre', GenreScheme);