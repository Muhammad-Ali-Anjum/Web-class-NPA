// ---------------- Scenario 1: Reminder Notification ----------------
let reminderTimeout = setTimeout(() => {
  console.log("Time to drink water!");
}, 5000);

// Cancel reminder example
function cancelReminder() {
  clearTimeout(reminderTimeout);
  console.log("Reminder canceled!");
}

// ---------------- Scenario 2: Live Score Counter ----------------
let score = 0;
const scoreInterval = setInterval(() => {
  score++;
  console.log("Score:", score);
}, 1000);

setTimeout(() => {
  clearInterval(scoreInterval);
  console.log("Score updating stopped!");
}, 10000);

// ---------------- Scenario 3: Event Countdown ----------------
let countdownValue = 15;

function countdown() {
  console.log("Countdown:", countdownValue);
  if (countdownValue === 0) {
    console.log("Event Started!");
    return;
  }
  countdownValue--;
  setTimeout(countdown, 1000);
}

countdown();

// ---------------- Scenario 4: Private Click Counter (Closure) ----------------
const makeCounter = () => {
  let count = 0; // private
  return () => {
    count++;
    console.log("Button clicked", count, "times");
  };
};

const counter = makeCounter();
// Call counter() whenever button clicked in frontend
// Example simulation:
counter();
counter();

// ---------------- Scenario 5: Limited Repeating Message ----------------
let repeatCount = 0;
const motivationInterval = setInterval(() => {
  repeatCount++;
  console.log("Keep going! (" + repeatCount + ")");
  if (repeatCount === 5) {
    clearInterval(motivationInterval);
    console.log("Motivation finished!");
  }
}, 1000);

// Example: cancel reminder after 2 seconds
// setTimeout(cancelReminder, 2000);
