import React, { useMemo } from "react";
import { MuscleGroup } from "../types/workoutTypes";
import "../styles/WeekIndicator.css";

interface WeekIndicatorProps {
  currentWeek: number;
  currentDay: number; // 0-6 (Sunday-Saturday)
  isHIITPhase: boolean;
  muscleGroup?: MuscleGroup;
  difficulty?: string;
}

interface DayInfo {
  name: string;
  short: string;
  muscleGroup?: MuscleGroup;
}

/**
 * WeekIndicator Component
 * Displays current week, day, and workout phase information
 */
export const WeekIndicator: React.FC<WeekIndicatorProps> = ({
  currentWeek,
  currentDay,
  isHIITPhase,
  muscleGroup,
  difficulty,
}) => {
  const days: DayInfo[] = [
    { name: "Sunday", short: "Sun", muscleGroup: "arms" },
    { name: "Monday", short: "Mon", muscleGroup: "chest" },
    { name: "Tuesday", short: "Tue", muscleGroup: "back" },
    { name: "Wednesday", short: "Wed", muscleGroup: "shoulders" },
    { name: "Thursday", short: "Thu", muscleGroup: "legs" },
    { name: "Friday", short: "Fri", muscleGroup: "arms" },
    { name: "Saturday", short: "Sat", muscleGroup: "arms" },
  ];

  const currentDayName = days[currentDay].name;
  const broSplitSchedule = useMemo(() => {
    return {
      0: "Rest Day",
      1: "Chest",
      2: "Back",
      3: "Shoulders",
      4: "Legs",
      5: "Arms",
      6: "Cardio / Active Recovery",
    };
  }, []);

  const getMuscleGroupEmoji = (muscle?: MuscleGroup): string => {
    const emojis: Record<string, string> = {
      chest: "🫀",
      back: "🔙",
      shoulders: "💪",
      legs: "🦵",
      arms: "💪",
    };
    return muscle ? emojis[muscle] || "✨" : "✨";
  };

  const phaseBadgeColor = isHIITPhase ? "badge-hiit" : "badge-bro-split";
  const phaseLabel = isHIITPhase ? "HIIT Week" : "Bro Split";

  return (
    <div className={`week-indicator ${phaseBadgeColor}`}>
      {/* Phase Badge */}
      <div className="phase-info">
        <span className={`phase-badge ${phaseBadgeColor}`}>{phaseLabel}</span>
        <span className="week-number">Week {currentWeek}</span>
      </div>

      {/* Current Day Info */}
      <div className="current-day-info">
        <h3 className="current-day-name">{currentDayName}</h3>

        {isHIITPhase ? (
          <div className="hiit-info">
            {difficulty && (
              <p className="difficulty-label">
                {difficulty.toUpperCase()} Difficulty
              </p>
            )}
            <p className="workout-type">Mixed HIIT Exercises</p>
          </div>
        ) : (
          <div className="bro-split-info">
            <p className="muscle-group">
              {getMuscleGroupEmoji(muscleGroup)} {broSplitSchedule[currentDay]}
            </p>
            <p className="workout-type">Bro Split Day</p>
          </div>
        )}
      </div>

      {/* Weekly Overview */}
      <div className="weekly-overview">
        <p className="overview-label">This Week</p>
        <div className="days-grid">
          {days.map((day, index) => {
            const isToday = index === currentDay;
            const dayLabel = isHIITPhase ? "HIIT" : broSplitSchedule[index];

            return (
              <div
                key={day.name}
                className={`day-item ${isToday ? "current-day" : ""}`}
              >
                <span className="day-abbreviation">{day.short}</span>
                <span className="day-workout">
                  {isHIITPhase ? (
                    <span className="hiit-indicator">⚡</span>
                  ) : (
                    <span className="muscle-indicator">
                      {getMuscleGroupEmoji(day.muscleGroup)}
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Message */}
      <div className="progress-message">
        {isHIITPhase ? (
          <p>💪 Keep pushing! You're in your conditioning week.</p>
        ) : (
          <p>📈 {broSplitSchedule[currentDay]} - Time to build muscle!</p>
        )}
      </div>
    </div>
  );
};

export default WeekIndicator;
