import React, { useEffect, useState } from "react";
import WorkoutDetails from './../components/WorkoutDetails';

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts/"); 
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkout();
  }, []);
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
    </div>
  );
}
