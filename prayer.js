const Prayer = {
  prayers: ["fajr", "dhuhr", "asr", "maghrib", "isha"],

  load() {
    const today = this.todayKey();
    return Storage.load(today, {
      fajr: false,
      dhuhr: false,
      asr: false,
      maghrib: false,
      isha: false
    });
  },

  save(data) {
    Storage.save(this.todayKey(), data);
  },

  todayKey() {
    const d = new Date();
    return `prayer-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  },

  toggle(name, value) {
    const data = this.load();
    data[name] = value;
    this.save(data);
  },

  getNextPrayer() {
    const now = new Date().getHours();

    if (now < 6) return "Fajr";
    if (now < 13) return "Dhuhr";
    if (now < 16) return "Asr";
    if (now < 19) return "Maghrib";
    return "Isha";
  },

  initUI() {
    const data = this.load();
    const checkboxes = document.querySelectorAll(".prayer-list input");

    checkboxes.forEach((cb, index) => {
      const name = this.prayers[index];
      cb.checked = data[name];

      cb.addEventListener("change", e => {
        this.toggle(name, e.target.checked);
      });
    });

    document.getElementById("nextPrayer").textContent =
      "Next prayer: " + this.getNextPrayer();
  }
};
