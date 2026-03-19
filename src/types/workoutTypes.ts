/**
 * Difficulty levels for workouts
 */
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Muscle groups for bro split routine
 */
export type MuscleGroup = 'chest' | 'back' | 'shoulders' | 'legs' | 'arms';

/**
 * Workout type identifiers
 */
export type WorkoutType = 'hiit' | 'bro-split';

/**
 * Represents a single exercise
 */
export interface Exercise {
    id: string;
    name: string;
    description?: string;
    duration: number; // in seconds
    gifUrl: string | string[];
    instructions?: string[];
    difficulty?: DifficultyLevel;
    muscleGroup?: MuscleGroup;
    restTime?: number; // in seconds
    reps?: number; // for strength exercises
    sets?: number; // for strength exercises
}

/**
 * Represents a complete workout session
 */
export interface Workout {
    id: string;
    name: string;
    type: WorkoutType;
    exercises: Exercise[];
    totalDuration: number; // in seconds
    muscleGroupFocus?: MuscleGroup;
    difficulty?: DifficultyLevel;
    restBetweenExercises?: number; // in seconds
}

/**
 * HIIT-specific workout configuration
 */
export interface HIITWorkout extends Workout {
    type: 'hiit';
    difficulty: DifficultyLevel;
    workDuration: number; // seconds of work
    restDuration: number; // seconds of rest
    rounds: number; // number of rounds
}

/**
 * Bro split specific configuration
 */
export interface BroSplitDay extends Workout {
    type: 'bro-split';
    muscleGroupFocus: MuscleGroup;
    dayOfWeek: string;
}

/**
 * Weekly schedule for bro split
 */
export interface WeeklySchedule {
    [key: string]: BroSplitDay;
}

/**
 * User's workout program
 */
export interface WorkoutProgram {
    currentWeek: number;
    currentDay: number; // 0-6 (Sunday-Saturday)
    hiitWorkouts: HIITWorkout[];
    broSplitSchedule: WeeklySchedule;
    difficulty?: DifficultyLevel;
}

/**
 * Track user's daily progress
 */
export interface WorkoutProgress {
    date: string; // ISO format
    exerciseId: string;
    completed: boolean;
    repsCompleted?: number;
    notesOrFeedback?: string;
}
