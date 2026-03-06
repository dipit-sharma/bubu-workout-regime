# Bubu Workout Regime - Build Approach

## Project Overview

A web application designed to guide Bubu through a structured workout program combining HIIT (High-Intensity Interval Training) and a bro split routine. The app displays daily exercises with GIFs for proper form reference.

## Architecture & Approach

### Phase 1: HIIT Week (Week 1)

- Mixed cardio and strength exercises
- Workout duration: 10 or 20 minutes based on difficulty level
- Daily guided routines with visual demonstrations

### Phase 2: Bro Split Routine (Weeks 2+)

- 6 exercises per day targeting one specific muscle group
- Daily schedule:
  - Monday: Chest
  - Tuesday: Back
  - Wednesday: Shoulders
  - Thursday: Legs
  - Friday: Arms
  - Saturday: (Optional or Cardio)
  - Sunday: Rest

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite (for fast development)
- **Styling**: CSS/Tailwind CSS
- **Data Management**: JSON-based exercise database
- **Asset Hosting**: GIFs stored in `/public/gifs/` directory

## Project Structure

```
src/
├── components/
│   ├── WorkoutDisplay.tsx      # Main workout view component
│   ├── ExerciseCard.tsx        # Individual exercise card with GIF
│   ├── DifficultySelector.tsx  # HIIT difficulty level selector
│   ├── WeekIndicator.tsx       # Show current week and day
│   └── ProgressTracker.tsx     # Track completed exercises
├── data/
│   ├── hiitExercises.ts        # HIIT workout definitions
│   ├── broSplitExercises.ts    # Bro split exercises by muscle group
│   └── exerciseDatabase.ts     # Centralized exercise data
├── types/
│   └── workoutTypes.ts         # TypeScript interfaces
├── hooks/
│   ├── useWorkoutProgram.ts    # Manage workout state logic
│   └── useCurrentDay.ts        # Track current week/day
├── App.tsx                      # Main app component
└── main.tsx                    # Entry point
```

## Build Phases

### Phase 1: Data Structure Setup

1. Define TypeScript types for exercises
2. Create exercise database with GIF references
3. Implement HIIT workout sets (10 & 20 min versions)
4. Organize bro split exercises by muscle groups

**Type Definition Example:**

```typescript
interface Exercise {
  id: string;
  name: string;
  duration: number; // seconds
  gifUrl: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  muscleGroup?: string;
  restTime?: number;
}

interface Workout {
  exercises: Exercise[];
  totalDuration: number;
  muscleGroupFocus?: string;
}
```

### Phase 2: Core Components

1. **ExerciseCard**: Display exercise name, GIF, duration, instructions
2. **WorkoutDisplay**: Render all exercises for current day
3. **DifficultySelector**: Choose between 10 or 20-minute HIIT workouts
4. **WeekIndicator**: Show "Week 1 - HIIT Mode" or "Week 2+ - Day X (Muscle Group)"

### Phase 3: State Management

1. **useWorkoutProgram**:
   - Track current week (auto-switch Week 1 → Week 2 after 7 days)
   - Serve correct exercises based on week and day
   - Handle difficulty selection for HIIT

2. **useCurrentDay**:
   - Calculate current day of week
   - Determine muscle group for bro split days

### Phase 4: Styling & UX

1. Responsive layout for mobile/tablet/desktop
2. Large GIF display area
3. Timer/progress indicators for each exercise
4. Visual feedback for completed exercises
5. Navigation between days

### Phase 5: Enhanced Features

1. Timer countdown for each exercise
2. Audio cues between exercises
3. Daily completion checkmarks
4. Progress statistics dashboard
5. Exercise history/notes

## Workout Data Structure

### HIIT Exercises (Week 1)

**10-Minute Version**:

- 5 rounds of: Exercise 1 (30s on/30s rest) + Exercise 2 (30s on/30s rest)

**20-Minute Version**:

- 10 rounds with additional exercises or longer work intervals

### Bro Split (Week 2+)

```typescript
const broSplitSchedule = {
  Monday: { muscleGroup: 'Chest', exercises: [ex1, ex2, ex3, ex4, ex5, ex6] },
  Tuesday: { muscleGroup: 'Back', exercises: [...] },
  // ... etc
}
```

## GIF Asset Organization

```
public/gifs/
├── hiit/
│   ├── jumping-jacks.gif
│   ├── burpees.gif
│   └── ...
├── bro-split/
│   ├── chest/
│   │   ├── bench-press.gif
│   │   └── incline-dumbbell.gif
│   ├── back/
│   ├── shoulders/
│   ├── legs/
│   └── arms/
```

## Development Workflow

1. **Setup**: Install dependencies → `npm install`
2. **Dev Server**: `npm run dev` → Hot reload enabled
3. **Build**: `npm run build` → Production bundle
4. **Test**: Add unit tests for workout logic
5. **Deploy**: Build output to static hosting

## Key Milestones

- [ ] Define all TypeScript types
- [ ] Create HIIT and bro split exercise databases
- [ ] Build ExerciseCard component
- [ ] Build WorkoutDisplay component with day logic
- [ ] Implement useWorkoutProgram hook
- [ ] Add difficulty selector for HIIT
- [ ] Style responsive layout
- [ ] Add timer functionality
- [ ] Gather/optimize GIF files
- [ ] Deploy and test

## Future Enhancements

- Rest day activities (stretching, mobility)
- Progressive overload tracking (weights, reps)
- Custom workout modifications
- Social sharing and community challenges
- Nutrition tracking integration
- Equipment requirements per exercise
- Difficulty progression system

## Notes

- Week transition: Auto-switch from HIIT to bro split after 7 days
- Mobile-first design for gym use
- Offline support (GIFs cached locally)
- Motivational UI with completion stats
