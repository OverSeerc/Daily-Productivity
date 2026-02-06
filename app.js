    document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loadingOverlay");
const dateEl = document.getElementById("todayDate");
const today = new Date();

dateEl.textContent = today.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long"
});


    setTimeout(() => {
  loader.style.display = "none";
}, 600); // short & smooth

 setInterval(() => {
     UI.updateOTStatus();
}, 60000);

    const navButtons = document.querySelectorAll(".section-nav button");
    const sections = document.querySelectorAll(".section");

    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

      btn.classList.add("active");
        document.getElementById(btn.dataset.section).classList.add("active");
  });
});

        Prayer.initUI();
  const shiftSelect = document.getElementById("shiftSelect");
  const bikeBtn = document.getElementById("bikeBtn");
  const carBtn = document.getElementById("carBtn");
  const energyLevel = document.getElementById("energyLevel");
  const startOtBtn = document.getElementById("startOtBtn");
  const endOtBtn = document.getElementById("endOtBtn");
  const rideBtn = document.getElementById("rideBtn");

  // Load initial state
  shiftSelect.value = State.today.shift;
  energyLevel.value = State.today.energy;

  UI.updateSleep();
  UI.updateOTStatus();
  UI.updateDayBadge();
  UI.updateNightMessage();
  UI.showSundayMessage();


  // Shift change
  shiftSelect.addEventListener("change", e => {
  Shift.set(e.target.value);
  UI.updateSleep();
  UI.updateDayBadge();
});


  // Transport toggle
  bikeBtn.onclick = () => {
    Transport.set("bike");
    bikeBtn.classList.add("active");
    carBtn.classList.remove("active");
  };

  carBtn.onclick = () => {
    Transport.set("car");
    carBtn.classList.add("active");
    bikeBtn.classList.remove("active");
  };

  // Energy slider
  energyLevel.oninput = e => {
    State.today.energy = Number(e.target.value);
    Storage.save("energy", State.today.energy);
  };

  // OT buttons
  startOtBtn.onclick = () => {
    OT.start();
    startOtBtn.disabled = true;
    endOtBtn.disabled = false;
    UI.updateOTStatus();
    UI.updateSleep();
  };

  endOtBtn.onclick = () => {
    OT.end();
    startOtBtn.disabled = false;
    endOtBtn.disabled = true;
    UI.updateOTStatus();
    UI.updateSleep();
  };

  // Ride button
  rideBtn.onclick = () => {
    UI.updateRideAdvice();
  };
});
UI.applySundayMode();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

