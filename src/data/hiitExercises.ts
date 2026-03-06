import { HIITWorkout, Exercise } from '../types/workoutTypes';

/**
 * HIIT Exercise Library
 * 30 seconds work / 30 seconds rest pattern
 */

const hiitExerciseLibrary: Exercise[] = [
    {
        id: 'hiit-jumping-jacks',
        name: 'Jumping Jacks',
        description: 'Full body cardio warm-up',
        duration: 30,
        gifUrl: '/gifs/hiit/jumping-jacks.gif',
        instructions: [
            'Stand with feet together, arms at sides',
            'Jump while spreading feet and raising arms',
            'Return to starting position',
            'Keep a steady, controlled rhythm'
        ],
        difficulty: 'beginner',
        restTime: 30
    },
    {
        id: 'hiit-burpees',
        name: 'Burpees',
        description: 'Full body intensive exercise',
        duration: 30,
        gifUrl: '/gifs/hiit/burpees.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Squat down and place hands on ground',
            'Jump feet back into plank position',
            'Jump feet back toward hands',
            'Jump up explosively'
        ],
        difficulty: 'advanced',
        restTime: 30
    },
    {
        id: 'hiit-mountain-climbers',
        name: 'Mountain Climbers',
        description: 'Core and cardio exercise',
        duration: 30,
        gifUrl: '/gifs/hiit/mountain-climbers.gif',
        instructions: [
            'Start in plank position',
            'Drive knees toward chest alternately',
            'Keep hips level and core engaged',
            'Maintain steady pace throughout'
        ],
        difficulty: 'intermediate',
        restTime: 30
    },
    {
        id: 'hiit-high-knees',
        name: 'High Knees',
        description: 'Cardio and hip flexor activation',
        duration: 30,
        gifUrl: '/gifs/hiit/high-knees.gif',
        instructions: [
            'Stand with feet hip-width apart',
            'Run in place, driving knees up to hip level',
            'Pump arms for momentum',
            'Maintain an upright posture'
        ],
        difficulty: 'beginner',
        restTime: 30
    },
    {
        id: 'hiit-squat-jumps',
        name: 'Squat Jumps',
        description: 'Lower body power and cardio',
        duration: 30,
        gifUrl: '/gifs/hiit/squat-jumps.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Lower into a squat position',
            'Explode upward with a jump',
            'Land softly and repeat'
        ],
        difficulty: 'intermediate',
        restTime: 30
    },
    {
        id: 'hiit-push-ups',
        name: 'Push-ups',
        description: 'Upper body and core strength',
        duration: 30,
        gifUrl: '/gifs/hiit/push-ups.gif',
        instructions: [
            'Start in plank position, hands shoulder-width apart',
            'Lower your body until chest nearly touches floor',
            'Push back up to starting position',
            'Keep body in straight line throughout'
        ],
        difficulty: 'intermediate',
        restTime: 30
    },
    {
        id: 'hiit-plank-jacks',
        name: 'Plank Jacks',
        description: 'Core and cardio combination',
        duration: 30,
        gifUrl: '/gifs/hiit/plank-jacks.gif',
        instructions: [
            'Start in plank position',
            'Jump feet out to sides, then back together',
            'Keep hips stable and core engaged',
            'Maintain consistent pace'
        ],
        difficulty: 'intermediate',
        restTime: 30
    },
    {
        id: 'hiit-jump-rope',
        name: 'Jump Rope',
        description: 'Cardio and coordination',
        duration: 30,
        gifUrl: '/gifs/hiit/jump-rope.gif',
        instructions: [
            'Hold rope handles at waist height',
            'Jump over rope with small, quick jumps',
            'Keep elbows close to body',
            'Stay light on feet'
        ],
        difficulty: 'beginner',
        restTime: 30
    },
    {
        id: 'hiit-lunges',
        name: 'Lunges',
        description: 'Lower body strength',
        duration: 30,
        gifUrl: '/gifs/hiit/lunges.gif',
        instructions: [
            'Stand with feet hip-width apart',
            'Step forward and lower hips',
            'Front knee should be above ankle',
            'Push back to starting position and alternate legs'
        ],
        difficulty: 'intermediate',
        restTime: 30
    },
    {
        id: 'hiit-bear-crawl',
        name: 'Bear Crawl',
        description: 'Full body cardio and strength',
        duration: 30,
        gifUrl: '/gifs/hiit/bear-crawl.gif',
        instructions: [
            'Start in plank position',
            'Crawl forward on hands and feet',
            'Keep hips low and engaged',
            'Crawl backward to starting position'
        ],
        difficulty: 'advanced',
        restTime: 30
    },
    {
        id: 'hiit-box-jumps',
        name: 'Box Jumps',
        description: 'Explosive lower body power',
        duration: 30,
        gifUrl: '/gifs/hiit/box-jumps.gif',
        instructions: [
            'Stand facing a sturdy box or bench',
            'Swing arms and jump onto box',
            'Stand at full height at top',
            'Step down carefully'
        ],
        difficulty: 'advanced',
        restTime: 30
    },
    {
        id: 'hiit-tricep-dips',
        name: 'Tricep Dips',
        description: 'Upper body strength',
        duration: 30,
        gifUrl: '/gifs/hiit/tricep-dips.gif',
        instructions: [
            'Use a chair or bench behind you',
            'Place hands on edge, body in front',
            'Lower body by bending elbows',
            'Push back up to starting position'
        ],
        difficulty: 'intermediate',
        restTime: 30
    }
];

