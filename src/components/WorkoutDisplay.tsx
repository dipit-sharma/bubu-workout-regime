import React, { useState, useCallback } from "react";
import ExerciseCard from "./ExerciseCard";
import "../styles/WorkoutDisplay.css";
import type { Workout } from "../types/workoutTypes";

interface WorkoutDisplayProps {
  workout: Workout;
  dayName?: string;
  muscleGroup?: string;
  onExerciseComplete?: (exerciseId: string) => void;
}

/**
 * WorkoutDisplay Component
 * Renders all exercises for the current day workout
 */
export const WorkoutDisplay: React.FC<WorkoutDisplayProps> = ({
  workout,
  dayName,
  muscleGroup,
  onExerciseComplete,
}) => {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set(),
  );
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleExerciseComplete = useCallback(
    (exerciseId: string) => {
      setCompletedExercises((prev) => {
        const updated = new Set(prev);
        updated.add(exerciseId);
        return updated;
      });

      // Move to next exercise if available
      if (currentExerciseIndex < workout.exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
      }

      // Notify parent component
      if (onExerciseComplete) {
        onExerciseComplete(exerciseId);
      }
    },
    [currentExerciseIndex, workout.exercises.length, onExerciseComplete],
  );

  const completionPercentage = Math.round(
    (completedExercises.size / workout.exercises.length) * 100,
  );

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="workout-display">
      {/* Workout Header */}
      <div className="workout-header">
        <h1 className="workout-title">{workout.name}</h1>
        {dayName && <p className="workout-day">{dayName}</p>}
        {muscleGroup && (
          <p className="workout-muscle-group">
            Focus: {muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1)}
          </p>
        )}
      </div>

      {/* Workout Stats */}
      <div className="workout-stats">
        <div className="stat-card">
          <span className="stat-label">Total Duration</span>
          <span className="stat-value">
            {formatDuration(workout.totalDuration)}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Exercises</span>
          <span className="stat-value">{workout.exercises.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Completed</span>
          <span className="stat-value">
            {completedExercises.size} / {workout.exercises.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
        <p className="progress-text">{completionPercentage}% Complete</p>
      </div>

      {/* Exercises */}
      <div className="exercises-container">
        {workout.exercises.length > 0 ? (
          <div className="exercises-list">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                exerciseNumber={index + 1}
                totalExercises={workout.exercises.length}
                isCompleted={completedExercises.has(exercise.id)}
                onComplete={handleExerciseComplete}
              />
            ))}
          </div>
        ) : (
          <div className="no-exercises">
            <p>No exercises scheduled for today</p>
          </div>
        )}
      </div>

      {/* Completion Message */}
      {completedExercises.size === workout.exercises.length &&
        workout.exercises.length > 0 && (
          <div className="completion-message">
            <h2>🎉 Workout Complete!</h2>
            <p>Great job, Bubu! You crushed it today!</p>
          </div>
        )}
    </div>
  );
};

export default WorkoutDisplay;
