import React, { useState } from "react";
import { Exercise } from "../types/workoutTypes";
import "../styles/ExerciseCard.css";

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

  return (
    <div className={`exercise-card ${isCompleted ? "completed" : ""}`}>
      {/* Exercise Header */}
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
        {isCompleted && <div className="completed-badge">✓ Completed</div>}
      </div>

      {/* Exercise GIF */}
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

      {/* Exercise Details */}
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
            <span className="detail-label">Sets × Reps:</span>
            <span className="detail-value">
              {exercise.sets} × {exercise.reps}
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

      {/* Instructions Toggle */}
      {exercise.instructions && exercise.instructions.length > 0 && (
        <div className="instructions-section">
          <button
            className="instructions-toggle"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? "▼ Hide Instructions" : "▶ Show Instructions"}
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

      {/* Complete Button */}
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
