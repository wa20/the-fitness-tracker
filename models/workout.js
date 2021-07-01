const mongoose = require('mongoose')

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: String, 
            required: 'Every exercise needs a type'
        },
        {
            name: String, 
            required: 'Every exercise needs a name'
        },
        {
            duration: Number, 
            required: 'Every exercise needs a duration'
        },
        {
            distance: Number, 
        },
        {
            weight: Number, 
        },
        {
            sets: Number, 
        },
        {
            reps: Number, 
        },
    ],
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 