/**
 * HIIT 10-Minute Workout - Beginner
 * 5 rounds of 2 exercises: 30 seconds on / 30 seconds rest
 */
export const hiit10MinBeginner: HIITWorkout = {
    id: 'hiit-10-beginner',
    name: 'HIIT 10 Min - Beginner',
    type: 'hiit',
    difficulty: 'beginner',
    workDuration: 30,
    restDuration: 30,
    rounds: 5,
    exercises: [
        hiitExerciseLibrary[0], // Jumping Jacks
        hiitExerciseLibrary[7]  // Jump Rope
    ],
    totalDuration: 600, // 10 minutes
    restBetweenExercises: 30
};

/**
 * HIIT 10-Minute Workout - Intermediate
 */
export const hiit10MinIntermediate: HIITWorkout = {
    id: 'hiit-10-intermediate',
    name: 'HIIT 10 Min - Intermediate',
    type: 'hiit',
    difficulty: 'intermediate',
    workDuration: 30,
    restDuration: 30,
    rounds: 5,
    exercises: [
        hiitExerciseLibrary[2], // Mountain Climbers
        hiitExerciseLibrary[4], // Squat Jumps
        hiitExerciseLibrary[6]  // Plank Jacks
    ],
    totalDuration: 600,
    restBetweenExercises: 30
};

/**
 * HIIT 10-Minute Workout - Advanced
 */
export const hiit10MinAdvanced: HIITWorkout = {
    id: 'hiit-10-advanced',
    name: 'HIIT 10 Min - Advanced',
    type: 'hiit',
    difficulty: 'advanced',
    workDuration: 30,
    restDuration: 30,
    rounds: 5,
    exercises: [
        hiitExerciseLibrary[1], // Burpees
        hiitExerciseLibrary[9], // Bear Crawl
        hiitExerciseLibrary[10] // Box Jumps
    ],
    totalDuration: 600,
    restBetweenExercises: 30
};

/**
 * HIIT 20-Minute Workout - Beginner
 * 10 rounds: 30 seconds on / 30 seconds rest
 */
export const hiit20MinBeginner: HIITWorkout = {
    id: 'hiit-20-beginner',
    name: 'HIIT 20 Min - Beginner',
    type: 'hiit',
    difficulty: 'beginner',
    workDuration: 30,
    restDuration: 30,
    rounds: 10,
    exercises: [
        hiitExerciseLibrary[0], // Jumping Jacks
        hiitExerciseLibrary[3], // High Knees
        hiitExerciseLibrary[7], // Jump Rope
        hiitExerciseLibrary[8]  // Lunges
    ],
    totalDuration: 1200, // 20 minutes
    restBetweenExercises: 30
};

/**
 * HIIT 20-Minute Workout - Intermediate
 */
export const hiit20MinIntermediate: HIITWorkout = {
    id: 'hiit-20-intermediate',
    name: 'HIIT 20 Min - Intermediate',
    type: 'hiit',
    difficulty: 'intermediate',
    workDuration: 30,
    restDuration: 30,
    rounds: 10,
    exercises: [
        hiitExerciseLibrary[2], // Mountain Climbers
        hiitExerciseLibrary[4], // Squat Jumps
        hiitExerciseLibrary[5], // Push-ups
        hiitExerciseLibrary[6], // Plank Jacks
        hiitExerciseLibrary[11] // Tricep Dips
    ],
    totalDuration: 1200,
    restBetweenExercises: 30
};

/**
 * HIIT 20-Minute Workout - Advanced
 */
export const hiit20MinAdvanced: HIITWorkout = {
    id: 'hiit-20-advanced',
    name: 'HIIT 20 Min - Advanced',
    type: 'hiit',
    difficulty: 'advanced',
    workDuration: 30,
    restDuration: 30,
    rounds: 10,
    exercises: [
        hiitExerciseLibrary[1],  // Burpees
        hiitExerciseLibrary[2],  // Mountain Climbers
        hiitExerciseLibrary[4],  // Squat Jumps
        hiitExerciseLibrary[9],  // Bear Crawl
        hiitExerciseLibrary[10]  // Box Jumps
    ],
    totalDuration: 1200,
    restBetweenExercises: 30
};

/**
 * All HIIT workouts collection
 */
export const allHIITWorkouts: HIITWorkout[] = [
    hiit10MinBeginner,
    hiit10MinIntermediate,
    hiit10MinAdvanced,
    hiit20MinBeginner,
    hiit20MinIntermediate,
    hiit20MinAdvanced
];

export const hiitExercises = {
    library: hiitExerciseLibrary,
    workouts10Min: [hiit10MinBeginner, hiit10MinIntermediate, hiit10MinAdvanced],
    workouts20Min: [hiit20MinBeginner, hiit20MinIntermediate, hiit20MinAdvanced],
    all: allHIITWorkouts
};
