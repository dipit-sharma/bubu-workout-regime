

/**
 * Bro Split Exercise Library
 * 6 exercises per muscle group
 */

import type { Exercise } from "../types/workoutTypes";

// === CHEST EXERCISES ===
const chestExercises: Exercise[] = [
    {
        id: 'chest-bench-press',
        name: 'Barbell Bench Press',
        description: 'Primary chest builder',
        duration: 60,
        gifUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtmmoSIcudqC5BlowoHMTVlL4cDw0Lrv48w&s',
        instructions: [
            'Lie on flat bench, feet on ground',
            'Grip bar slightly wider than shoulders',
            'Lower bar to chest level',
            'Press bar back up to starting position'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 4,
        reps: 15
    },
    {
        id: 'chest-cable-flyes',
        name: 'Pec Flyes',
        description: 'Chest isolation',
        duration: 45,
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif',
        instructions: [
            'Set cables at shoulder height',
            'Stand in middle, grab handles',
            'Bring hands together in front',
            'Return to starting position with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 4,
        reps: 12
    },
    {
        id: 'chest-incline-dumbbell',
        name: 'Incline Dumbbell Press',
        description: 'Upper chest emphasis',
        duration: 60,
        gifUrl: 'https://media1.tenor.com/m/EKlO1-1CGSoAAAAC/kinobody.gif',
        instructions: [
            'Sit on incline bench (45 degrees)',
            'Hold dumbbells at shoulder height',
            'Press dumbbells up and together',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'chest',
        sets: 4,
        reps: 12
    },

    {
        id: 'inline-dumbbell-flyes',
        name: 'Incline Cable Flyes/Incline Dumbbell Flyes',
        description: 'Builds upper chest',
        duration: 60,
        gifUrl: ['https://9to5strength.com/wp-content/uploads/2016/10/low-cable-chest-fly.gif', `https://gymvisual.com/img/p/1/4/4/8/8/14488.gif`],
        instructions: [
            'Lie on the bench with dumbbells or set cables at low position',
            'Slowly bring dumbbells or cable handles together above chest',
            'Hold and feel the contraction in your chest',
            'Lower dumbbells or cable handles back to starting position with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'chest',
        sets: 4,
        reps: 15
    },
    {
        id: 'chest-dips',
        name: 'Decline Dumbbell Press/Decline Barbell Press',
        description: 'Lower chest and triceps',
        duration: 45,
        gifUrl: [`https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Dumbbell-Press.gif`, `https://fitnessprogramer.com/wp-content/uploads/2021/03/Decline-Barbell-Bench-Press.gif`],
        instructions: [
            'Lie on the decline bench with dumbbells or set up barbell on decline bench',
            'Slowly bring the bar up and together above chest',
            'Bring it down slowly to chest level around your nipples, holding the stretch at the bottom',
            'Push the bar back up to starting position with control'
        ],
        difficulty: 'advanced',
        muscleGroup: 'chest',
        sets: 4,
        reps: 12
    },
    {
        id: 'decline-cable-flyes',
        name: 'Decline Cable Flyes',
        description: 'Lower chest activation',
        duration: 45,
        gifUrl: 'https://gymvisual.com/img/p/2/4/7/6/0/24760.gif',
        instructions: [
            'Stand with one leg forward, holding cables in front of you',
            'Slowly bring the cables down and together in a wide arc, keeping a slight bend in your elbows',
            'Hold the cables together at the bottom, at height of your belly for a moment, squeezing your chest',
            'Slowly return to starting position with control, feeling the stretch in your chest at the top'
        ],
        difficulty: 'beginner',
        muscleGroup: 'chest',
        sets: 4,
        reps: 15
    }
];

// === BACK EXERCISES ===
const backExercises: Exercise[] = [
    {
        id: 'back-lat-pulldowns',
        name: 'Lat Pulldowns',
        description: 'Lats and upper back',
        duration: 45,
        gifUrl: 'https://media1.tenor.com/m/AR6A1jMcnE8AAAAC/lat-pull-down.gif',
        instructions: [
            'Sit with chest against pad, if you dont have pad just sit with feet flat on ground and tight arch your back',
            'Grip the bar wider than shoulders',
            'Pull bar down to upper chest',
            'Return to starting position'
        ],
        difficulty: 'beginner',
        muscleGroup: 'back',
        sets: 4,
        reps: 12
    },
    {
        id: 'cable-pullover',
        name: 'Cable Pullover',
        description: 'Lats and lower side back',
        duration: 75,
        gifUrl: 'https://i.pinimg.com/originals/f3/c6/c6/f3c6c61555639c1bb1a4b2c9c2c799c8.gif',
        instructions: [
            'Stand with feet hip-width apart',
            'Grip the bar with a shoulder-width grip',
            'Slowly bring the bar down while keeping arc tight and controlled',
            'Squeeze your lats at the bottom, then slowly return to starting position with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'back',
        sets: 4,
        reps: 15
    },
    {
        id: 'seated-cable-rows',
        name: 'Seated Cable Rows',
        description: 'Mid and upper back',
        duration: 60,
        gifUrl: 'https://gymvisual.com/img/p/1/5/4/9/6/15496.gif',
        instructions: [
            'Sit perpendicular to the platform, feet on platform',
            'Grip the bar firmly and pull towards your belly, squeezing your shoulder blades together',
            'Slowly return to starting position with control, feeling the stretch'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 4,
        reps: 12
    },
    {
        id: 'back-face-pulls',
        name: 'V-Grip Pull Down',
        description: 'Lower Back',
        duration: 45,
        gifUrl: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2025/04/close-neutral-grip-lat-pulldown.gif?resize=700%2C700&ssl=1',
        instructions: [
            'Sit while slightly leaning back, feet on platform',
            'Grip the bar firmly and pull down toward your chest, squeezing your shoulder blades together',
            'Slowly return to starting position with control, feeling the stretch in your back at the top'
        ],
        difficulty: 'beginner',
        muscleGroup: 'back',
        sets: 4,
        reps: 12
    },
    {
        id: 'back-dumbbell-rows',
        name: 'Single Arm Dumbbell Rows',
        description: 'Unilateral back strength',
        duration: 60,
        gifUrl: 'https://media1.tenor.com/m/ZA7d-cdoYEIAAAAC/bentoverrows.gif',
        instructions: [
            'Hinge forward, one knee on bench',
            'Pull dumbbell to hip',
            'Squeeze back at top',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 4,
        reps: 12
    },
    {
        id: 'reverse-grip-pulldown',
        name: 'Reverse Grip Pulldown',
        description: 'Lower lats and biceps',
        duration: 45,
        gifUrl: 'https://gymvisual.com/img/p/2/0/2/8/3/20283.gif',
        instructions: [
            'Same as lat-pulldown but with underhand grip',
            'Pull bar down to upper chest',
            'Squeeze lats at bottom',
            'Return to starting position with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'back',
        sets: 4,
        reps: 12
    }
];

// === SHOULDER EXERCISES ===
const shoulderExercises: Exercise[] = [
    {
        id: 'shoulders-military-press',
        name: 'Dumbbell Military Press',
        description: 'Shoulder pressing power',
        duration: 60,
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif',
        instructions: [
            'Sit with feet shoulder-width apart',
            'Grip dumbbells at shoulder height',
            'Press dumbbells overhead',
            'Lower dumbbells back down'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 12
    },
    {
        id: 'shoulders-lateral-raises',
        name: 'Front Dumbbell Raises',
        description: 'Shoulder width builder',
        duration: 45,
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Alternating-Dumbbell-Front-Raise.gif',
        instructions: [
            'Stand with dumbbells at front of thighs',
            'Keep slight elbow bend',
            'Raise dumbbells to shoulder height',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 15
    },
    {
        id: 'shoulders-lateral-raises',
        name: 'Dumbbell Lateral Raises',
        description: 'Shoulders - constant tension',
        duration: 45,
        gifUrl: 'https://gymvisual.com/img/p/1/9/1/5/1/19151.gif',
        instructions: [
            'Hold dumbbells at side',
            'Raise dumbbells to shoulder height',
            'Maintain tension throughout',
            'Lower with control'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 15
    },
    {
        id: 'shoulders-upright-rows',
        name: 'Upright Barbell Rows',
        description: 'Shoulder and trap builder',
        duration: 45,
        gifUrl: 'https://media1.tenor.com/m/StZ4pCYVM_AAAAAC/uppright-row-z-bar.gif',
        instructions: [
            'Stand with feet shoulder-width apart',
            'Grip barbell with narrow stance',
            'Pull elbows up and out',
            'Lower barbell back down'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 10
    },
    {
        id: 'shoulders-rear-delt-flies',
        name: 'Rear Delt Flyes',
        description: 'Rear shoulder development',
        duration: 45,
        gifUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQUgY77u1WE0ZykJbQnC6tBO_Hi8mW_YfOw&s',
        instructions: [
            'Sit firmly on the machine with chest against pad',
            'Hold the handles with a neutral grip',
            'Raise handles to sides',
            'Squeeze rear delts at top'
        ],
        difficulty: 'beginner',
        muscleGroup: 'shoulders',
        sets: 4,
        reps: 12
    },
    {
        id: 'shoulders-shrugs',
        name: 'Dumbbell Shrugs',
        description: 'Trapezius isolation',
        duration: 60,
        gifUrl: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Shrug.gif',
        instructions: [
            'Stand with dumbbells at sides',
            'Shrug shoulders up towards ears',
            'Hold at top for a moment, squeezing traps',
            'Lower with control'
        ],
        difficulty: 'intermediate',
        muscleGroup: 'shoulders',
        sets: 3,
        reps: 10
    },


];

// === LEG EXERCISES ===
const legExercises: Exercise[] = [
    {
        id: 'legs-barbell-squat',
        name: 'Barbell Back Squat',
        description: 'Quadriceps builder',
        duration: 75,
        gifUrl: 'https://media1.tenor.com/m/q0Sisfl_0V4AAAAC/bb-back-squats.gif',
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
        gifUrl: 'https://media1.tenor.com/m/Om6tZV5FwBgAAAAC/prazoli-prado.gif',
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
        gifUrl: 'https://media1.tenor.com/m/yGOPV0J4vxEAAAAC/mesa-flexora-treino-mestre.gif',
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
        gifUrl: 'https://media1.tenor.com/m/bqKtsSuqilQAAAAC/gym.gif',
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
        gifUrl: 'https://media1.tenor.com/m/NzU_WzaeD_oAAAAC/lunges-workout.gif',
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
        gifUrl: 'https://media1.tenor.com/m/JYsGi3a3Y_4AAAAC/single-leg-calf-raise.gif',
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
        gifUrl: 'https://media1.tenor.com/m/sPByAfA9ynAAAAAC/handsome-gymer.gif',
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
        gifUrl: 'https://media1.tenor.com/m/mbebKudZjxYAAAAC/tr%C3%ADceps-pulley.gif',
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
        gifUrl: 'https://media1.tenor.com/m/6WP4hNz7RmgAAAAC/dumbbells-bicep-curl.gif',
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
        gifUrl: 'https://media1.tenor.com/m/Vq6LrVGUAKIAAAAC/tr%C3%ADceps-fraces-na-polia.gif',
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
        gifUrl: 'https://media1.tenor.com/m/ObeK-tSJtyQAAAAC/cable-close-grip-curls.gif',
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
        gifUrl: 'https://media1.tenor.com/m/iO6D-DBFRTcAAAAC/dumbell-hammer-curls.gif',
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



