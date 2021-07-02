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
            trim: true,
            required: 'Please provide exercise type'
        },
        {
            name: String,
            trim: true, 
            required: 'Please provide exercise name'
        },
        {
            duration: Number,
            trim: true,  
            required: 'Please provide exercise duration'
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