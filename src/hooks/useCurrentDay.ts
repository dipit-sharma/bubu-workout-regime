import { useState, useEffect, useCallback } from 'react';
import type { MuscleGroup } from '../types/workoutTypes';

interface CurrentDayInfo {
    dayOfWeek: number; // 0-6 (Sunday-Saturday)
    dayName: string;
    muscleGroup: MuscleGroup;
    isRestDay: boolean;
}

/**
 * useCurrentDay Hook
 * Calculates current day of week and determines the muscle group for bro split
 */
export const useCurrentDay = (startDate?: Date): CurrentDayInfo => {
    const [currentDay, setCurrentDay] = useState<CurrentDayInfo>({
        dayOfWeek: 0,
        dayName: 'Sunday',
        muscleGroup: 'chest',
        isRestDay: true
    });

    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    /**
     * Map day of week to muscle group for bro split
     * Sunday: Rest
     * Monday: Chest
     * Tuesday: Back
     * Wednesday: Shoulders
     * Thursday: Legs
     * Friday: Arms
     * Saturday: Cardio/Active Recovery
     */
    const dayToMuscleGroup = (dayOfWeek: number): [MuscleGroup, boolean] => {
        const mapping: Record<number, [MuscleGroup, boolean]> = {
            0: ['arms', true], // Sunday - Rest
            1: ['chest', false], // Monday
            2: ['back', false], // Tuesday
            3: ['shoulders', false], // Wednesday
            4: ['legs', false], // Thursday
            5: ['arms', false], // Friday
            6: ['arms', true] // Saturday - Cardio
        };
        return mapping[dayOfWeek] || ['chest', false];
    };

    const calculateCurrentDay = useCallback(() => {
        const now = startDate || new Date();
        const dayOfWeek = now.getDay();
        const [muscleGroup, isRestDay] = dayToMuscleGroup(dayOfWeek);

        setCurrentDay({
            dayOfWeek,
            dayName: dayNames[dayOfWeek],
            muscleGroup,
            isRestDay
        });
    }, [startDate]);

    useEffect(() => {
        calculateCurrentDay();

        // Update day at midnight
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        const timeUntilMidnight = tomorrow.getTime() - now.getTime();
        const midnightTimer = setTimeout(() => {
            calculateCurrentDay();
        }, timeUntilMidnight);

        return () => clearTimeout(midnightTimer);
    }, [calculateCurrentDay]);

    return currentDay;
};

export default useCurrentDay;
