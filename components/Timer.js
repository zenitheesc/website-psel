import React, { useState, useEffect } from "react";

const HOURS_TOTAL = 1;

export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(HOURS_TOTAL * 60 * 60); // 2 horas
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);
  const [currID, setCurrID] = useState(0);

  const timer = () => {
    if (totalSeconds <= 0) {
      setStarted(false);
      window.dispatchEvent(new CustomEvent("timerFinished"));
      return;
    } else {
      setTotalSeconds((prev) => prev - 1);
    }
  };

  const minus = () => {
    if (totalSeconds <= 180) {
      clearTimeout(currID);
      setStarted(false);
      setTotalSeconds(0);
      window.dispatchEvent(new CustomEvent("timerFinished"));
    } else {
      setTotalSeconds((prev) => prev - 180);
    }
  };

  function startTimer() {
    setStarted(true);
  }

  function setErrorTrue() {
    setError(true);
  }

  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const pad = (num) => String(num).padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  }

  useEffect(() => {
    let intervalID;
    if (started) {
      intervalID = setTimeout(() => {
        timer();
      }, 1000);
      setCurrID(intervalID);
    } else {
      clearTimeout(currID);
    }
  }, [totalSeconds, started]);

  useEffect(() => {
    if (error && started) {
      minus();
    }
    if (error) setError(false);
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
