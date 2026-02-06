const UI = {
  updateSleep() { 
  const data = Sleep.calculate();
  document.getElementById("sleepBy").textContent = data.sleepBy;
  document.getElementById("wakeAt").textContent = data.wakeAt;
  document.getElementById("sleepQuality").textContent =
    "Expected rest: " + data.quality;

  const noteEl = document.getElementById("sleepNote");
  if (noteEl) noteEl.textContent = data.note;

  },

  updateRideAdvice() {
    document.getElementById("rideAdvice").textContent = Ride.getAdvice();
  },

  updateOTStatus() {
  const status = document.getElementById("otStatus");

  if (OT.getDuration()) {
    status.textContent = `OT running: ${OT.getDuration()}`;
  } else {
    status.textContent = "No OT running";
  }
},
   applySundayMode() {
  if (State.isSunday) {
    document.body.classList.add("sunday-mode");
  }
},
updateDayBadge() {
  const badge = document.getElementById("dayBadge");
  if (!badge) return;

  const shift = State.today.shift;
  const isSunday = new Date().getDay() === 0;

  if (isSunday) {
    badge.textContent = "🟠 Sunday OT";
  } else if (shift === "morning") {
    badge.textContent = "🟢 Morning Shift";
  } else {
    badge.textContent = "🔵 Afternoon Shift";
  }
},
updateNightMessage() {
  const msg = document.querySelector(".night-message");
  if (!msg) return;

  const hour = new Date().getHours();

  if (hour >= 21) {
    msg.textContent = "You’ve done enough for today 🌙";
  } else {
    msg.textContent = "Tomorrow is a new niyyah 🌙";
  }
},
showSundayMessage() {
  const isSunday = new Date().getDay() === 0;
  if (!isSunday) return;

  const msg = document.querySelector(".night-message");
  if (!msg) return;

  msg.textContent = "Extra effort today counts more 🤍";
}


};
