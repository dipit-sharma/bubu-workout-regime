import React, { useState, useEffect, useMemo } from "react";
import "../styles/ExerciseCard.css";
import type { Exercise } from "../types/workoutTypes";

interface ExerciseCardProps {
  exercise: Exercise;
  exerciseNumber?: number;
  totalExercises?: number;
  isCompleted?: boolean;
  onComplete?: (exerciseId: string) => void;
}

/**
 * ExerciseCard Component
 * Displays a single exercise with GIF, name, duration, and instructions
 */
export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  exerciseNumber,
  totalExercises,
  isCompleted = false,
  onComplete,
}) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(exercise.duration);

  useEffect(() => {
    setIsTimerRunning(false);
    setRemainingSeconds(exercise.duration);
  }, [exercise.id, exercise.duration]);

  useEffect(() => {
    if (!isTimerRunning || remainingSeconds <= 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isTimerRunning, remainingSeconds]);

  const progressPercentage = useMemo(() => {
    if (exercise.duration <= 0) {
      return 0;
    }

    const elapsed = exercise.duration - remainingSeconds;
    return Math.min(
      100,
      Math.max(0, Math.round((elapsed / exercise.duration) * 100)),
    );
  }, [exercise.duration, remainingSeconds]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`exercise-card ${isCompleted ? "completed" : ""}`}>
      <div className="exercise-header">
        <div className="exercise-title-section">
          {exerciseNumber && totalExercises && (
            <span className="exercise-counter">
              {exerciseNumber} / {totalExercises}
            </span>
          )}
          <h2 className="exercise-name">{exercise.name}</h2>
          {exercise.description && (
            <p className="exercise-description">{exercise.description}</p>
          )}
        </div>
        {isCompleted && <div className="completed-badge">Completed</div>}
      </div>

      <div className="exercise-gif-container">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="exercise-gif"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2U4ZThlOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjIwIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+R0lGIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";
          }}
        />
      </div>

      <div className="exercise-timer" aria-live="polite">
        <div className="timer-header-row">
          <span className="timer-label">Exercise Timer</span>
          <span className="timer-value">{formatTime(remainingSeconds)}</span>
        </div>
        <div className="timer-progress-track">
          <div
            className="timer-progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="timer-actions">
          <button
            type="button"
            className="timer-button"
            onClick={() => setIsTimerRunning((prev) => !prev)}
            disabled={remainingSeconds === 0}
          >
            {isTimerRunning ? "Pause" : "Start"}
          </button>
          <button
            type="button"
            className="timer-button timer-button-secondary"
            onClick={() => {
              setIsTimerRunning(false);
              setRemainingSeconds(exercise.duration);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="exercise-details">
        <div className="detail-row">
          <span className="detail-label">Duration:</span>
          <span className="detail-value">{exercise.duration} seconds</span>
        </div>

        {exercise.difficulty && (
          <div className="detail-row">
            <span className="detail-label">Difficulty:</span>
            <span className={`detail-value difficulty-${exercise.difficulty}`}>
              {exercise.difficulty.charAt(0).toUpperCase() +
                exercise.difficulty.slice(1)}
            </span>
          </div>
        )}

        {exercise.sets && exercise.reps && (
          <div className="detail-row">
            <span className="detail-label">Sets x Reps:</span>
            <span className="detail-value">
              {exercise.sets} x {exercise.reps}
            </span>
          </div>
        )}

        {exercise.restTime && (
          <div className="detail-row">
            <span className="detail-label">Rest Time:</span>
            <span className="detail-value">{exercise.restTime} seconds</span>
          </div>
        )}
      </div>

      {exercise.instructions && exercise.instructions.length > 0 && (
        <div className="instructions-section">
          <button
            type="button"
            className="instructions-toggle"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? "Hide Instructions" : "Show Instructions"}
          </button>

          {showInstructions && (
            <div className="instructions-list">
              <ol>
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {onComplete && !isCompleted && (
        <button
          className="complete-button"
          onClick={() => onComplete(exercise.id)}
        >
          Mark as Complete
        </button>
      )}
    </div>
  );
};

export default ExerciseCard;
