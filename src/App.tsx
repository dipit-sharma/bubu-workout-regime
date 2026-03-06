import { useEffect, useState } from "react";
import "./App.css";
import useWorkoutProgram from "./hooks/useWorkoutProgram";
import WeekIndicator from "./components/WeekIndicator";
import DifficultySelector from "./components/DifficultySelector";
import WorkoutDisplay from "./components/WorkoutDisplay";
import ProgressTracker from "./components/ProgressTracker";
import type { DifficultyLevel } from "./types/workoutTypes";

/**
 * Main App Component
 * Manages the overall workout program flow and rendering
 */
function App() {
  const workoutProgram = useWorkoutProgram();
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  useEffect(() => {
    setCompletedExercises([]);
  }, [
    workoutProgram.viewedDayOfWeek,
    workoutProgram.currentWeek,
    workoutProgram.selectedDifficulty,
    workoutProgram.selectedDuration,
  ]);

  const handleExerciseComplete = (exerciseId: string) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
    }
  };

  const handleSelectDifficulty = (
    difficulty: DifficultyLevel,
    duration: number,
  ) => {
    workoutProgram.selectDifficulty(difficulty, duration);
  };

  const currentWorkout = workoutProgram.getSuggestedWorkout();
  const totalExercises = currentWorkout?.exercises.length || 0;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Bubu's Workout Regime</h1>
        <p className="app-subtitle">
          Your personal fitness journey starts here
        </p>
      </header>

      <main className="app-main">
        <WeekIndicator
          currentWeek={workoutProgram.currentWeek}
          currentDay={workoutProgram.viewedDayOfWeek}
          isHIITPhase={workoutProgram.isHIITPhase}
          muscleGroup={
            workoutProgram.isHIITPhase
              ? undefined
              : workoutProgram.viewedMuscleGroup
          }
          difficulty={workoutProgram.selectedDifficulty}
        />

        <section className="day-navigation" aria-label="Day navigation">
          <button
            type="button"
            className="day-nav-button"
            onClick={workoutProgram.goToPreviousDay}
          >
            Previous Day
          </button>
          <button
            type="button"
            className="day-nav-button day-nav-today"
            onClick={workoutProgram.goToToday}
          >
            Today
          </button>
          <button
            type="button"
            className="day-nav-button"
            onClick={workoutProgram.goToNextDay}
          >
            Next Day
          </button>
        </section>

        {workoutProgram.isHIITPhase &&
          (!workoutProgram.selectedDifficulty ||
            !workoutProgram.selectedDuration) && (
            <DifficultySelector
              onSelectDifficulty={handleSelectDifficulty}
              selectedDifficulty={workoutProgram.selectedDifficulty}
              selectedDuration={workoutProgram.selectedDuration}
            />
          )}

        {currentWorkout && currentWorkout.exercises.length > 0 && (
          <>
            <ProgressTracker
              completedExercises={completedExercises}
              totalExercises={totalExercises}
              date={new Date().toISOString()}
              workoutType={workoutProgram.isHIITPhase ? "hiit" : "bro-split"}
            />

            <WorkoutDisplay
              workout={currentWorkout}
              dayName={workoutProgram.viewedDayName}
              muscleGroup={
                workoutProgram.isHIITPhase
                  ? undefined
                  : workoutProgram.viewedMuscleGroup
              }
              onExerciseComplete={handleExerciseComplete}
            />
          </>
        )}

        {workoutProgram.viewedIsRestDay && !workoutProgram.isHIITPhase && (
          <div className="rest-day-message">
            <h2>Rest Day</h2>
            <p>Great job. Recover today and prepare for tomorrow's workout.</p>
            <p className="rest-suggestions">
              Consider light stretching, walking, meditation, or foam rolling.
            </p>
          </div>
        )}

        {workoutProgram.isHIITPhase && !workoutProgram.selectedDifficulty && (
          <div className="no-workout-message">
            <p>
              Select a difficulty level to get started with your HIIT workout.
            </p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Week {workoutProgram.currentWeek}</p>
        <p className="footer-phase">
          {workoutProgram.isHIITPhase ? "HIIT Phase" : "Bro Split Phase"}
        </p>
      </footer>
    </div>
  );
}

export default App;
