import React from "react";
import { DifficultyLevel } from "../types/workoutTypes";
import "../styles/DifficultySelector.css";

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: DifficultyLevel, duration: number) => void;
  selectedDifficulty?: DifficultyLevel;
  selectedDuration?: number;
}

interface DifficultyOption {
  level: DifficultyLevel;
  label: string;
  description: string;
  icon: string;
}

/**
 * DifficultySelector Component
 * Allows user to select difficulty level and duration for HIIT workout
 */
export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  onSelectDifficulty,
  selectedDifficulty,
  selectedDuration,
}) => {
  const difficulties: DifficultyOption[] = [
    {
      level: "beginner",
      label: "Beginner",
      description: "Great for starting out. Lower intensity, build endurance.",
      icon: "🌱",
    },
    {
      level: "intermediate",
      label: "Intermediate",
      description: "Balanced challenge. Good strength and cardio mix.",
      icon: "⚡",
    },
    {
      level: "advanced",
      label: "Advanced",
      description: "High intensity. Push yourself to the limit.",
      icon: "🔥",
    },
  ];

  const durations = [
    { value: 10, label: "10 Minutes", description: "Quick & intense" },
    { value: 20, label: "20 Minutes", description: "Full workout" },
  ];

  return (
    <div className="difficulty-selector">
      <div className="selector-header">
        <h2>Choose Your Workout</h2>
        <p>Select difficulty level and duration for your HIIT session</p>
      </div>

      {/* Duration Selection */}
      <div className="duration-section">
        <h3>Workout Duration</h3>
        <div className="duration-options">
          {durations.map((duration) => (
            <button
              key={duration.value}
              className={`duration-button ${selectedDuration === duration.value ? "selected" : ""}`}
              onClick={() => {
                if (selectedDifficulty) {
                  onSelectDifficulty(selectedDifficulty, duration.value);
                }
              }}
              disabled={!selectedDifficulty}
            >
              <span className="duration-label">{duration.label}</span>
              <span className="duration-description">
                {duration.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Selection */}
      <div className="difficulty-section">
        <h3>Difficulty Level</h3>
        <div className="difficulty-cards">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.level}
              className={`difficulty-card ${selectedDifficulty === difficulty.level ? "selected" : ""}`}
              onClick={() =>
                onSelectDifficulty(difficulty.level, selectedDuration || 10)
              }
            >
              <div className="difficulty-icon">{difficulty.icon}</div>
              <h4 className="difficulty-label">{difficulty.label}</h4>
              <p className="difficulty-description">{difficulty.description}</p>

              {/* What to expect */}
              <div className="difficulty-details">
                {difficulty.level === "beginner" && (
                  <>
                    <p>✓ Foundational movements</p>
                    <p>✓ Controlled pace</p>
                    <p>✓ Full recovery time</p>
                  </>
                )}
                {difficulty.level === "intermediate" && (
                  <>
                    <p>✓ Varied exercises</p>
                    <p>✓ Steady intensity</p>
                    <p>✓ Balance of work/rest</p>
                  </>
                )}
                {difficulty.level === "advanced" && (
                  <>
                    <p>✓ Challenging movements</p>
                    <p>✓ High intensity</p>
                    <p>✓ Minimal rest</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <div className="selector-footer">
        {selectedDifficulty && selectedDuration && (
          <div className="selection-summary">
            <p>
              Ready to do a {selectedDuration}-minute{" "}
              <strong>{selectedDifficulty}</strong> HIIT workout!
            </p>
          </div>
        )}
        {!selectedDifficulty && (
          <p className="selection-hint">👈 Select a difficulty to begin</p>
        )}
      </div>
    </div>
  );
};

export default DifficultySelector;
