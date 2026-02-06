const Sleep = {
  calculate() {
    const shift = State.today.shift;
    const otRunning = State.today.otRunning;

    let wakeAt, sleepBy, quality, note;

    if (shift === "morning") {
      wakeAt = "05:30";
      sleepBy = "22:00";
    } else {
      wakeAt = "09:00";
      sleepBy = "01:30";
    }

    // Fajr-aware logic
    const nowHour = new Date().getHours();
    if (nowHour >= 23 || nowHour < 5) {
      note = "🌙 Keep niyyah for Fajr, sleep early if possible";
    } else {
      note = "🕌 Plan sleep around Isha & Fajr";
    }

    quality = otRunning ? "Okay (long day)" : "Good";

    return { sleepBy, wakeAt, quality, note };
  }
};
