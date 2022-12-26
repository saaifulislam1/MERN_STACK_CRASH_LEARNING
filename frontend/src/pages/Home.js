import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from './../components/WorkoutDetails';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function Home() {
  const {workouts, dispatch} =  useWorkoutsContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts/"); 
      const json = await response.json();
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    };

    fetchWorkout();
  },  [dispatch]);
//  console.log(workouts)

  return (
    <div className="home">
      <div className="workouts">
        {
          workouts && workouts.map(workout=>(
            <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>

          ))
        }
      </div>
      <WorkoutForm/>
    </div>
  );
}
