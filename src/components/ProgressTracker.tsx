import React, { useMemo } from "react";
import { WorkoutProgress } from "../types/workoutTypes";
import "../styles/ProgressTracker.css";

interface ProgressTrackerProps {
  completedExercises: string[];
  totalExercises: number;
  date: string;
  workoutType: "hiit" | "bro-split";
}

/**
 * ProgressTracker Component
 * Displays and tracks user's workout completion progress
 */
export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedExercises,
  totalExercises,
  date,
  workoutType,
}) => {
  const completionPercentage = useMemo(() => {
    return totalExercises > 0
      ? Math.round((completedExercises.length / totalExercises) * 100)
      : 0;
  }, [completedExercises.length, totalExercises]);

  const isWorkoutComplete =
    completedExercises.length === totalExercises && totalExercises > 0;

  const formatDate = (dateString: string): string => {
    try {
      const dateObj = new Date(dateString);
      return dateObj.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const getMotivationalMessage = (percentage: number): string => {
    if (percentage === 0) return "Let's get started! 💪";
    if (percentage < 33) return "Great start! Keep it up! 🔥";
    if (percentage < 66) return "You're halfway there! 🚀";
    if (percentage < 100) return "Almost done! Push through! 💯";
    return "Amazing work! You crushed it! 🎉";
  };

  return (
    <div className={`progress-tracker ${isWorkoutComplete ? "completed" : ""}`}>
      <div className="progress-header">
        <div className="date-info">
          <span className="date-label">Today:</span>
          <span className="date-value">{formatDate(date)}</span>
        </div>
        <div className="workout-type-badge">
          {workoutType === "hiit" ? "⚡ HIIT" : "💪 Bro Split"}
        </div>
      </div>

      <div className="progress-content">
        <div className="progress-circle">
          <svg viewBox="0 0 120 120" className="progress-svg">
            <circle cx="60" cy="60" r="54" className="progress-circle-bg" />
            <circle
              cx="60"
              cy="60"
              r="54"
              className="progress-circle-fill"
              style={{
                strokeDasharray: `${(completionPercentage / 100) * (54 * 2 * Math.PI)} ${54 * 2 * Math.PI}`,
              }}
            />
          </svg>
          <div className="progress-text">
            <span className="percentage">{completionPercentage}%</span>
          </div>
        </div>

        <div className="progress-stats">
          <div className="stat">
            <span className="stat-number">{completedExercises.length}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">{totalExercises}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </div>

      <div className="motivation-message">
        {getMotivationalMessage(completionPercentage)}
      </div>

      {isWorkoutComplete && (
        <div className="completion-badge">
          <span className="badge-icon">✓</span>
          <span>Workout Complete!</span>
        </div>
      )}

      {totalExercises === 0 && (
        <div className="no-workout-badge">
          <span>Rest Day or No Exercises</span>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
