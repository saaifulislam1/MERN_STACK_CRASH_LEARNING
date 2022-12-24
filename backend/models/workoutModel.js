const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  // _id: mongoose.ObjectId,
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

