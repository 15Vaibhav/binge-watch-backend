const Movie = require("../models/movie");

exports.GET_ALL_MOVIES = function (req, res) {
    Movie.find({}, function (err, result) {
        if (err) {
            console.log('the err:', err)
            return res.status(500).send('Something Went Wrong')
        } else {
            return res.status(200).send(result);
        }

    })
}

exports.SAVE_TO_CART = function (req, res) {
    const movie = new Movie(req.body);
    movie.save(movie, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(400).send('Some input are not right');
        }
        return res.status(201).send(result);
    })
}

exports.CHANGE_STATUS = function (req, res) {
    Movie.findOneAndUpdate({ 'title': req.body.title }, { 'watched': req.body.watched }, { new: true }, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(400).send('Some input are not right');
        }
        return res.status(204).send(result);
    })

} 
