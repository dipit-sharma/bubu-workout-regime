import { useEffect, useMemo, useState } from "react";
import "./App.css";
import WorkoutDisplay from "./components/WorkoutDisplay";
import { broSplitExercises } from "./data/broSplitExercises";
import type { MuscleGroup, Workout } from "./types/workoutTypes";

type DayEntry = {
  day: string;
  slug: string;
  muscleGroup: string;
  muscleGroupKey?: MuscleGroup;
};

const DAY_CARDS: DayEntry[] = [
  { day: "Sunday", slug: "sunday", muscleGroup: "Rest" },
  {
    day: "Monday",
    slug: "monday",
    muscleGroup: "Chest",
    muscleGroupKey: "chest",
  },
  {
    day: "Tuesday",
    slug: "tuesday",
    muscleGroup: "Back",
    muscleGroupKey: "back",
  },
  {
    day: "Wednesday",
    slug: "wednesday",
    muscleGroup: "Shoulders",
    muscleGroupKey: "shoulders",
  },
  {
    day: "Thursday",
    slug: "thursday",
    muscleGroup: "Legs",
    muscleGroupKey: "legs",
  },
  {
    day: "Friday",
    slug: "friday",
    muscleGroup: "Arms",
    muscleGroupKey: "arms",
  },
  { day: "Saturday", slug: "saturday", muscleGroup: "Active Recovery" },
];

const getRoute = () => window.location.pathname.toLowerCase();

function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const todayIndex = new Date().getDay();

  return (
    <main className="app-main">
      <section className="home-intro">
        <h2 className="home-title">Weekly Split</h2>
        <p className="home-subtitle">
          Pick a day to see all exercises for that workout.
        </p>
      </section>

      <section className="day-card-grid" aria-label="Weekday workout cards">
        {DAY_CARDS.map((entry, index) => (
          <button
            key={entry.slug}
            type="button"
            className={`day-card ${index === todayIndex ? "day-card-active" : ""}`}
            onClick={() => onNavigate(`/day/${entry.slug}`)}
          >
            <span className="day-card-day">{entry.day}</span>
            <span className="day-card-muscle">{entry.muscleGroup}</span>
          </button>
        ))}
      </section>
    </main>
  );
}

function DayPage({
  selectedDay,
  onNavigate,
}: {
  selectedDay: DayEntry;
  onNavigate: (path: string) => void;
}) {
  const workout = useMemo<Workout | null>(() => {
    return broSplitExercises.schedule[selectedDay.day] ?? null;
  }, [selectedDay.day]);

  return (
    <main className="app-main">
      <div className="day-page-header">
        <button
          type="button"
          className="back-home-button"
          onClick={() => onNavigate("/")}
        >
          Back to Home
        </button>
      </div>

      {workout && workout.exercises.length > 0 ? (
        <WorkoutDisplay
          workout={workout}
          dayName={selectedDay.day}
          muscleGroup={selectedDay.muscleGroupKey}
        />
      ) : (
        <section className="rest-day-message">
          <h2>{selectedDay.day}</h2>
          <p>{selectedDay.muscleGroup} day. No exercises scheduled.</p>
        </section>
      )}
    </main>
  );
}

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname.toLowerCase() === path.toLowerCase()) {
      return;
    }
    window.history.pushState({}, "", path);
    setRoute(path.toLowerCase());
  };

  const selectedDay = useMemo(() => {
    const match = route.match(/^\/day\/([a-z]+)$/);
    if (!match) {
      return null;
    }
    return DAY_CARDS.find((entry) => entry.slug === match[1]) ?? null;
  }, [route]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Bubu's Workout Regime</h1>
        <p className="app-subtitle">HIIT + Bro Split planner</p>
      </header>

      {route === "/" && <HomePage onNavigate={navigate} />}
      {selectedDay && route !== "/" && (
        <DayPage selectedDay={selectedDay} onNavigate={navigate} />
      )}
      {!selectedDay && route !== "/" && (
        <main className="app-main">
          <section className="rest-day-message">
            <h2>Page not found</h2>
            <p>The requested day route does not exist.</p>
            <button
              type="button"
              className="back-home-button"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
