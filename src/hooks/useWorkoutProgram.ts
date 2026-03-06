import { useState, useCallback, useEffect, useMemo } from 'react';
import { hiitExercises } from '../data/hiitExercises';
import { broSplitExercises } from '../data/broSplitExercises';
import { useCurrentDay } from './useCurrentDay';
import type { BroSplitDay, DifficultyLevel, HIITWorkout, MuscleGroup, Workout } from '../types/workoutTypes';

interface WorkoutProgramState {
    currentWeek: number;
    isHIITPhase: boolean;
    selectedDifficulty?: DifficultyLevel;
    selectedDuration?: number;
    currentWorkout: Workout | null;
    allHIITWorkouts: HIITWorkout[];
    broSplitSchedule: Record<string, BroSplitDay>;
}

interface UseWorkoutProgramReturn extends WorkoutProgramState {
    selectDifficulty: (difficulty: DifficultyLevel, duration: number) => void;
    getWorkoutForDay: (dayOfWeek: number) => Workout | null;
    getSuggestedWorkout: () => Workout | null;
    progressToNextWeek: () => void;
    resetToWeek: (week: number) => void;
    viewedDayOfWeek: number;
    viewedDayName: string;
    viewedMuscleGroup: MuscleGroup;
    viewedIsRestDay: boolean;
    goToNextDay: () => void;
    goToPreviousDay: () => void;
    goToToday: () => void;
}

/**
 * useWorkoutProgram Hook
 * Manages the overall workout program state, week tracking, and exercise selection
 */
export const useWorkoutProgram = (
    startDate?: Date
): UseWorkoutProgramReturn => {
    const currentDayInfo = useCurrentDay(startDate);
    type BroSplitDayName = keyof typeof broSplitExercises.schedule;
    const dayNames = useMemo<BroSplitDayName[]>(
        () => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        []
    );

    // Program state
    const [currentWeek, setCurrentWeek] = useState<number>(1);
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | undefined>();
    const [selectedDuration, setSelectedDuration] = useState<number | undefined>();
    const [programStartDate, setProgramStartDate] = useState<Date>(
        startDate || new Date()
    );
    const [viewedDayOfWeek, setViewedDayOfWeek] = useState<number>(currentDayInfo.dayOfWeek);

    useEffect(() => {
        setViewedDayOfWeek(currentDayInfo.dayOfWeek);
    }, [currentDayInfo.dayOfWeek]);

    // Determine if in HIIT phase (Week 1) or Bro Split phase (Week 2+)
    const isHIITPhase = useMemo(() => currentWeek === 1, [currentWeek]);

    // Calculate days since program start
    const daysSinceStart = useMemo(() => {
        const now = new Date();
        const diff = now.getTime() - programStartDate.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }, [programStartDate]);

    // Auto-progress from Week 1 to Week 2 after 7 days
    useEffect(() => {
        if (daysSinceStart >= 7 && currentWeek === 1) {
            setCurrentWeek(2);
        }
    }, [daysSinceStart, currentWeek]);

    /**
     * Get workout for a specific day of week
     * @param dayOfWeek 0-6 (Sunday-Saturday)
     */
    const getWorkoutForDay = useCallback(
        (dayOfWeek: number): Workout | null => {
            // HIIT phase - same workout for all days, depends on difficulty selection
            if (isHIITPhase) {
                if (!selectedDifficulty || !selectedDuration) {
                    return null;
                }

                const workoutId = `hiit-${selectedDuration}-${selectedDifficulty}`;
                return (
                    hiitExercises.all.find((w) => w.id === workoutId) || null
                );
            }

            // Bro Split phase - different workout per day
            const dayName = dayNames[dayOfWeek];
            return broSplitExercises.schedule[dayName] || null;
        },
        [isHIITPhase, selectedDifficulty, selectedDuration, dayNames]
    );

    /**
     * Get suggested workout for viewed day
     */
    const getSuggestedWorkout = useCallback((): Workout | null => {
        return getWorkoutForDay(viewedDayOfWeek);
    }, [getWorkoutForDay, viewedDayOfWeek]);

    /**
     * Set difficulty and duration for HIIT workout
     */
    const selectDifficulty = useCallback(
        (difficulty: DifficultyLevel, duration: number) => {
            if (isHIITPhase) {
                setSelectedDifficulty(difficulty);
                setSelectedDuration(duration);
            }
        },
        [isHIITPhase]
    );

    /**
     * Manually progress to next week
     */
    const progressToNextWeek = useCallback(() => {
        setCurrentWeek((prev) => prev + 1);
    }, []);

    /**
     * Reset to specific week
     */
    const resetToWeek = useCallback((week: number) => {
        setCurrentWeek(week);
        if (week === 1) {
            setSelectedDifficulty(undefined);
            setSelectedDuration(undefined);
            setProgramStartDate(new Date());
        }
    }, []);

    const getDayMetadata = useCallback(
        (dayOfWeek: number): { muscleGroup: MuscleGroup; isRestDay: boolean } => {
            const mapping: Record<number, { muscleGroup: MuscleGroup; isRestDay: boolean }> = {
                0: { muscleGroup: 'arms', isRestDay: true },
                1: { muscleGroup: 'chest', isRestDay: false },
                2: { muscleGroup: 'back', isRestDay: false },
                3: { muscleGroup: 'shoulders', isRestDay: false },
                4: { muscleGroup: 'legs', isRestDay: false },
                5: { muscleGroup: 'arms', isRestDay: false },
                6: { muscleGroup: 'arms', isRestDay: true }
            };

            return mapping[dayOfWeek] || { muscleGroup: 'chest', isRestDay: false };
        },
        []
    );

    const viewedDayName = dayNames[viewedDayOfWeek] || 'Sunday';
    const viewedDayMeta = getDayMetadata(viewedDayOfWeek);

    const goToNextDay = useCallback(() => {
        setViewedDayOfWeek((prev) => (prev + 1) % 7);
    }, []);

    const goToPreviousDay = useCallback(() => {
        setViewedDayOfWeek((prev) => (prev - 1 + 7) % 7);
    }, []);

    const goToToday = useCallback(() => {
        setViewedDayOfWeek(currentDayInfo.dayOfWeek);
    }, [currentDayInfo.dayOfWeek]);

    return {
        currentWeek,
        isHIITPhase,
        selectedDifficulty,
        selectedDuration,
        currentWorkout: getSuggestedWorkout(),
        allHIITWorkouts: hiitExercises.all,
        broSplitSchedule: broSplitExercises.schedule,
        selectDifficulty,
        getWorkoutForDay,
        getSuggestedWorkout,
        progressToNextWeek,
        resetToWeek,
        viewedDayOfWeek,
        viewedDayName,
        viewedMuscleGroup: viewedDayMeta.muscleGroup,
        viewedIsRestDay: viewedDayMeta.isRestDay,
        goToNextDay,
        goToPreviousDay,
        goToToday
    };
};

export default useWorkoutProgram;


