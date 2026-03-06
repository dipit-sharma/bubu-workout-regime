import { BroSplitDay, Exercise } from '../types/workoutTypes';

/**
 * Bro Split Exercise Library
 * 6 exercises per muscle group
 */

// === CHEST EXERCISES ===
const chestExercises: Exercise[] = [
    {
        id: 'chest-bench-press',
        name: 'Barbell Bench Press',
        description: 'Primary chest builder',
        duration: 60,
        gifUrl: '/gifs/bro-split/chest/bench-press.gif',
        instructions: [
            'Lie on flat bench, feet on ground',
            'Grip bar slightly wider than shoulders',
            'Lower bar to chest level',
            'Press bar back up to starting position'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 4,
        reps: 8
    },
    {
        id: 'chest-incline-dumbbell',
        name: 'Incline Dumbbell Press',
        description: 'Upper chest emphasis',
        duration: 60,
        gifUrl: '/gifs/bro-split/chest/incline-dumbbell.gif',
        instructions: [
            'Sit on incline bench (45 degrees)',
            'Hold dumbbells at shoulder height',
            'Press dumbbells up and together',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 3,
        reps: 10
    },
    {
        id: 'chest-dumbbell-press',
        name: 'Dumbbell Floor Press',
        description: 'Chest with tricep emphasis',
        duration: 60,
        gifUrl: '/gifs/bro-split/chest/dumbbell-floor-press.gif',
        instructions: [
            'Lie on floor with knees bent',
            'Hold dumbbells at chest level',
            'Press up, stopping just before full lockout',
            'Lower dumbbells back down'
        ],
        difficulty: 'beginner',
        muscleGroup: 'chest',
        sets: 3,
        reps: 12
    },
    {
        id: 'chest-cable-flyes',
        name: 'Cable Flyes',
        description: 'Chest isolation',
        duration: 45,
        gifUrl: '/gifs/bro-split/chest/cable-flyes.gif',
        instructions: [
            'Set cables at shoulder height',
            'Stand in middle, grab handles',
            'Bring hands together in front',
            'Return to starting position with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 3,
        reps: 12
    },
    {
        id: 'chest-dips',
        name: 'Chest Dips',
        description: 'Lower chest and triceps',
        duration: 45,
        gifUrl: '/gifs/bro-split/chest/dips.gif',
        instructions: [
            'Use dip bars, lean slightly forward',
            'Lower body by bending elbows',
            'Push back up to starting position',
            'Add weight if needed'
        ],
        difficulty: 'advanced',
        muscleGroup: 'chest',
        sets: 3,
        reps: 8
    },
    {
        id: 'chest-push-ups',
        name: 'Decline Push-ups',
        description: 'Upper chest activation',
        duration: 45,
        gifUrl: '/gifs/bro-split/chest/decline-push-ups.gif',
        instructions: [
            'Feet elevated on bench or platform',
            'Hands on floor, shoulder-width apart',
            'Lower chest to ground',
            'Press back up'
        ],
        difficulty: 'beginner',
        muscleGroup: 'chest',
        sets: 3,
        reps: 10
    }
];

// === BACK EXERCISES ===
const backExercises: Exercise[] = [
    {
        id: 'back-deadlift',
        name: 'Conventional Deadlift',
        description: 'Full back and posterior chain',
        duration: 75,
        gifUrl: '/gifs/bro-split/back/deadlift.gif',
        instructions: [
            'Stand with feet hip-width apart',
            'Grip barbell just outside legs',
            'Drive through heels, keep back straight',
            'Pull barbell up along your body'
        ],
        difficulty: 'advanced',
        muscleGroup: 'back',
        sets: 3,
        reps: 6
    },
    {
        id: 'back-barbell-rows',
        name: 'Barbell Bent-Over Rows',
        description: 'Mid and upper back',
        duration: 60,
        gifUrl: '/gifs/bro-split/back/barbell-rows.gif',
        instructions: [
            'Bend at hips, keep back straight',
            'Grip barbell shoulder-width apart',
            'Pull barbell to chest',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 4,
        reps: 8
    },
    {
        id: 'back-dumbbell-rows',
        name: 'Single Arm Dumbbell Rows',
        description: 'Unilateral back strength',
        duration: 60,
        gifUrl: '/gifs/bro-split/back/dumbbell-rows.gif',
        instructions: [
            'Hinge forward, one knee on bench',
            'Pull dumbbell to hip',
            'Squeeze back at top',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 3,
        reps: 10
    },
    {
        id: 'back-lat-pulldowns',
        name: 'Lat Pulldowns',
        description: 'Lats and upper back',
        duration: 45,
        gifUrl: '/gifs/bro-split/back/lat-pulldowns.gif',
        instructions: [
            'Sit with chest against pad',
            'Grip the bar wider than shoulders',
            'Pull bar down to upper chest',
            'Return to starting position'
        ],
        difficulty: 'beginner',
        muscleGroup: 'back',
        sets: 3,
        reps: 12
    },
    {
        id: 'back-face-pulls',
        name: 'Face Pulls',
        description: 'Rear delts and upper back',
        duration: 45,
        gifUrl: '/gifs/bro-split/back/face-pulls.gif',
        instructions: [
            'Set cable at face height',
            'Grab with wide grip',
            'Pull toward face, elbows high',
            'Squeeze shoulder blades together'
        ],
        difficulty: 'beginner',
        muscleGroup: 'back',
        sets: 3,
        reps: 15
    },
    {
        id: 'back-inverted-rows',
        name: 'Inverted Rows',
        description: 'Back strength with body weight',
        duration: 45,
        gifUrl: '/gifs/bro-split/back/inverted-rows.gif',
        instructions: [
            'Use low bar, body straight',
            'Pull chest toward bar',
            'Squeeze back muscles',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 3,
        reps: 10
    }
];

// === SHOULDER EXERCISES ===
const shoulderExercises: Exercise[] = [
    {
        id: 'shoulders-military-press',
        name: 'Barbell Military Press',
        description: 'Shoulder pressing power',
        duration: 60,
        gifUrl: '/gifs/bro-split/shoulders/military-press.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Grip barbell at shoulder height',
            'Press bar overhead',
            'Lower barbell back down'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 8
    },
    {
        id: 'shoulders-lateral-raises',
        name: 'Lateral Dumbbell Raises',
        description: 'Shoulder width builder',
        duration: 45,
        gifUrl: '/gifs/bro-split/shoulders/lateral-raises.gif',
        instructions: [
            'Stand with dumbbells at sides',
            'Keep slight elbow bend',
            'Raise dumbbells to shoulder height',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 12
    },
    {
        id: 'shoulders-rear-delt-flies',
        name: 'Rear Delt Flyes',
        description: 'Rear shoulder development',
        duration: 45,
        gifUrl: '/gifs/bro-split/shoulders/rear-delt-flyes.gif',
        instructions: [
            'Hinge forward slightly',
            'Hold dumbbells in front of you',
            'Raise dumbbells to sides',
            'Squeeze rear delts at top'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 12
    },
    {
        id: 'shoulders-arnold-press',
        name: 'Arnold Press',
        description: 'All three shoulder heads',
        duration: 60,
        gifUrl: '/gifs/bro-split/shoulders/arnold-press.gif',
        instructions: [
            'Hold dumbbells at shoulder height, palms facing you',
            'Press up while rotating palms outward',
            'Lower back down, rotating palms inward'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 10
    },
    {
        id: 'shoulders-cable-raises',
        name: 'Cable Lateral Raises',
        description: 'Shoulders - constant tension',
        duration: 45,
        gifUrl: '/gifs/bro-split/shoulders/cable-raises.gif',
        instructions: [
            'Hold cable at side',
            'Raise cable to shoulder height',
            'Maintain tension throughout',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 15
    },
    {
        id: 'shoulders-upright-rows',
        name: 'Upright Barbell Rows',
        description: 'Shoulder and trap builder',
        duration: 45,
        gifUrl: '/gifs/bro-split/shoulders/upright-rows.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Grip barbell with narrow stance',
            'Pull elbows up and out',
            'Lower barbell back down'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 10
    }
];

// === LEG EXERCISES ===
const legExercises: Exercise[] = [
    {
        id: 'legs-barbell-squat',
        name: 'Barbell Back Squat',
        description: 'Quadriceps builder',
        duration: 75,
        gifUrl: '/gifs/bro-split/legs/back-squat.gif',
        instructions: [
            'Place bar on upper back',
            'Feet shoulder-width apart',
            'Lower hips back and down',
            'Drive through heels to stand'
        ],
        difficulty: 'advanced',
        muscleGroup: 'legs',
        sets: 4,
        reps: 8
    },
    {
        id: 'legs-leg-press',
        name: 'Leg Press',
        description: 'Leg strength builder',
        duration: 60,
        gifUrl: '/gifs/bro-split/legs/leg-press.gif',
        instructions: [
            'Sit in machine with back against pad',
            'Place feet on platform',
            'Lower platform toward chest',
            'Drive platform back up'
        ],
        difficulty: 'beginner',
        muscleGroup: 'legs',
        sets: 3,
        reps: 10
    },
    {
        id: 'legs-leg-curls',
        name: 'Lying Leg Curls',
        description: 'Hamstring isolation',
        duration: 45,
        gifUrl: '/gifs/bro-split/legs/leg-curls.gif',
        instructions: [
            'Lie face down on machine',
            'Position legs under pad',
            'Curl legs up toward glutes',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'legs',
        sets: 3,
        reps: 12
    },
    {
        id: 'legs-leg-extensions',
        name: 'Leg Extensions',
        description: 'Quadriceps isolation',
        duration: 45,
        gifUrl: '/gifs/bro-split/legs/leg-extensions.gif',
        instructions: [
            'Sit in machine with back against pad',
            'Place feet under pad',
            'Extend legs up',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'legs',
        sets: 3,
        reps: 12
    },
    {
        id: 'legs-walking-lunges',
        name: 'Walking Lunges',
        description: 'Legs and balance',
        duration: 60,
        gifUrl: '/gifs/bro-split/legs/walking-lunges.gif',
        instructions: [
            'Stand with feet together',
            'Step forward and lower hips',
            'Drive through front heel',
            'Step forward with other leg'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'legs',
        sets: 3,
        reps: 10
    },
    {
        id: 'legs-calf-raises',
        name: 'Calf Raises',
        description: 'Calf muscle builder',
        duration: 45,
        gifUrl: '/gifs/bro-split/legs/calf-raises.gif',
        instructions: [
            'Stand on step or platform',
            'Rise up on toes',
            'Hold at top for a moment',
            'Lower heels below platform'
        ],
        difficulty: 'beginner',
        muscleGroup: 'legs',
        sets: 3,
        reps: 15
    }
];

// === ARM EXERCISES ===
const armExercises: Exercise[] = [
    {
        id: 'arms-barbell-curls',
        name: 'Barbell Curls',
        description: 'Bicep builder',
        duration: 60,
        gifUrl: '/gifs/bro-split/arms/barbell-curls.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Grip barbell with underhand grip',
            'Curl barbell up toward shoulders',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 4,
        reps: 8
    },
    {
        id: 'arms-tricep-rope-pushdowns',
        name: 'Rope Tricep Pushdowns',
        description: 'Tricep isolation',
        duration: 45,
        gifUrl: '/gifs/bro-split/arms/rope-pushdowns.gif',
        instructions: [
            'Stand facing cable machine',
            'Grip rope attachment',
            'Push rope down, fully extending arms',
            'Return to starting position'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 3,
        reps: 12
    },
    {
        id: 'arms-dumbbell-curls',
        name: 'Dumbbell Curls',
        description: 'Bicep strength',
        duration: 45,
        gifUrl: '/gifs/bro-split/arms/dumbbell-curls.gif',
        instructions: [
            'Stand with dumbbells at sides',
            'Keep elbows tucked',
            'Curl dumbbells up to shoulders',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 3,
        reps: 10
    },
    {
        id: 'arms-overhead-tricep-extension',
        name: 'Overhead Tricep Extension',
        description: 'Tricep and shoulder',
        duration: 45,
        gifUrl: '/gifs/bro-split/arms/overhead-tricep-extension.gif',
        instructions: [
            'Hold dumbbell above head',
            'Lower dumbbell behind head',
            'Keep elbows tucked',
            'Extend arms back up'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 3,
        reps: 12
    },
    {
        id: 'arms-cable-curls',
        name: 'Cable Curls',
        description: 'Bicep isolation - constant tension',
        duration: 45,
        gifUrl: '/gifs/bro-split/arms/cable-curls.gif',
        instructions: [
            'Stand facing cable machine',
            'Grip curl bar with underhand grip',
            'Curl bar up',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 3,
        reps: 12
    },
    {
        id: 'arms-hammer-curls',
        name: 'Hammer Curls',
        description: 'Bicep and forearm builder',
        duration: 45,
        gifUrl: '/gifs/bro-split/arms/hammer-curls.gif',
        instructions: [
            'Stand with dumbbells at sides, neutral grip',
            'Curl dumbbells up toward shoulders',
            'Squeeze biceps at top',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'arms',
        sets: 3,
        reps: 10
    }
];

/**
 * Bro Split Weekly Schedule
 */
export const broSplitWeeklySchedule = {
    Monday: {
        id: 'bro-split-monday',
        name: 'Chest Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'chest' as const,
        exercises: chestExercises,
        totalDuration: 60 * 6, // 6 minutes per exercise
        dayOfWeek: 'Monday'
    },
    Tuesday: {
        id: 'bro-split-tuesday',
        name: 'Back Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'back' as const,
        exercises: backExercises,
        totalDuration: 60 * 6,
        dayOfWeek: 'Tuesday'
    },
    Wednesday: {
        id: 'bro-split-wednesday',
        name: 'Shoulder Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'shoulders' as const,
        exercises: shoulderExercises,
        totalDuration: 60 * 6,
        dayOfWeek: 'Wednesday'
    },
    Thursday: {
        id: 'bro-split-thursday',
        name: 'Leg Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'legs' as const,
        exercises: legExercises,
        totalDuration: 60 * 6,
        dayOfWeek: 'Thursday'
    },
    Friday: {
        id: 'bro-split-friday',
        name: 'Arm Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'arms' as const,
        exercises: armExercises,
        totalDuration: 60 * 6,
        dayOfWeek: 'Friday'
    },
    Saturday: {
        id: 'bro-split-saturday',
        name: 'Cardio/Active Recovery',
        type: 'bro-split' as const,
        muscleGroupFocus: 'back' as const, // placeholder
        exercises: [],
        totalDuration: 30 * 60, // 30 minutes
        dayOfWeek: 'Saturday'
    },
    Sunday: {
        id: 'bro-split-sunday',
        name: 'Rest Day',
        type: 'bro-split' as const,
        muscleGroupFocus: 'back' as const, // placeholder
        exercises: [],
        totalDuration: 0,
        dayOfWeek: 'Sunday'
    }
};

export const broSplitExercises = {
    chest: chestExercises,
    back: backExercises,
    shoulders: shoulderExercises,
    legs: legExercises,
    arms: armExercises,
    schedule: broSplitWeeklySchedule
};
