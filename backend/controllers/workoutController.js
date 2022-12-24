const Workout = require('../models/workoutModel')
const mongoose=require('mongoose');


// get all the workout

const getWorkouts= async(req, res)=>{
  const workouts=await Workout.find({}).sort({createdAt:-1})
  res.status(200).json(workouts)

}


// get single workout
const getWorkout =async(req, res)=>{
  // params contain the tail :id part of the url
  const {id}=req.params
  //console.log(typeof(id))

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
  }

  const workout=await Workout.findById(id)

  if (!workout){
    return res.status(404).json({error:"No suc workout for this id"})
  }
  res.status(200).json(workout)

}


// post all the workout
const createWorkout = async(req,res)=>{
    const {title, load, reps} = req.body
  // add doc to db
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }

}




// Delete the workout

const deleteWorkout =async(req, res)=>{
  const {id}=req.params
  //console.log(typeof(id))

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such workout"})
  }

  const workout=  await Workout.findOneAndDelete({_id:id})

  if (!workout){
    return res.status(400).json({error:"No suc workout for this id"})
  }
  res.status(200).json(workout)

}

// Update the workout
const updateWorkout =async(req, res)=>{
  const {id}= req.params
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
  }
// so here we  are getting the workout and 
  const workout = await Workout.findOneAndUpdate({_id:id}, {
// spreading the body  in object here...
    ...req.body

  })
  if (!workout){
    return res.status(400).json("No such workout")
  }
    res.status(200).json(workout)

}

module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout, updateWorkout, 
}