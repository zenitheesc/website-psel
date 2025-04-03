import React, { useState, useEffect, useRef } from "react";

const HOURS_TOTAL = 2;
const MINUTES_PENALTY = 1;
const HOURS_TOTAL_SECONDS = HOURS_TOTAL * 60 * 60;
const MINUTES_PENALTY_SECONDS = MINUTES_PENALTY * 60;

export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(HOURS_TOTAL_SECONDS);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setStarted(true);
  };

  const setErrorTrue = () => {
    setError(true);
  };

  const minus = () => {
    setTotalSeconds((prev) => {
      const newTime = prev - MINUTES_PENALTY_SECONDS;
      if (newTime <= 0) {
        stopTimer();
        window.dispatchEvent(new CustomEvent("timerFinished"));
        return 0;
      }
      return newTime;
    });
  };

  const stopTimer = () => {
    setStarted(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  useEffect(() => {
    if (started && intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            stopTimer();
            window.dispatchEvent(new CustomEvent("timerFinished"));
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (!started && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [started]);

  useEffect(() => {
    if (error) {
      minus();
      setError(false);
    }
  }, [error]);

  useEffect(() => {
    window.addEventListener("startTimer", startTimer);
    window.addEventListener("error", setErrorTrue);
    return () => {
      window.removeEventListener("startTimer", startTimer);
      window.removeEventListener("error", setErrorTrue);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        fontSize: "24px",
        fontFamily: "monospace",
      }}
    >
      {formatTime(totalSeconds)}
    </div>
  );
}
